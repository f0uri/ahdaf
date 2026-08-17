(() => {
  const ENC = [
    41, 28, 16, 17, 21, 105, 74, 76, 28, 21, 75,
    33, 12, 65, 6, 12, 4, 86, 3, 20, 13,
  ];
  const ALPH = "23456789ABCDEFGHJKLMNPQRSTUVWXYZ";

  function keyBytes() {
    const a = [65, 104, 100, 97, 102, 83, 101, 99, 117, 114, 101];
    const b = [76, 105, 110, 107, 35, 118, 49, 45, 114, 103];
    return Uint8Array.from(a.concat(b));
  }

  function secretBytes() {
    const a = [102, 237, 23, 169, 21, 112, 133, 247, 121, 221, 202, 77, 34, 77, 35, 63];
    const b = [1, 70, 84, 254, 102, 214, 208, 161, 3, 143, 51, 41, 31, 172, 233, 234];
    return Uint8Array.from(a.concat(b));
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

  function identityOf(auth) {
    if (!auth || auth.mode === "guest") return "";
    if (auth.mode === "google" && auth.email) return "g:" + String(auth.email).trim().toLowerCase();
    if (auth.name) return "u:" + String(auth.name).trim().toLowerCase().replace(/\s+/g, " ");
    return "";
  }

  async function hmacHex(msg) {
    const key = await crypto.subtle.importKey(
      "raw",
      secretBytes(),
      { name: "HMAC", hash: "SHA-256" },
      false,
      ["sign"]
    );
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

  function isVerified(auth) {
    const id = identityOf(auth);
    if (!id) return false;
    try {
      return localStorage.getItem("ahdaf-vok") === "1" &&
        localStorage.getItem("ahdaf-vbind") === id;
    } catch {
      return false;
    }
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
    const k = keyBytes();
    const out = new Uint8Array(ENC.length);
    for (let i = 0; i < ENC.length; i++) out[i] = ENC[i] ^ k[i % k.length];
    return new TextDecoder().decode(out);
  }

  async function openDeveloper() {
    const url = unlockLink();
    const App = window.Capacitor?.Plugins?.App;
    if (App?.openUrl) {
      await App.openUrl({ url });
      return;
    }
    window.open(url, "_blank", "noopener");
  }

  window.AhdafSecure = { isVerified, submitCode, openDeveloper, identityOf };
})();
