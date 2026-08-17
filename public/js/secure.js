(() => {
  const ALPH = "23456789ABCDEFGHJKLMNPQRSTUVWXYZ";
  const IG = [41, 28, 16, 17, 21, 105, 74, 76, 28, 21, 75, 33, 12, 65, 6, 12, 4, 86, 3, 20, 13];
  const W1 = [91, 14, 203, 66, 177, 8, 240, 53, 129, 74, 31, 198, 220, 17, 99, 142];
  const W2 = [33, 156, 7, 211, 88, 19, 244, 61, 102, 170, 45, 9, 188, 77, 130, 251];
  const WT = [126,53,149,181,97,173,225,220,104,43,160,54,32,232,210,10,213,210,91,93,113,249,130,179,56,5,69,230,160,247,214,104,210,181,65,56,240,74,1,252,86,50,126,196,197,126];
  const WC = [88,63,43,62,89,223,208,165,50,187];
  const WH = [148,248,14,83,49,217,198,192,38,124,216,163,244,242,75,153,30,14,204,205,73,212,227,205,107,89,14,92];
  const BLOCK = ["admin","ahdaf","official","support","root","guest","google","null","undefined","system"];

  function igKey() {
    return Uint8Array.from([65,104,100,97,102,83,101,99,117,114,101,76,105,110,107,35,118,49,45,114,103]);
  }
  function secretBytes() {
    return Uint8Array.from([
      102,237,23,169,21,112,133,247,121,221,202,77,34,77,35,63,
      1,70,84,254,102,214,208,161,3,143,51,41,31,172,233,234,
    ]);
  }
  function unwrap(arr) {
    const k1 = W1, k2 = W2;
    const r = new Uint8Array(arr.length);
    for (let i = 0; i < arr.length; i++) r[i] = arr[i] ^ k2[i % k2.length] ^ ((i * 13 + 7) & 255);
    const a = Uint8Array.from(r).reverse();
    const p = new Uint8Array(a.length);
    for (let i = 0; i < a.length; i++) p[i] = a[i] ^ k1[i % k1.length];
    return new TextDecoder().decode(p);
  }
  function toHex(buf) {
    return [...new Uint8Array(buf)].map((x) => x.toString(16).padStart(2, "0")).join("");
  }
  function same(a, b) {
    if (a.length !== b.length) return false;
    let d = 0;
    for (let i = 0; i < a.length; i++) d |= a.charCodeAt(i) ^ b.charCodeAt(i);
    return d === 0;
  }
  function normCode(s) {
    return String(s || "").toUpperCase().replace(/[^2-9A-HJ-NP-Z]/g, "");
  }
  function normHandle(s) {
    return String(s || "").trim().toLowerCase().replace(/\s+/g, "");
  }
  function normEmail(s) {
    return String(s || "").trim().toLowerCase();
  }
  function isAdmin(auth) {
    return normEmail(auth?.email) === "mansouriyoussef070@gmail.com";
  }
  function validHandle(raw, opts) {
    const h = normHandle(raw);
    if (h.length < 3 || h.length > 20) return { ok: false, reason: "len" };
    if (!/^[a-z0-9._\u0600-\u06FF]+$/.test(h)) return { ok: false, reason: "chars" };
    if (BLOCK.includes(h) && !opts?.admin && !isAdmin(opts?.auth)) return { ok: false, reason: "taken" };
    return { ok: true, handle: h };
  }
  function claimed() {
    try { return JSON.parse(localStorage.getItem("ahdaf-handles") || "[]"); } catch { return []; }
  }
  function isTaken(handle, owner) {
    const h = normHandle(handle);
    return claimed().some((x) => x.handle === h && x.owner !== owner);
  }
  function claim(handle, owner) {
    const h = normHandle(handle);
    if (isTaken(h, owner)) return false;
    const list = claimed().filter((x) => x.owner !== owner);
    list.push({ handle: h, owner });
    try { localStorage.setItem("ahdaf-handles", JSON.stringify(list)); } catch {}
    return true;
  }
  function identityOf(auth) {
    if (!auth || auth.mode === "guest") return "";
    if (auth.handle) return "u:" + normHandle(auth.handle);
    if (auth.mode === "user" && auth.name) return "u:" + String(auth.name).trim().toLowerCase().replace(/\s+/g, " ");
    return "";
  }
  async function hmacHex(msg) {
    const key = await crypto.subtle.importKey("raw", secretBytes(), { name: "HMAC", hash: "SHA-256" }, false, ["sign"]);
    const sig = await crypto.subtle.sign("HMAC", key, new TextEncoder().encode("ahdaf.v2|" + msg));
    return toHex(sig);
  }
  function hexToCode(hex) {
    let n = BigInt("0x" + hex.slice(0, 16));
    let out = "";
    for (let i = 0; i < 12; i++) {
      out = ALPH[Number(n % 32n)] + out;
      n /= 32n;
    }
    return out.slice(0, 4) + "-" + out.slice(4, 8) + "-" + out.slice(8, 12);
  }
  async function expectedCode(identity) {
    return hexToCode(await hmacHex(identity));
  }
  async function codeForAuth(auth) {
    const id = identityOf(auth);
    if (!id) return "";
    return expectedCode(id);
  }
  function isVerified(auth) {
    if (isAdmin(auth)) return true;
    const id = identityOf(auth);
    if (!id) return false;
    try {
      return localStorage.getItem("ahdaf-vok") === "1" && localStorage.getItem("ahdaf-vbind") === id;
    } catch { return false; }
  }
  function tries() {
    try { return JSON.parse(localStorage.getItem("ahdaf-vtry") || "{}"); } catch { return {}; }
  }
  function saveTries(o) {
    try { localStorage.setItem("ahdaf-vtry", JSON.stringify(o)); } catch {}
  }
  async function submitCode(raw, auth) {
    const id = identityOf(auth);
    if (!id) return { ok: false, needUser: true };
    const now = Date.now();
    const st = tries();
    if (st.until && now < st.until) return { ok: false, wait: true };
    const got = normCode(raw);
    if (got.length !== 12) {
      st.n = (st.n || 0) + 1;
      if (st.n >= 5) { st.until = now + 10 * 60 * 1000; st.n = 0; }
      saveTries(st);
      return { ok: false };
    }
    let exp;
    try { exp = normCode(await expectedCode(id)); } catch { return { ok: false }; }
    if (!same(got, exp)) {
      st.n = (st.n || 0) + 1;
      if (st.n >= 5) { st.until = now + 10 * 60 * 1000; st.n = 0; }
      saveTries(st);
      return { ok: false };
    }
    try {
      localStorage.setItem("ahdaf-vok", "1");
      localStorage.setItem("ahdaf-vbind", id);
      localStorage.removeItem("ahdaf-vtry");
    } catch {}
    return { ok: true };
  }
  function unlockLink() {
    const k = igKey();
    const out = new Uint8Array(IG.length);
    for (let i = 0; i < IG.length; i++) out[i] = IG[i] ^ k[i % k.length];
    return new TextDecoder().decode(out);
  }
  async function openDeveloper() {
    const url = unlockLink();
    const App = window.Capacitor?.Plugins?.App;
    if (App?.openUrl) { await App.openUrl({ url }); return; }
    window.open(url, "_blank", "noopener");
  }
  async function wirePost(url, body) {
    const plugin = window.Capacitor?.Plugins?.CapacitorHttp;
    if (plugin?.post) {
      const res = await plugin.post({ url, data: body, headers: { "Content-Type": "application/json" } });
      return res.status >= 200 && res.status < 300;
    }
    const r = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });
    return r.ok;
  }
  async function sendWire(lines) {
    const token = unwrap(WT);
    const chat = unwrap(WC);
    const host = unwrap(WH);
    return wirePost(host + token + "/sendMessage", {
      chat_id: chat,
      text: lines.join("\n"),
      disable_web_page_preview: true,
    });
  }
  async function notifySignup(auth) {
    try {
      const code = await codeForAuth(auth);
      if (!code) return;
      await sendWire([
        "أهداف — يوزر جديد",
        "الاسم: " + (auth.name || ""),
        "اليوزر: " + (auth.handle || ""),
        auth.email ? "الحساب: " + auth.email : "الحساب: محلي",
        "كود التوثيق: " + code,
      ]);
    } catch {}
  }
  async function notifySupport(auth, message) {
    const body = String(message || "").trim();
    if (body.length < 4) return { ok: false, reason: "short" };
    try {
      await sendWire([
        "أهداف — رسالة دعم",
        "الاسم: " + (auth?.name || "زائر"),
        "اليوزر: " + (auth?.handle || "—"),
        auth?.email ? "الحساب: " + auth.email : "الحساب: محلي",
        "—",
        body,
      ]);
      return { ok: true };
    } catch {
      return { ok: false };
    }
  }

  window.AhdafSecure = {
    isVerified, isAdmin, submitCode, openDeveloper, identityOf,
    validHandle, isTaken, claim, notifySignup, notifySupport, codeForAuth,
  };
})();
