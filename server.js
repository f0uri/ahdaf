const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;
const UA =
  "Mozilla/5.0 (iPhone; CPU iPhone OS 17_5 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.5 Mobile/15E148 Safari/604.1";
const LS = "https://prod-public-api.livescore.com/v1/api/app";
const IMG = "https://lsm-static-prod.livescore.com";

const FEATURED = [
  { ccd: "morocco", scd: "botola-pro", CompId: "200", name: "Botola Pro", nameAr: "البطولة الاحترافية", country: "Morocco", countryAr: "المغرب", flag: "ma" },
  { ccd: "england", scd: "premier-league", CompId: "65", name: "Premier League", nameAr: "الدوري الإنجليزي", country: "England", countryAr: "إنجلترا", flag: "gb-eng" },
  { ccd: "spain", scd: "laliga", CompId: "75", name: "LaLiga", nameAr: "الليغا", country: "Spain", countryAr: "إسبانيا", flag: "es" },
  { ccd: "italy", scd: "serie-a", CompId: "77", name: "Serie A", nameAr: "الدوري الإيطالي", country: "Italy", countryAr: "إيطاليا", flag: "it" },
  { ccd: "germany", scd: "bundesliga", CompId: "67", name: "Bundesliga", nameAr: "البوندسليغا", country: "Germany", countryAr: "ألمانيا", flag: "de" },
  { ccd: "france", scd: "ligue-1", CompId: "68", name: "Ligue 1", nameAr: "الدوري الفرنسي", country: "France", countryAr: "فرنسا", flag: "fr" },
  { ccd: "champions-league", scd: "qualification", CompId: "60", name: "Champions League", nameAr: "دوري أبطال أوروبا", country: "Europe", countryAr: "أوروبا", flag: "eu" },
  { ccd: "europa-league", scd: "qualification", CompId: "36", name: "Europa League", nameAr: "الدوري الأوروبي", country: "Europe", countryAr: "أوروبا", flag: "eu" },
  { ccd: "egypt", scd: "premier-league", CompId: "94", name: "Egyptian Premier", nameAr: "الدوري المصري", country: "Egypt", countryAr: "مصر", flag: "eg" },
  { ccd: "saudi-arabia", scd: "saudi-professional-league", CompId: "403", name: "Saudi Pro League", nameAr: "دوري روشن", country: "Saudi Arabia", countryAr: "السعودية", flag: "sa" },
  { ccd: "holland", scd: "eredivisie", CompId: "64", name: "Eredivisie", nameAr: "الدوري الهولندي", country: "Netherlands", countryAr: "هولندا", flag: "nl" },
  { ccd: "portugal", scd: "primeira-liga", CompId: "79", name: "Primeira Liga", nameAr: "الدوري البرتغالي", country: "Portugal", countryAr: "البرتغال", flag: "pt" },
  { ccd: "usa", scd: "major-league-soccer-2026", CompId: "145", name: "MLS", nameAr: "الدوري الأمريكي", country: "USA", countryAr: "أمريكا", flag: "us" },
  { ccd: "brazil", scd: "serie-a", CompId: "155", name: "Brasileirão", nameAr: "الدوري البرازيلي", country: "Brazil", countryAr: "البرازيل", flag: "br" },
  { ccd: "mexico", scd: "liga-mx-apertura", CompId: "759", name: "Liga MX", nameAr: "الدوري المكسيكي", country: "Mexico", countryAr: "المكسيك", flag: "mx" },
  { ccd: "england", scd: "championship", CompId: "70", name: "Championship", nameAr: "التشامبيونشيب", country: "England", countryAr: "إنجلترا", flag: "gb-eng" },
];

const cache = new Map();
const catalog = new Map();

function casaOffset() {
  const now = new Date();
  const utc = new Date(now.toLocaleString("en-US", { timeZone: "UTC" }));
  const casa = new Date(now.toLocaleString("en-US", { timeZone: "Africa/Casablanca" }));
  return Math.round((casa - utc) / 3600000);
}

