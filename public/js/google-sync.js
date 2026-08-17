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

  function redirectUri() {
    return "app.ahdaf.scores://oauth";
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

  async function pluginSignIn() {
    const plugin = window.Capacitor?.Plugins?.GoogleAuth;
    if (!plugin?.signIn) return null;
    const user = await plugin.signIn();
    const access = user?.authentication?.accessToken || user?.accessToken;
    if (!access) return null;
    return {
      access,
      refresh: user?.authentication?.refreshToken || "",
      profile: {
        id: "g:" + (user.id || user.email),
        name: user.name || user.displayName || "Google",
        email: user.email || "",
        picture: user.imageUrl || "",
        mode: "google",
      },
    };
  }

  function waitRedirect() {
    return new Promise((resolve, reject) => {
      const t = setTimeout(() => reject(new Error("timeout")), 180000);
      const done = (url) => {
        clearTimeout(t);
        resolve(url);
      };
      const App = window.Capacitor?.Plugins?.App;
      if (App?.addListener) {
        const sub = App.addListener("appUrlOpen", (e) => {
          if (String(e?.url || "").startsWith("app.ahdaf.scores://")) {
            sub.remove?.();
            done(e.url);
          }
        });
      }
      window.__ahdafOauth = (url) => done(url);
    });
  }

  async function browserSignIn() {
    const id = clientId();
    if (!id) throw new Error("no-client");
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
    if (Browser?.open) await Browser.open({ url });
    else throw new Error("no-browser");
    const back = await waitRedirect();
    try { await Browser?.close?.(); } catch {}
    const u = new URL(back.replace("app.ahdaf.scores://", "https://local/"));
    const code = u.searchParams.get("code");
    if (!code) throw new Error("no-code");
    const tok = await exchangeCode(code, verifier);
    const me = await userInfo(tok.access_token);
    return {
      access: tok.access_token,
      refresh: tok.refresh_token || "",
      profile: {
        id: "g:" + (me.sub || me.email),
        name: me.name || "Google",
        email: me.email || "",
        picture: me.picture || "",
        mode: "google",
      },
    };
  }

  async function signIn() {
    if (!ready()) {
      const err = new Error("no-client");
      err.code = "no-client";
      throw err;
    }
    try {
      const viaPlugin = await pluginSignIn();
      if (viaPlugin) return viaPlugin;
    } catch {}
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
