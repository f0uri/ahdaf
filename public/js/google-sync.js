(() => {
  const FILE = "ahdaf-state.json";

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

  function fail(code) {
    const err = new Error(code);
    err.code = code;
    return err;
  }

  function withTimeout(promise, ms, code) {
    let t;
    const to = new Promise((_, rej) => {
      t = setTimeout(() => rej(fail(code || "timeout")), ms);
    });
    return Promise.race([promise, to]).finally(() => clearTimeout(t));
  }

  async function prepareNative() {
    const plugin = window.Capacitor?.Plugins?.GoogleAuth;
    if (!plugin?.initialize || !plugin?.signIn) return null;
    if (prepareNative.ready) return plugin;
    await withTimeout(plugin.initialize({
      clientId: clientId(),
      scopes: "profile,email",
      grantOfflineAccess: false,
    }), 8000, "init-timeout");
    prepareNative.ready = true;
    return plugin;
  }

  async function signOut() {
    try {
      const plugin = await prepareNative();
      if (plugin?.signOut) await withTimeout(plugin.signOut(), 8000, "timeout");
    } catch {}
  }

  async function signIn(opts) {
    if (!ready()) throw fail("no-client");
    if (!isNative()) throw fail("no-native");
    const plugin = await prepareNative();
    if (!plugin) throw fail("no-plugin");
    if (opts && opts.picker) await signOut();
    let user;
    try {
      user = await withTimeout(plugin.signIn(), 28000, "timeout");
    } catch (e) {
      const msg = String(e?.message || e || "");
      const code = String(e?.code || "");
      if (/10|12500|developer|blocked|403|access/i.test(msg + " " + code)) throw fail("blocked");
      if (code === "12501" || /cancel/i.test(msg)) throw fail("cancel");
      throw e;
    }
    if (!user || !(user.email || user.id || user.name)) throw fail("no-user");
    return {
      access: user?.authentication?.accessToken || user?.accessToken || "",
      refresh: user?.authentication?.refreshToken || "",
      profile: {
        id: "g:" + (user.id || user.email || "user"),
        name: user.name || user.displayName || "Google",
        email: user.email || "",
        picture: user.imageUrl || "",
        mode: "google",
      },
    };
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

  window.AhdafCloud = { ready, signIn, signOut, pull, push, clientId };
})();