function ymdCasa(date = new Date()) {
  return new Intl.DateTimeFormat("en-CA", {
    timeZone: "Africa/Casablanca",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  })
    .format(date)
    .replace(/-/g, "");
}

async function cached(key, ttl, fn) {
  const hit = cache.get(key);
  if (hit && Date.now() - hit.t < ttl) return hit.v;
  const v = await fn();
  cache.set(key, { t: Date.now(), v });
  return v;
}

async function ls(pathname) {
  const url = `${LS}${pathname}`;
  const res = await fetch(url, {
    headers: { "User-Agent": UA, Accept: "application/json" },
  });
  if (!res.ok) {
    const err = new Error(`livescore ${res.status}`);
    err.status = res.status;
    throw err;
  }
  return res.json();
}

function ingest(data) {
  for (const s of data?.Stages || []) {
    const ccd = s.Ccd || "";
    const scd = s.Scd || "";
    const CompId = String(s.CompId || s.Sid || "");
    if (!ccd || !scd) continue;
    const key = `${ccd}/${scd}/${CompId}`;
    const prev = catalog.get(key) || {};
    catalog.set(key, {
      ccd,
      scd,
      CompId,
      Sid: s.Sid,
      name: s.CompN || s.Snm || prev.name,
      stage: s.Snm,
      country: s.Cnm || prev.country,
      badgeUrl: s.badgeUrl || prev.badgeUrl,
      color: s.firstColor || prev.color,
      events: Math.max(prev.events || 0, (s.Events || []).length),
    });
  }
}

async function getDate(ymd) {
  const tz = casaOffset();
  const data = await cached(`date:${ymd}:${tz}`, 18000, () =>
    ls(`/date/soccer/${ymd}/${tz}?MD=1`)
  );
  ingest(data);
  return data;
}

async function getLive() {
  const data = await cached("live", 8000, () => ls("/live/soccer/0?MD=1"));
  ingest(data);
  return data;
}

app.disable("x-powered-by");
app.use(express.json({ limit: "32kb" }));
app.use((req, res, next) => {
  res.setHeader("X-Content-Type-Options", "nosniff");
  next();
});

app.get("/api/health", (_req, res) => {
  res.json({ ok: true, today: ymdCasa(), tz: casaOffset(), catalog: catalog.size });
});

app.get("/api/bootstrap", async (req, res) => {
  try {
    const ymd = String(req.query.date || ymdCasa()).replace(/\D/g, "").slice(0, 8);
    const [dateData, liveData, countries] = await Promise.all([
      getDate(ymd),
      getLive(),
      cached("cats", 6 * 3600_000, () => ls("/categories/soccer")).catch(() => ({ Ccg: [] })),
    ]);
    res.json({
      today: ymdCasa(),
      date: ymd,
      tz: casaOffset(),
      featured: FEATURED,
      dateData,
      liveData,
      countries: (countries.Ccg || []).map((c) => ({
        id: c.Cid,
        ccd: c.Ccd,
        name: c.Cnml?.en || c.Csnm,
        nameAr: c.Cnml?.ar || c.Cnml?.en || c.Csnm,
      })),
      catalog: [...catalog.values()],
    });
  } catch (e) {
    res.status(502).json({ error: e.message });
  }
});

app.get("/api/date/:ymd", async (req, res) => {
  try {
    const ymd = String(req.params.ymd).replace(/\D/g, "").slice(0, 8);
    res.json(await getDate(ymd));
  } catch (e) {
    res.status(e.status || 502).json({ error: e.message });
  }
});

app.get("/api/live", async (_req, res) => {
  try {
    res.json(await getLive());
  } catch (e) {
    res.status(502).json({ error: e.message });
  }
});

