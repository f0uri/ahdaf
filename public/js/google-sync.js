(() => {
  const FILE = "ahdaf-state.json";
  const SCOPES = [
    "openid",
    "email",
    "profile",
    "https://www.googleapis.com/auth/drive.appdata",
  ].join(" ");

  function cfg() {
    return window.AHDAF_GOOGLE || {};
  }
  function clientId() {
    return String(cfg().webClientId || "").trim();
  }
  function ready() {
    return !!clientId();
  }
  function isNative() {
    try {
      return !!(window.Capacitor && window.Capacitor.isNativePlatform && window.Capacitor.isNativePlatform());
    } catch {
      return false;
    }
  }

  function randomStr(n = 48) {
    const a = new Uint8Array(n);
    crypto.getRandomValues(a);
    return Array.from(a, (b) => ("0" + b.toString(16)).slice(-2)).join("");
  }
  async function sha256b64url(s) {
    const buf = await crypto.subtle.digest("SHA-256", new TextEncoder().encode(s));
    const b = String.fromCharCode(...new Uint8Array(buf));
    return btoa(b).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/g, "");
  }

  // Web OAuth clients only accept http(s). This matches the Cloud Console URI.
  function redirectUri() {
    return "https://localhost";
  }

  function parseOauthUrl(raw) {
    const url = String(raw || "");
    if (!url) return { code: "", error: "" };
    try {
      const normalized = url
        .replace(/^app\.ahdaf\.scores:\/\//i, "https://ahdaf.local/")
        .replace(/^app\.ahdaf\.scores:/i, "https://ahdaf.local/");
      const u = new URL(normalized);
      return {
        code: u.searchParams.get("code") || "",
        error: u.searchParams.get("error") || "",
      };
    } catch {
      const code = (url.match(/[?&#]code=([^&#]+)/) || [])[1] || "";
      const error = (url.match(/[?&#]error=([^&#]+)/) || [])[1] || "";
      return {
        code: decodeURIComponent(code),
        error: decodeURIComponent(error),
      };
    }
  }

  async function httpJson(method, url, { headers = {}, body, raw } = {}) {
    const plugin = window.Capacitor?.Plugins?.CapacitorHttp;
    if (plugin?.request) {
      const res = await plugin.request({
        url,
        method,
        headers,
        data: body,
        disableRedirects: false,
      });
      const data = res.data;
      const parsed = typeof data === "string" && !raw ? (() => { try { return JSON.parse(data); } catch { return data; } })() : data;
      return { ok: res.status >= 200 && res.status < 300, status: res.status, data: parsed };
    }
    const r = await fetch(url, { method, headers, body: typeof body === "string" ? body : body && JSON.stringify(body) });
    const data = raw ? await r.text() : await r.json().catch(() => ({}));
    return { ok: r.ok, status: r.status, data };
  }

  async function exchangeCode(code, verifier) {
    const body = new URLSearchParams({
      client_id: clientId(),
      code,
      code_verifier: verifier,
      grant_type: "authorization_code",
      redirect_uri: redirectUri(),
    }).toString();
    const r = await httpJson("POST", "https://oauth2.googleapis.com/token", {
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body,
    });
    if (!r.ok) throw new Error("token " + r.status);
    return r.data;
  }

  async function userInfo(access) {
    const r = await httpJson("GET", "https://www.googleapis.com/oauth2/v3/userinfo", {
      headers: { Authorization: "Bearer " + access },
    });
    if (!r.ok) throw new Error("userinfo");
    return r.data;
  }

  function sessionFromProfile(access, refresh, me) {
    return {
      access,
      refresh: refresh || "",
      profile: {
        id: "g:" + (me.sub || me.id || me.email),
        name: me.name || "Google",
        email: me.email || "",
        picture: me.picture || "",
        mode: "google",
      },
    };
  }

  function consumeLocationCode() {
    try {
      const parsed = parseOauthUrl(location.href);
      if (parsed.code || parsed.error) {
        history.replaceState({}, "", location.pathname || "/");
        return parsed;
      }
    } catch {}
    return null;
  }

  let lastOauth = consumeLocationCode();
  try {
    const App = window.Capacitor?.Plugins?.App;
    const sub = App?.addListener?.("appUrlOpen", (e) => {
      const parsed = parseOauthUrl(e?.url);
      if (parsed.code || parsed.error) {
        lastOauth = parsed;
        window.__ahdafOauth?.(e.url);
      }
    });
    if (sub?.then) sub.catch(() => {});
  } catch {}

  function waitRedirect() {
    if (lastOauth?.code || lastOauth?.error) {
      const got = lastOauth;
      lastOauth = null;
      return Promise.resolve(got);
    }
    return new Promise((resolve, reject) => {
      let settled = false;
      const handles = [];
      const poll = setInterval(() => {
        const here = consumeLocationCode();
        if (here?.code || here?.error) finish(here);
      }, 350);
      const timer = setTimeout(() => finish(null, new Error("timeout")), 180000);

      function finish(value, err) {
        if (settled) return;
        settled = true;
        clearTimeout(timer);
        clearInterval(poll);
        handles.forEach((h) => {
          try { h.remove?.(); } catch {}
        });
        window.__ahdafOauth = null;
        if (err) reject(err);
        else resolve(value);
      }

      window.__ahdafOauth = (url) => {
        const parsed = typeof url === "string" ? parseOauthUrl(url) : url;
        if (parsed?.code || parsed?.error) finish(parsed);
      };

      const App = window.Capacitor?.Plugins?.App;
      const Browser = window.Capacitor?.Plugins?.Browser;
      try {
        const sub = App?.addListener?.("appUrlOpen", (e) => {
          const parsed = parseOauthUrl(e?.url);
          if (parsed.code || parsed.error) finish(parsed);
        });
        if (sub?.then) sub.then((h) => handles.push(h));
        else if (sub) handles.push(sub);
      } catch {}
      try {
        const sub = Browser?.addListener?.("browserFinished", () => {
          setTimeout(() => {
            if (!settled) finish(null, new Error("closed"));
          }, 500);
        });
        if (sub?.then) sub.then((h) => handles.push(h));
        else if (sub) handles.push(sub);
      } catch {}
    });
  }

  async function browserSignIn() {
    const id = clientId();
    if (!id) {
      const err = new Error("no-client");
      err.code = "no-client";
      throw err;
    }
    const verifier = randomStr(64);
    const challenge = await sha256b64url(verifier);
    const url =
      "https://accounts.google.com/o/oauth2/v2/auth?" +
      new URLSearchParams({
        client_id: id,
        redirect_uri: redirectUri(),
        response_type: "code",
        scope: SCOPES,
        code_challenge: challenge,
        code_challenge_method: "S256",
        access_type: "offline",
        prompt: "select_account",
        include_granted_scopes: "true",
      });

    const Browser = window.Capacitor?.Plugins?.Browser;
    if (!isNative() || !Browser?.open) {
      const err = new Error("no-browser");
      err.code = "no-browser";
      throw err;
    }

    await Browser.open({
      url,
      presentationStyle: "popover",
      toolbarColor: "#07090c",
    });

    let parsed;
    try {
      parsed = await waitRedirect();
    } finally {
      try { await Browser.close?.(); } catch {}
    }
    if (parsed?.error) throw new Error(parsed.error);
    if (!parsed?.code) throw new Error("no-code");
    const tok = await exchangeCode(parsed.code, verifier);
    const me = await userInfo(tok.access_token);
    return sessionFromProfile(tok.access_token, tok.refresh_token, me);
  }

  async function signIn() {
    if (!ready()) {
      const err = new Error("no-client");
      err.code = "no-client";
      throw err;
    }
    // Do not call Capacitor GoogleAuth.signIn — 3.4.0-rc.4 crashes the
    // process with NPE when the native client was never initialized.
    return browserSignIn();
  }

  async function findFile(access) {
    const q = encodeURIComponent("name = '" + FILE + "'");
    const r = await httpJson(
      "GET",
      "https://www.googleapis.com/drive/v3/files?spaces=appDataFolder&fields=files(id,name,modifiedTime)&q=" + q,
      { headers: { Authorization: "Bearer " + access } }
    );
    if (!r.ok) throw new Error("drive-list " + r.status);
    return (r.data.files || [])[0] || null;
  }

  async function pull(access) {
    const f = await findFile(access);
    if (!f) return null;
    const r = await httpJson("GET", "https://www.googleapis.com/drive/v3/files/" + f.id + "?alt=media", {
      headers: { Authorization: "Bearer " + access },
    });
    if (!r.ok) throw new Error("drive-get");
    return r.data;
  }

  async function push(access, stateObj) {
    const payload = JSON.stringify({ ...stateObj, savedAt: Date.now() });
    const existing = await findFile(access);
    if (existing) {
      const r = await httpJson("PATCH", "https://www.googleapis.com/upload/drive/v3/files/" + existing.id + "?uploadType=media", {
        headers: { Authorization: "Bearer " + access, "Content-Type": "application/json" },
        body: payload,
      });
      if (!r.ok) throw new Error("drive-patch");
      return;
    }
    const boundary = "ahdaf_" + Date.now();
    const meta = JSON.stringify({ name: FILE, parents: ["appDataFolder"] });
    const body =
      `--${boundary}\r\nContent-Type: application/json; charset=UTF-8\r\n\r\n${meta}\r\n` +
      `--${boundary}\r\nContent-Type: application/json\r\n\r\n${payload}\r\n` +
      `--${boundary}--`;
    const r = await httpJson("POST", "https://www.googleapis.com/upload/drive/v3/files?uploadType=multipart", {
      headers: {
        Authorization: "Bearer " + access,
        "Content-Type": "multipart/related; boundary=" + boundary,
      },
      body,
    });
    if (!r.ok) throw new Error("drive-create " + r.status);
  }

  window.AhdafCloud = { ready, signIn, pull, push, clientId };
})();