app.get("/api/stage/:ccd/:scd/:id", async (req, res) => {
  try {
    const { ccd, scd, id } = req.params;
    if (!/^[\w.-]+$/.test(ccd) || !/^[\w.-]+$/.test(scd) || !/^[\w.-]+$/.test(id)) {
      return res.status(400).json({ error: "bad id" });
    }
    const data = await cached(`stage:${ccd}:${scd}:${id}`, 45000, () =>
      ls(`/stage/soccer/${ccd}/${scd}/${id}`)
    );
    ingest(data);
    res.json(data);
  } catch (e) {
    res.status(e.status || 502).json({ error: e.message });
  }
});

app.get("/api/match/:eid", async (req, res) => {
  try {
    const eid = String(req.params.eid).replace(/[^\w-]/g, "");
    const data = await cached(`match:${eid}`, 12000, async () => {
      const [scoreboard, info, incidents, stats, lineups] = await Promise.all([
        ls(`/scoreboard/soccer/${eid}`).catch(() => null),
        ls(`/info/soccer/${eid}`).catch(() => null),
        ls(`/incidents/soccer/${eid}`).catch(() => null),
        ls(`/statistics/soccer/${eid}`).catch(() => null),
        ls(`/lineups/soccer/${eid}`).catch(() => null),
      ]);
      return { scoreboard, info, incidents, stats, lineups };
    });
    res.json(data);
  } catch (e) {
    res.status(502).json({ error: e.message });
  }
});

app.get("/api/catalog", (_req, res) => {
  res.json({ items: [...catalog.values()] });
});

const FRAME_HOSTS = new Set([
  "www.tod.tv",
  "tod.tv",
  "www.beinsports.com",
  "connect.beinsports.com",
  "www.snrt.ma",
  "snrt.ma",
  "www.fifa.com",
  "fifa.com",
]);

app.get("/api/frame-check", async (req, res) => {
  try {
    const raw = String(req.query.url || "");
    const u = new URL(raw);
    if (u.protocol !== "https:" || !FRAME_HOSTS.has(u.hostname)) {
      return res.status(400).json({ ok: false, embed: false });
    }
    const r = await fetch(u.toString(), { method: "HEAD", redirect: "follow", headers: { "User-Agent": UA } });
    const xfo = (r.headers.get("x-frame-options") || "").toLowerCase();
    const csp = (r.headers.get("content-security-policy") || "").toLowerCase();
    const embed = !xfo.includes("deny") && !xfo.includes("sameorigin") && !csp.includes("frame-ancestors");
    res.json({ ok: true, embed, status: r.status });
  } catch {
    res.json({ ok: false, embed: false });
  }
});

app.get("/img", async (req, res) => {
  try {
    const p = String(req.query.p || "");
    if (!p || p.length > 180 || /[^a-zA-Z0-9._\-\/]/.test(p)) {
      return res.status(400).end();
    }
    const size = req.query.s === "high" ? "high" : "medium";
    const url = `${IMG}/${size}/${p}`;
    const key = `img:${url}`;
    const hit = cache.get(key);
    if (hit && Date.now() - hit.t < 6 * 3600_000) {
      res.setHeader("Content-Type", hit.ct);
      res.setHeader("Cache-Control", "public, max-age=86400");
      return res.end(hit.v);
    }
    const r = await fetch(url, { headers: { "User-Agent": UA } });
    if (!r.ok) return res.status(404).end();
    const buf = Buffer.from(await r.arrayBuffer());
    const ct = r.headers.get("content-type") || "image/png";
    cache.set(key, { t: Date.now(), v: buf, ct });
    res.setHeader("Content-Type", ct);
    res.setHeader("Cache-Control", "public, max-age=86400");
    res.end(buf);
  } catch {
    res.status(404).end();
  }
});

app.use(express.static(path.join(__dirname, "public"), { maxAge: 0, etag: false }));

app.get("*", (_req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Ahdaf listening on ${PORT}`);
  getDate(ymdCasa()).catch(() => {});
  getLive().catch(() => {});
});
