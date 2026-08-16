(() => {
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => [...r.querySelectorAll(s)];

  const I18N = {
    ar: {
      app: "أهداف",
      matches: "المباريات",
      live: "مباشر",
      leagues: "الدوريات",
      favorites: "المفضلة",
      today: "اليوم",
      yesterday: "أمس",
      tomorrow: "غداً",
      all: "الكل",
      finished: "النتائج",
      upcoming: "الجدول",
      search: "ابحث عن فريق أو دوري…",
      emptyDay: "لا مباريات في هذا اليوم",
      emptyLive: "لا توجد مباريات مباشرة الآن",
      emptyFav: "ثبّت الدوريات التي تتابعها",
      emptyFavHint: "اضغط النجمة بجانب أي دوري ليظهر هنا.",
      retry: "إعادة المحاولة",
      standings: "الترتيب",
      fixtures: "المواعيد",
      results: "النتائج",
      events: "الأحداث",
      stats: "الإحصائيات",
      lineups: "التشكيلة",
      info: "التفاصيل",
      venue: "الملعب",
      referee: "الحكم",
      featured: "مختارات",
      countries: "الدول والبطولات",
      allLeagues: "كل المسابقات",
      settings: "الإعدادات",
      dark: "الوضع الداكن",
      lang: "English",
      kickoff: "الانطلاق",
      ht: "استراحة",
      ft: "انتهت",
      ns: "لم تبدأ",
      postponed: "مؤجلة",
      cancelled: "ملغاة",
      goal: "هدف",
      own: "هدف عكسي",
      pen: "ركلة جزاء",
      yellow: "بطاقة صفراء",
      red: "بطاقة حمراء",
      assist: "صناعة",
      home: "صاحب الأرض",
      away: "الضيف",
      played: "ل",
      pts: "ن",
      gd: "فارق",
      noTable: "الترتيب غير متاح بعد",
      noEvents: "لا أحداث بعد",
      noStats: "لا إحصائيات بعد",
      noLineup: "التشكيلة لم تُعلن",
      loading: "جارٍ التحميل…",
      error: "تعذّر جلب البيانات",
      follow: "متابعة",
      following: "متابَع",
      watch: "المتابعة",
      watchLive: "متابعة حية",
      more: "المزيد",
      emptyFollow: "لم تتابع أي دوري بعد",
      emptyFollowHint: "اختر دورياتك من تبويب الدوريات، وستظهر مبارياتها هنا فقط.",
      pickLeagues: "اختيار الدوريات",
      myLeagues: "دورياتي",
      discover: "اكتشف الدوريات",
      friendlies: "المباريات الودية",
      months: ["يناير","فبراير","مارس","أبريل","مايو","يونيو","يوليو","أغسطس","سبتمبر","أكتوبر","نوفمبر","ديسمبر"],
      theater: "وضع المشاهدة",
      channels: "أين تشاهد",
      officialStream: "بث رسمي",
      tvChannel: "قنوات التلفزيون",
      highlights: "ملخصات رسمية",
      noBroadcast: "لا يتوفر بث فيديو رسمي لهذه المباراة",
      noBroadcastHint: "يمكنك متابعة اللقاء هنا لحظة بلحظة: النتيجة، الدقيقة، والأهداف.",
      legalNote: "نعرض المصادر الرسمية فقط",
      openOfficial: "فتح البث الرسمي",
      openHighlight: "مشاهدة الملخص",
      availableIn: "متاح في",
      watching: "تتابع المباراة",
      lastEvent: "آخر الأحداث",
      officialApps: "شاهد من المصدر الرسمي",
      officialAppsHint: "يُفتح داخل التطبيق — سجّل دخولك في المنصة إن لزم",
      inApp: "داخل التطبيق",
      embedBlocked: "المنصة تحمي بثها",
      embedBlockedHint: "الموقع الرسمي لا يسمح بوضع مشغّله داخل تطبيقات أخرى. يمكنك المتابعة من حسابك على منصتهم.",
      todSub: "منصة البث الرسمية لـ beIN",
      beinSub: "القنوات والتغطية الكاملة",
      snrtSub: "التلفزيون الوطني المغربي",
      fifaSub: "محتوى فيفا الرسمي",
      weekdays: ["أحد", "إثنين", "ثلاثاء", "أربعاء", "خميس", "جمعة", "سبت"],
    },
    en: {
      app: "Ahdaf",
      matches: "Matches",
      live: "Live",
      leagues: "Leagues",
      favorites: "Following",
      today: "Today",
      yesterday: "Yesterday",
      tomorrow: "Tomorrow",
      all: "All",
      finished: "Results",
      upcoming: "Fixtures",
      search: "Search team or league…",
      emptyDay: "No matches on this day",
      emptyLive: "No live matches right now",
      emptyFav: "Follow the leagues you care about",
      emptyFavHint: "Tap the star next to any league to pin it here.",
      retry: "Try again",
      standings: "Table",
      fixtures: "Fixtures",
      results: "Results",
      events: "Events",
      stats: "Stats",
      lineups: "Line-ups",
      info: "Details",
      venue: "Venue",
      referee: "Referee",
      featured: "Featured",
      countries: "Countries & cups",
      allLeagues: "All competitions",
      settings: "Settings",
      dark: "Dark mode",
      lang: "العربية",
      kickoff: "Kick-off",
      ht: "HT",
      ft: "FT",
      ns: "NS",
      postponed: "Postponed",
      cancelled: "Cancelled",
      goal: "Goal",
      own: "Own goal",
      pen: "Penalty",
      yellow: "Yellow",
      red: "Red",
      assist: "Assist",
      home: "Home",
      away: "Away",
      played: "P",
      pts: "Pts",
      gd: "GD",
      noTable: "Table not available yet",
      noEvents: "No events yet",
      noLineup: "Line-ups not announced",
      noStats: "No stats yet",
      loading: "Loading…",
      error: "Could not load data",
      follow: "Follow",
      following: "Following",
      watch: "Feed",
      watchLive: "Live feed",
      more: "More",
      emptyFollow: "You’re not following any league",
      emptyFollowHint: "Pick leagues in the Leagues tab. Only those matches will appear here.",
      pickLeagues: "Choose leagues",
      myLeagues: "My leagues",
      discover: "Discover",
      friendlies: "Friendlies",
      months: ["January","February","March","April","May","June","July","August","September","October","November","December"],
      theater: "Watch mode",
      channels: "Where to watch",
      officialStream: "Official stream",
      tvChannel: "TV channels",
      highlights: "Official highlights",
      noBroadcast: "No official video stream for this match",
      noBroadcastHint: "Follow it here in real time: score, minute, and every key event.",
      legalNote: "Official sources only",
      openOfficial: "Open official stream",
      openHighlight: "Watch highlights",
      availableIn: "Available in",
      watching: "Watching",
      lastEvent: "Latest events",
      officialApps: "Watch on official sources",
      officialAppsHint: "Opens inside the app — sign in on the platform if needed",
      inApp: "In-app",
      embedBlocked: "This platform protects its player",
      embedBlockedHint: "The official site does not allow its player inside other apps. Use your account on their platform.",
      todSub: "Official beIN streaming platform",
      beinSub: "Channels and full coverage",
      snrtSub: "Moroccan national TV",
      fifaSub: "Official FIFA content",
      weekdays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    },
  };

  const FLAG = {
    morocco: "ma", england: "gb-eng", spain: "es", italy: "it", germany: "de",
    france: "fr", egypt: "eg", "saudi-arabia": "sa", holland: "nl", netherlands: "nl",
    portugal: "pt", usa: "us", "united-states": "us", brazil: "br", mexico: "mx",
    turkey: "tr", turkiye: "tr", argentina: "ar", belgium: "be", scotland: "gb-sct",
    "south-africa": "za", tunisia: "tn", algeria: "dz", nigeria: "ng", japan: "jp",
    china: "cn", australia: "au", canada: "ca", denmark: "dk", sweden: "se",
    norway: "no", switzerland: "ch", austria: "at", greece: "gr", poland: "pl",
    ukraine: "ua", russia: "ru", croatia: "hr", serbia: "rs", romania: "ro",
    "czech-republic": "cz", czechia: "cz", ireland: "ie", wales: "gb-wls",
    colombia: "co", chile: "cl", peru: "pe", ecuador: "ec", uruguay: "uy",
    paraguay: "py", "costa-rica": "cr", honduras: "hn", guatemala: "gt",
    "united-arab-emirates": "ae", uae: "ae", qatar: "qa", iraq: "iq", jordan: "jo",
    lebanon: "lb", kuwait: "kw", bahrain: "bh", oman: "om", yemen: "ye",
    palestine: "ps", sudan: "sd", libya: "ly", senegal: "sn", ghana: "gh",
    "ivory-coast": "ci", "cote-divoire": "ci", cameroon: "cm", mali: "ml",
    "burkina-faso": "bf", guinea: "gn", "guinea-bissau": "gw", gambia: "gm",
    togo: "tg", benin: "bj", niger: "ne", chad: "td", mauritania: "mr",
    "sierra-leone": "sl", liberia: "lr", gabon: "ga", congo: "cg",
    "dr-congo": "cd", angola: "ao", mozambique: "mz", zambia: "zm",
    zimbabwe: "zw", malawi: "mw", rwanda: "rw", uganda: "ug", kenya: "ke",
    tanzania: "tz", ethiopia: "et", somalia: "so", djibouti: "dj",
    madagascar: "mg", comoros: "km", mauritius: "mu", "cape-verde": "cv",
    botswana: "bw", namibia: "na", india: "in", pakistan: "pk", bangladesh: "bd",
    indonesia: "id", malaysia: "my", thailand: "th", vietnam: "vn",
    "south-korea": "kr", korea: "kr", philippines: "ph", singapore: "sg",
    "hong-kong": "hk", uzbekistan: "uz", kazakhstan: "kz", iran: "ir",
    finland: "fi", iceland: "is", estonia: "ee", latvia: "lv", lithuania: "lt",
    hungary: "hu", slovakia: "sk", slovenia: "si", bulgaria: "bg",
    macedonia: "mk", "north-macedonia": "mk", albania: "al", bosnia: "ba",
    "bosnia-and-herzegovina": "ba", montenegro: "me", kosovo: "xk",
    moldova: "md", belarus: "by", cyprus: "cy", malta: "mt", luxembourg: "lu",
    israel: "il", syria: "sy", bolivia: "bo", venezuela: "ve", panama: "pa",
    jamaica: "jm", "new-zealand": "nz", "united-kingdom": "gb", uk: "gb",
    "northern-ireland": "gb-nir", "faroe-islands": "fo",
    "champions-league": "eu", "europa-league": "eu", uefa: "eu", fifa: "un",
    intl: "un", international: "un", africa: "un", caf: "un", concacaf: "un",
    conmebol: "un", "club-friendlies": "un", friendlies: "un",
  };

  const FLAG_NAME = {
    morocco: "ma", maroc: "ma", england: "gb-eng", spain: "es", italy: "it",
    germany: "de", france: "fr", egypt: "eg", netherlands: "nl", holland: "nl",
    portugal: "pt", brazil: "br", mexico: "mx", turkey: "tr", argentina: "ar",
    belgium: "be", scotland: "gb-sct", tunisia: "tn", algeria: "dz",
    nigeria: "ng", japan: "jp", china: "cn", australia: "au", canada: "ca",
    "saudi arabia": "sa", "south africa": "za", "united states": "us", usa: "us",
    "ivory coast": "ci",
  };

  function readFavs() {
    try {
      const raw = JSON.parse(localStorage.getItem("ahdaf-fav-l") || "null");
      if (Array.isArray(raw) && raw.length) return raw;
    } catch {}
    return [
      "morocco/botola-pro/200",
      "england/premier-league/65",
      "spain/laliga/75",
      "champions-league/qualification/60",
      "club-friendlies/club-friendlies-2026/310",
    ];
  }

  const state = {
    lang: localStorage.getItem("ahdaf-lang") || "ar",
    theme: localStorage.getItem("ahdaf-theme") || "dark",
    tab: "matches",
    date: null,
    filter: "all",
    q: "",
    searchOpen: false,
    stack: [],
    featured: [],
    countries: [],
    catalog: [],
    stages: [],
    live: [],
    today: null,
    favLeagues: readFavs(),
    cache: {},
    liveTimer: null,
  };

  const t = (k) => (I18N[state.lang] && I18N[state.lang][k]) || k;

  function applyChrome() {
    document.documentElement.lang = state.lang;
    document.documentElement.dir = state.lang === "ar" ? "rtl" : "ltr";
    document.documentElement.dataset.theme = state.theme;
    const themeColor = state.theme === "dark" ? "#0B0F12" : "#F2F2F7";
    document.querySelector('meta[name="theme-color"]')?.setAttribute("content", themeColor);
    const bar = document.querySelector('meta[name="apple-mobile-web-app-status-bar-style"]');
    if (bar) bar.setAttribute("content", state.theme === "dark" ? "black-translucent" : "default");
    const search = $("#searchInput");
    if (search) search.placeholder = t("search");
    const labels = { matches: t("matches"), live: t("live"), leagues: t("leagues"), more: t("more") };
    $$(".tab").forEach((b) => {
      const span = b.querySelector("span");
      if (span) span.textContent = labels[b.dataset.tab] || "";
      b.classList.toggle("on", b.dataset.tab === state.tab && !state.stack.length);
    });
    const n = followedStages(state.live || []).reduce((a, s) => a + (s.Events || []).length, 0);
    const dot = $("#liveDot");
    if (dot) {
      dot.textContent = n > 99 ? "99" : String(n);
      dot.classList.toggle("show", n > 0);
    }
  }

  function saveFav() {
    localStorage.setItem("ahdaf-fav-l", JSON.stringify(state.favLeagues));
  }
  function isFav(key) {
    return state.favLeagues.includes(key);
  }
  function isFriendly(s) {
    const blob = `${s.Ccd || s.ccd || ""} ${s.Cnm || s.country || ""} ${s.Snm || s.stage || ""} ${s.Scd || s.scd || ""} ${s.CompN || s.name || ""}`.toLowerCase();
    return blob.includes("friend") || blob.includes("ودي") || (s.Ccd || s.ccd) === "club-friendlies";
  }
  function followedStages(stages) {
    return (stages || []).filter((s) => isFav(leagueKey(s)) || isFriendly(s));
  }
  function toggleFav(key) {
    if (isFav(key)) state.favLeagues = state.favLeagues.filter((x) => x !== key);
    else state.favLeagues.unshift(key);
    saveFav();
  }
  function leagueKey(s) {
    return `${s.Ccd || s.ccd || ""}/${s.Scd || s.scd || ""}/${s.CompId || s.cid || s.Sid || ""}`;
  }

  function esc(s) {
    return String(s ?? "")
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#39;");
  }

  function ymdFromOffset(off) {
    const today = state.today || ymdCasa();
    const [y, m, d] = [today.slice(0, 4), today.slice(4, 6), today.slice(6, 8)].map(Number);
    const dt = new Date(Date.UTC(y, m - 1, d + off));
    const yy = dt.getUTCFullYear();
    const mm = String(dt.getUTCMonth() + 1).padStart(2, "0");
    const dd = String(dt.getUTCDate()).padStart(2, "0");
    return `${yy}${mm}${dd}`;
  }

  function parseYmd(ymd) {
    return {
      y: +ymd.slice(0, 4),
      m: +ymd.slice(4, 6),
      d: +ymd.slice(6, 8),
      date: new Date(+ymd.slice(0, 4), +ymd.slice(4, 6) - 1, +ymd.slice(6, 8)),
    };
  }

  function formatKick(esd) {
    if (!esd) return "—";
    const s = String(esd);
    if (s.length < 12) return "—";
    return `${s.slice(8, 10)}:${s.slice(10, 12)}`;
  }

  function esdYmd(esd) {
    const s = String(esd || "");
    return s.length >= 8 ? s.slice(0, 8) : "";
  }

  function ymdDate(ymd) {
    if (!ymd || ymd.length < 8) return null;
    return new Date(+ymd.slice(0, 4), +ymd.slice(4, 6) - 1, +ymd.slice(6, 8));
  }

  function dayLabel(ymd) {
    if (!ymd || !state.today) return "";
    if (ymd === state.today) return t("today");
    if (ymd === ymdFromOffset(-1)) return t("yesterday");
    if (ymd === ymdFromOffset(1)) return t("tomorrow");
    const d = ymdDate(ymd);
    return d ? t("weekdays")[d.getDay()] : "";
  }

  function dayHeading(ymd) {
    const d = ymdDate(ymd);
    if (!d) return dayLabel(ymd);
    const months = t("months");
    const mon = Array.isArray(months) ? months[d.getMonth()] : "";
    return `${dayLabel(ymd)} · ${d.getDate()} ${mon}`;
  }

  function statusOf(ev) {
    const eps = String(ev.Eps || "");
    const epr = ev.Epr;
    if ((epr === 1 || /'|HT|Pause|Pen/i.test(eps)) && epr !== 2 && eps !== "NS") {
      if (/^FT|AET|AP|Finished/i.test(eps)) return { kind: "ft", label: t("ft") };
      if (eps === "HT" || ev.Esid === 10) return { kind: "live", label: t("ht") };
      return { kind: "live", label: eps.replace("'", "′") };
    }
    if (epr === 2 || /^FT|AET|AP/i.test(eps)) return { kind: "ft", label: t("ft") };
    if (/Post/i.test(eps)) return { kind: "other", label: t("postponed") };
    if (/Canc|Abd/i.test(eps)) return { kind: "other", label: t("cancelled") };
    if (eps === "NS" || epr === 0) return { kind: "ns", label: formatKick(ev.Esd) };
    return { kind: "ns", label: eps || formatKick(ev.Esd) };
  }

  function teamOf(arr) {
    const o = (arr && arr[0]) || {};
    return {
      id: o.ID,
      name: o.Nm || "—",
      img: o.Img,
      abr: o.Abr || (o.Nm || "?").slice(0, 3),
      color: o.Fc || o.firstColor,
    };
  }

  const LS = "https://prod-public-api.livescore.com/v1/api/app";
  const IMG_CDN = "https://lsm-static-prod.livescore.com/medium/";
  const FEATURED = [
    { ccd: "club-friendlies", scd: "club-friendlies-2026", CompId: "310", name: "Club Friendlies", nameAr: "المباريات الودية", country: "International", countryAr: "ودية", flag: "un" },
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

  function isNative() {
    try {
      return !!(window.Capacitor && window.Capacitor.isNativePlatform && window.Capacitor.isNativePlatform());
    } catch {
      return false;
    }
  }

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

  function ingestCatalog(data, into) {
    for (const s of data?.Stages || []) {
      const ccd = s.Ccd || "";
      const scd = s.Scd || "";
      const CompId = String(s.CompId || s.Sid || "");
      if (!ccd || !scd) continue;
      into.set(`${ccd}/${scd}/${CompId}`, {
        ccd, scd, CompId, Sid: s.Sid,
        name: s.CompN || s.Snm,
        stage: s.Snm,
        country: s.Cnm,
      });
    }
  }

  async function lsGet(path) {
    const url = LS + path;
    const http = window.Capacitor?.Plugins?.CapacitorHttp;
    if (http) {
      const res = await http.get({
        url,
        headers: {
          Accept: "application/json",
          "User-Agent": "Mozilla/5.0 (Linux; Android 14) AppleWebKit/537.36 Chrome/126.0.0.0 Mobile Safari/537.36",
        },
      });
      const data = res.data;
      if (typeof data === "string") {
        try { return JSON.parse(data); } catch { throw new Error("bad json"); }
      }
      return data;
    }
    const r = await fetch(url, { headers: { Accept: "application/json" } });
    if (!r.ok) throw new Error("bad");
    return r.json();
  }

  function crest(team, big) {
    const src = team.img
      ? (isNative() ? IMG_CDN + team.img : `/img?p=${encodeURIComponent(team.img)}`)
      : "";
    const letters = esc((team.abr || team.name || "?").slice(0, 2));
    return `<span class="crest" style="${big ? "width:52px;height:52px" : ""}">
      ${src ? `<img src="${src}" alt="" onerror="this.remove()">` : ""}
      <b>${letters}</b>
    </span>`;
  }

  function flag(ccd, countryName) {
    let code = FLAG[String(ccd || "").toLowerCase()] || "";
    if (!code && countryName) code = FLAG_NAME[String(countryName).toLowerCase()] || "";
    if (!code && ccd && /^[a-z]{2}$/i.test(ccd)) code = ccd.toLowerCase();
    if (!code) return `<span class="flag-fallback">${esc((ccd || "?").slice(0, 2).toUpperCase())}</span>`;
    const safe = String(code).replace(/[^a-z0-9-]/gi, "");
    return `<img class="flag" alt="" src="https://flagcdn.com/w40/${safe}.png" onerror="this.outerHTML='<span class=flag-fallback>${esc((ccd || "").slice(0, 2))}</span>'">`;
  }

  async function api(path) {
    if (!isNative()) {
      const r = await fetch(path);
      if (!r.ok) throw new Error("bad");
      return r.json();
    }
    const tz = casaOffset();
    if (path.startsWith("/api/bootstrap")) {
      const ymd = ymdCasa();
      const [dateData, liveData, countries] = await Promise.all([
        lsGet(`/date/soccer/${ymd}/${tz}?MD=1`),
        lsGet("/live/soccer/0?MD=1"),
        lsGet("/categories/soccer").catch(() => ({ Ccg: [] })),
      ]);
      const cat = new Map();
      ingestCatalog(dateData, cat);
      ingestCatalog(liveData, cat);
      return {
        today: ymd,
        date: ymd,
        tz,
        featured: FEATURED,
        dateData,
        liveData,
        countries: (countries.Ccg || []).map((c) => ({
          id: c.Cid,
          ccd: c.Ccd,
          name: c.Cnml?.en || c.Csnm,
          nameAr: c.Cnml?.ar || c.Cnml?.en || c.Csnm,
        })),
        catalog: [...cat.values()],
      };
    }
    if (path.startsWith("/api/date/")) {
      const ymd = path.split("/").pop();
      return lsGet(`/date/soccer/${ymd}/${tz}?MD=1`);
    }
    if (path.startsWith("/api/live")) return lsGet("/live/soccer/0?MD=1");
    if (path.startsWith("/api/stage/")) {
      const parts = path.replace("/api/stage/", "").split("/");
      return lsGet(`/stage/soccer/${parts[0]}/${parts[1]}/${parts[2]}`);
    }
    if (path.startsWith("/api/match/")) {
      const eid = path.split("/").pop();
      const [scoreboard, info, incidents, stats, lineups] = await Promise.all([
        lsGet(`/scoreboard/soccer/${eid}`).catch(() => null),
        lsGet(`/info/soccer/${eid}`).catch(() => null),
        lsGet(`/incidents/soccer/${eid}`).catch(() => null),
        lsGet(`/statistics/soccer/${eid}`).catch(() => null),
        lsGet(`/lineups/soccer/${eid}`).catch(() => null),
      ]);
      return { scoreboard, info, incidents, stats, lineups };
    }
    throw new Error("unknown api");
  }

  function setTitle(title, eye) {
    $("#pageTitle").textContent = title;
    $("#eyebrow").textContent = eye || t("app");
    const deep = state.stack.length > 0;
    $("#eyebrow").classList.toggle("hidden", !deep);
    $("#backBtn").classList.toggle("hidden", !deep);
    $("#tabbar").style.display = deep ? "none" : "";
    $("#dates").classList.toggle("hidden", deep || state.tab !== "matches");
    $("#chips").classList.toggle("hidden", deep || state.tab !== "matches");
  }

  function skeleton() {
    $("#view").innerHTML = `<div class="skel"><div class="skel-card"></div><div class="skel-card"></div><div class="skel-card"></div></div>`;
  }

  function empty(title, sub, action) {
    return `<div class="empty">
      <h3>${esc(title)}</h3>
      <p>${esc(sub || "")}</p>
      ${action || ""}
    </div>`;
  }

  function renderDates() {
    const wrap = $("#dates");
    const days = [];
    for (let i = -3; i <= 10; i++) days.push({ off: i, ymd: ymdFromOffset(i) });
    wrap.innerHTML = days
      .map(({ off, ymd }) => {
        const { date } = parseYmd(ymd);
        const label =
          off === 0 ? t("today") : off === -1 ? t("yesterday") : off === 1 ? t("tomorrow") : t("weekdays")[date.getDay()];
        return `<button class="day ${ymd === state.date ? "on" : ""}" data-ymd="${ymd}">
          <span>${label}</span><b>${date.getDate()}</b>
        </button>`;
      })
      .join("");
    wrap.querySelector(".day.on")?.scrollIntoView({ inline: "center", block: "nearest", behavior: "instant" });
  }

  function renderChips() {
    const items =
      state.tab === "live"
        ? []
        : [
            ["all", t("all")],
            ["live", t("live")],
            ["finished", t("finished")],
            ["upcoming", t("upcoming")],
          ];
    $("#chips").innerHTML = items
      .map(([id, lab]) => `<button class="chip ${state.filter === id ? "on" : ""}" data-f="${id}">${lab}</button>`)
      .join("");
  }

  function matchPasses(ev) {
    const st = statusOf(ev);
    if (state.filter === "live" && st.kind !== "live") return false;
    if (state.filter === "finished" && st.kind !== "ft") return false;
    if (state.filter === "upcoming" && st.kind !== "ns") return false;
    if (!state.q) return true;
    const q = state.q.toLowerCase();
    const t1 = teamOf(ev.T1).name.toLowerCase();
    const t2 = teamOf(ev.T2).name.toLowerCase();
    return t1.includes(q) || t2.includes(q);
  }

  function renderMatch(ev, stage, opts = {}) {
    const t1 = teamOf(ev.T1);
    const t2 = teamOf(ev.T2);
    const st = statusOf(ev);
    const s1 = ev.Tr1 ?? "";
    const s2 = ev.Tr2 ?? "";
    const showScore = st.kind === "live" || st.kind === "ft";
    let w1 = "", w2 = "";
    if (st.kind === "ft" && s1 !== "" && s2 !== "") {
      if (+s1 > +s2) { w1 = "win"; w2 = "lose"; }
      else if (+s2 > +s1) { w2 = "win"; w1 = "lose"; }
    }
    let when = st.label;
    if (st.kind === "ns") {
      const ymd = esdYmd(ev.Esd);
      const clock = formatKick(ev.Esd);
      const dn = dayLabel(ymd);
      when = opts.showDay && dn ? `${dn}\n${clock}` : clock;
    } else if (opts.showDay && ev.Esd) {
      const dn = dayLabel(esdYmd(ev.Esd));
      if (dn) when = `${dn}\n${st.label}`;
    }
    return `<article class="match" data-eid="${esc(ev.Eid)}" data-sid="${esc(stage.Sid || "")}" data-ccd="${esc(stage.Ccd || "")}" data-scd="${esc(stage.Scd || "")}" data-cid="${esc(stage.CompId || stage.Sid || "")}">
      <div class="mtime ${st.kind}">${esc(when)}</div>
      <div class="mside home ${w1}"><span class="nm">${esc(t1.name)}</span>${crest(t1)}</div>
      <div class="mscore" dir="ltr">${showScore ? `${esc(s1)}<i>-</i>${esc(s2)}` : "–"}</div>
      <div class="mside away ${w2}">${crest(t2)}<span class="nm">${esc(t2.name)}</span></div>
    </article>`;
  }

  function renderStages(stages, opts = {}) {
    const q = state.q.toLowerCase();
    const favFirst = opts.favFirst;
    let list = (opts.followedOnly ? followedStages(stages) : stages || [])
      .map((s) => ({ ...s, Events: (s.Events || []).filter(matchPasses) }))
      .filter((s) => {
        if (s.Events.length) return true;
        if (q && ((s.Snm || "") + (s.Cnm || "") + (s.CompN || "")).toLowerCase().includes(q)) return true;
        return false;
      });
    if (q) {
      list = list.filter((s) => {
        const blob = `${s.Snm} ${s.Cnm} ${s.CompN}`.toLowerCase();
        return blob.includes(q) || s.Events.length;
      });
    }
    if (favFirst) {
      list.sort((a, b) => Number(isFav(leagueKey(b))) - Number(isFav(leagueKey(a))));
    }
    if (!list.length) {
      if (opts.followedOnly && !state.favLeagues.length) {
        return empty(t("emptyFollow"), t("emptyFollowHint"), `<button class="cta" data-go-tab="leagues">${t("pickLeagues")}</button>`);
      }
      if (opts.followedOnly) {
        return empty(opts.emptyTitle || t("emptyDay"), t("emptyFollowHint"));
      }
      return empty(opts.emptyTitle || t("emptyDay"), opts.emptySub || "");
    }
    const html = list
      .map((s) => {
        const key = leagueKey(s);
        const name = isFriendly(s) ? t("friendlies") : state.lang === "ar" ? s.CompN || s.Snm : s.Snm || s.CompN;
        return `<section class="league">
          <div class="league-h">
            <button class="league-open" data-ccd="${esc(s.Ccd)}" data-scd="${esc(s.Scd)}" data-cid="${esc(s.CompId || s.Sid)}" data-name="${esc(name)}">
              ${flag(s.Ccd, s.Cnm)}
            </button>
            <button class="meta league-open" data-ccd="${esc(s.Ccd)}" data-scd="${esc(s.Scd)}" data-cid="${esc(s.CompId || s.Sid)}" data-name="${esc(name)}">
              <b>${esc(name)}</b>
              <span>${esc(s.Cnm || "")}${s.Snm && s.Snm !== s.CompN ? " · " + esc(s.Snm) : ""}</span>
            </button>
            <span class="chev">‹</span>
            <button class="star ${isFav(key) ? "on" : ""}" data-key="${esc(key)}" aria-label="fav">★</button>
          </div>
          ${s.Events.map((ev) => renderMatch(ev, s, { showDay: false })).join("")}
        </section>`;
      })
      .join("");
    if (opts.followedOnly && state.date) {
      return `<div class="day-banner sticky">${esc(dayHeading(state.date))}</div>${html}`;
    }
    return html;
  }

  async function loadDate(ymd, { silent } = {}) {
    state.date = ymd;
    if (!silent) skeleton();
    renderDates();
    renderChips();
    try {
      const data = state.cache["d:" + ymd] && Date.now() - state.cache["d:" + ymd].t < 15000
        ? state.cache["d:" + ymd].v
        : await api("/api/date/" + ymd);
      state.cache["d:" + ymd] = { t: Date.now(), v: data };
      state.stages = data.Stages || [];
      if (state.tab === "matches" && !state.stack.length) {
        $("#view").innerHTML = renderStages(state.stages, { followedOnly: true });
      }
    } catch {
      $("#view").innerHTML = empty(t("error"), "", `<button class="chip on" id="retry">${t("retry")}</button>`);
    }
  }

  async function loadLive({ silent } = {}) {
    applyChrome();
    if (state.tab === "live" && !state.stack.length) {
      setTitle(t("live"));
      renderChips();
    }
    if (!silent) skeleton();
    try {
      const data = await api("/api/live");
      state.live = data.Stages || [];
      applyChrome();
      if (state.tab === "live" && !state.stack.length) {
        setTitle(t("live"));
        $("#view").innerHTML = renderStages(state.live, { followedOnly: true, emptyTitle: t("emptyLive") });
      }
    } catch {
      if (state.tab === "live") $("#view").innerHTML = empty(t("error"));
    }
  }

  function renderLeagues() {
    const q = state.q.toLowerCase();
    const mine = state.featured.filter((f) => isFav(`${f.ccd}/${f.scd}/${f.CompId}`));
    const rest = state.featured.filter((f) => !isFav(`${f.ccd}/${f.scd}/${f.CompId}`));
    const filt = (arr) => arr.filter((f) => !q || `${f.name} ${f.nameAr} ${f.country} ${f.countryAr}`.toLowerCase().includes(q));
    const card = (f) => {
      const key = `${f.ccd}/${f.scd}/${f.CompId}`;
      return `<div class="feat-wrap">
        <button class="feat league-open" data-ccd="${esc(f.ccd)}" data-scd="${esc(f.scd)}" data-cid="${esc(f.CompId)}" data-name="${esc(state.lang === "ar" ? f.nameAr : f.name)}">
          ${flag(f.flag === "gb-eng" ? "england" : f.ccd, f.country)}
          <b>${esc(state.lang === "ar" ? f.nameAr : f.name)}</b>
          <span>${esc(state.lang === "ar" ? f.countryAr : f.country)}</span>
        </button>
        <button class="star ${isFav(key) ? "on" : ""}" data-key="${esc(key)}">★</button>
      </div>`;
    };
    const cats = state.countries
      .filter((c) => !q || `${c.name} ${c.nameAr} ${c.ccd}`.toLowerCase().includes(q))
      .sort((a, b) => (state.lang === "ar" ? a.nameAr : a.name).localeCompare(state.lang === "ar" ? b.nameAr : b.name, state.lang));
    const catsHtml = cats
      .slice(0, 180)
      .map(
        (c) => `<button class="list-row country-open" data-ccd="${esc(c.ccd)}" data-name="${esc(state.lang === "ar" ? c.nameAr : c.name)}">
          ${flag(c.ccd, c.name)}
          <span style="flex:1;text-align:start;font-weight:550">${esc(state.lang === "ar" ? c.nameAr : c.name)}</span>
          <span class="go">‹</span>
        </button>`
      )
      .join("");
    $("#view").innerHTML = `
      <div class="section-t">${t("myLeagues")}</div>
      <div class="featured">${filt(mine).map(card).join("") || `<div class="empty" style="padding:24px 12px"><p>${t("emptyFollowHint")}</p></div>`}</div>
      <div class="section-t">${t("discover")}</div>
      <div class="featured">${filt(rest).map(card).join("")}</div>
      <div class="section-t">${t("countries")}</div>
      <div class="list-wrap">${catsHtml || empty(t("emptyDay"))}</div>
    `;
  }

  function renderFavorites() {
    const keys = new Set(state.favLeagues);
    const fromDay = (state.stages || []).filter((s) => keys.has(leagueKey(s)));
    const extra = state.featured.filter((f) => keys.has(`${f.ccd}/${f.scd}/${f.CompId}`));
    let html = "";
    if (fromDay.length) html += renderStages(fromDay);
    const missing = extra.filter((f) => !fromDay.some((s) => leagueKey(s) === `${f.ccd}/${f.scd}/${f.CompId}`));
    if (missing.length) {
      html += `<div class="section-t">${t("following")}</div><div class="list-wrap">`;
      html += missing
        .map(
          (f) => `<button class="list-row league-open" data-ccd="${esc(f.ccd)}" data-scd="${esc(f.scd)}" data-cid="${esc(f.CompId)}" data-name="${esc(state.lang === "ar" ? f.nameAr : f.name)}">
            ${flag(f.ccd)}<span style="flex:1;text-align:start;font-weight:550">${esc(state.lang === "ar" ? f.nameAr : f.name)}</span><span class="go">‹</span>
          </button>`
        )
        .join("");
      html += "</div>";
    }
    if (!html) html = empty(t("emptyFav"), t("emptyFavHint"));
    $("#view").innerHTML = html;
  }

  function push(page) {
    state.stack.push(page);
    renderPage();
  }
  function pop() {
    state.stack.pop();
    renderPage();
  }

  async function openMatch(eid, meta) {
    push({ type: "match", eid, meta, title: t("matches") });
    skeleton();
    setTitle(t("live"), t("app"));
    try {
      const data = await api("/api/match/" + eid);
      const page = state.stack[state.stack.length - 1];
      if (!page || page.eid !== eid) return;
      page.data = data;
      renderMatchPage(page);
    } catch {
      $("#view").innerHTML = empty(t("error"));
    }
  }

  function incidentLabel(it, nm) {
    if (it === 36 || it === 37) return { lab: t("goal"), cls: "g" };
    if (it === 39) return { lab: t("own"), cls: "g" };
    if (it === 43) return { lab: t("yellow"), cls: "y" };
    if (it === 45 || it === 41) return { lab: t("red"), cls: "r" };
    if (it === 63) return { lab: t("assist"), cls: "" };
    if (nm === 1 || nm === 2) return { lab: t("goal"), cls: "g" };
    return { lab: "", cls: "" };
  }

  function renderWatchBody(page, sb, st, t1, t2, s1, s2, incs) {
    const show = st.kind === "live" || st.kind === "ft";
    const last = [...incs].reverse().slice(0, 6);
    const events = last.length
      ? last
          .map((e) => {
            const L = incidentLabel(e.it, e.nm);
            return `<div class="ticker-item ${L.cls}">
              <span class="min">${e.min ?? ""}′</span>
              ${L.lab ? `<span class="pill ${L.cls}">${esc(L.lab)}</span>` : ""}
              <span>${esc(e.player || "")}</span>
              <span style="color:var(--secondary);font-size:12px">${esc(e.nm === 2 ? t2.name : t1.name)}</span>
              ${e.sc ? `<b dir="ltr">${e.sc[0]}-${e.sc[1]}</b>` : ""}
            </div>`;
          })
          .join("")
      : `<div class="empty"><p>${t("noEvents")}</p></div>`;

    return `
      <div class="theater compact">
        <div class="theater-top">
          ${st.kind === "live" ? `<span class="live-pill"><i></i>${esc(t("live"))} ${esc(st.label)}</span>` : `<span class="live-pill dim">${esc(st.label)}</span>`}
        </div>
        <div class="theater-score">
          <div class="th-team">${crest(t1, true)}<b>${esc(t1.name)}</b></div>
          <div class="th-nums" id="watchNums" dir="ltr">${show ? `${esc(s1)}<span>–</span>${esc(s2)}` : formatKick(sb.Esd)}</div>
          <div class="th-team">${crest(t2, true)}<b>${esc(t2.name)}</b></div>
        </div>
      </div>
      <div class="section-t">${t("lastEvent")}</div>
      <div class="sheet-card ticker" id="watchTicker">${events}</div>
    `;
  }

  function flattenIncs(incidents) {
    const out = [];
    const buckets = incidents?.Incs || {};
    for (const half of Object.keys(buckets)) {
      for (const ev of buckets[half] || []) {
        const kids = ev.Incs && ev.Incs.length ? ev.Incs : [ev];
        for (const k of kids) {
          out.push({
            min: k.Min ?? ev.Min,
            it: k.IT,
            nm: k.Nm ?? ev.Nm,
            player: k.Pn || [k.Fn, k.Ln].filter(Boolean).join(" ") || ev.Pn,
            sc: k.Sc || ev.Sc,
          });
        }
      }
    }
    out.sort((a, b) => (a.min || 0) - (b.min || 0));
    return out.filter((x) => x.it !== 63);
  }

  function renderMatchPage(page) {
    const sb = page.data?.scoreboard || {};
    const info = page.data?.info || {};
    const t1 = teamOf(sb.T1);
    const t2 = teamOf(sb.T2);
    const st = statusOf(sb);
    const s1 = sb.Tr1 ?? "–";
    const s2 = sb.Tr2 ?? "–";
    const show = st.kind === "live" || st.kind === "ft";
    const venue = info.Vnm || sb.Venue?.Vnm;
    const city = info.Vcy || sb.Venue?.Vcy;
    const ref = (info.Refs && info.Refs[0]?.Nm) || "";
    const comp = sb.Stg?.Snm || page.meta?.name || "";
    const tab = page.tab || (st.kind === "live" ? "watch" : "events");
    page.tab = tab;
    setTitle(comp || t("matches"), st.kind === "live" ? t("live") : t("app"));

    const incs = flattenIncs(page.data?.incidents);
    const eventsHtml = incs.length
      ? incs
          .map((e) => {
            const L = incidentLabel(e.it, e.nm);
            const teamNm = e.nm === 2 ? t2.name : t1.name;
            return `<div class="event-row">
              <span class="min">${e.min ?? ""}′</span>
              ${L.lab ? `<span class="pill ${L.cls}">${esc(L.lab)}</span>` : ""}
              <span style="flex:1">${esc(e.player || "")}</span>
              <span style="color:var(--secondary);font-size:12px">${esc(teamNm)}</span>
              ${e.sc ? `<span class="sc" dir="ltr">${e.sc[0]}-${e.sc[1]}</span>` : ""}
            </div>`;
          })
          .join("")
      : `<div class="empty"><p>${t("noEvents")}</p></div>`;

    const stats = page.data?.stats?.Stat || [];
    const sHome = stats.find((x) => x.Tnb === 1) || {};
    const sAway = stats.find((x) => x.Tnb === 2) || {};
    const statMap = [
      ["Shon", state.lang === "ar" ? "على المرمى" : "On target"],
      ["Shof", state.lang === "ar" ? "خارج المرمى" : "Off target"],
      ["Shwd", state.lang === "ar" ? "التسديدات" : "Shots"],
      ["Fls", state.lang === "ar" ? "الأخطاء" : "Fouls"],
      ["Ycs", state.lang === "ar" ? "صفراء" : "Yellows"],
      ["Rcs", state.lang === "ar" ? "حمراء" : "Reds"],
      ["Ofs", state.lang === "ar" ? "تسلل" : "Offsides"],
      ["Crs", state.lang === "ar" ? "العرضيات" : "Crosses"],
      ["Cos", state.lang === "ar" ? "ركنيات" : "Corners"],
      ["Gks", state.lang === "ar" ? "تصديات" : "Saves"],
      ["Att", state.lang === "ar" ? "الهجمات" : "Attacks"],
    ];
    const hasStats = stats.length > 0;
    const statsHtml = hasStats
      ? statMap
          .filter(([k]) => sHome[k] != null || sAway[k] != null)
          .map(([k, lab]) => {
            const a = +sHome[k] || 0;
            const b = +sAway[k] || 0;
            const tot = a + b || 1;
            return `<div class="stat-row">
              <span class="n">${a}</span>
              <div class="bar"><i style="width:${(a / tot) * 100}%"></i></div>
              <span class="lab">${esc(lab)}</span>
              <div class="bar"><i class="away" style="width:${(b / tot) * 100}%"></i></div>
              <span class="n">${b}</span>
            </div>`;
          })
          .join("")
      : `<div class="empty"><p>${t("noStats")}</p></div>`;

    const lus = page.data?.lineups?.Lu || [];
    function players(tnb) {
      const lu = lus.find((x) => x.Tnb === tnb);
      const ps = (lu?.Ps || []).filter((p) => p.Pon || p.Snu);
      if (!ps.length) return `<div class="empty"><p>${t("noLineup")}</p></div>`;
      return ps
        .map(
          (p) => `<div class="player">
            <span class="no">${p.Snu ?? ""}</span>
            <span>${esc([p.Fn, p.Ln].filter(Boolean).join(" ") || p.Pn || "")}</span>
            <span class="pos">${esc(p.Pon || "")}</span>
          </div>`
        )
        .join("");
    }

    const body =
      tab === "watch"
        ? renderWatchBody(page, sb, st, t1, t2, s1, s2, incs)
        : tab === "events"
        ? eventsHtml
        : tab === "stats"
        ? statsHtml
        : tab === "lineups"
        ? `<div class="section-t">${esc(t1.name)}</div>${players(1)}<div class="section-t">${esc(t2.name)}</div>${players(2)}`
        : `<div class="event-row"><span style="flex:1">${t("venue")}</span><b>${esc([venue, city].filter(Boolean).join(" · ") || "—")}</b></div>
           <div class="event-row"><span style="flex:1">${t("referee")}</span><b>${esc(ref || "—")}</b></div>
           <div class="event-row"><span style="flex:1">${t("kickoff")}</span><b>${esc(formatKick(sb.Esd || info.Esd))}</b></div>`;

    const hideHero = tab === "watch";
    $("#view").innerHTML = `
      ${hideHero ? "" : `<div class="sheet-card scoreboard">
        <div class="comp">${esc(comp)}${sb.Stg?.Cnm ? " · " + esc(sb.Stg.Cnm) : ""}</div>
        <div class="sb-row">
          <div class="sb-team">${crest(t1, true)}<div class="nm">${esc(t1.name)}</div></div>
          <div class="sb-score" dir="ltr">${show ? `${esc(s1)} – ${esc(s2)}` : formatKick(sb.Esd)}</div>
          <div class="sb-team">${crest(t2, true)}<div class="nm">${esc(t2.name)}</div></div>
        </div>
        <div class="sb-meta">${st.kind === "live" ? `<span class="live">${esc(st.label)}</span>` : esc(st.label)}</div>
      </div>`}
      <div class="seg">
        <button data-mtab="watch" class="${tab === "watch" ? "on" : ""}">${t("watch")}</button>
        <button data-mtab="events" class="${tab === "events" ? "on" : ""}">${t("events")}</button>
        <button data-mtab="stats" class="${tab === "stats" ? "on" : ""}">${t("stats")}</button>
        <button data-mtab="lineups" class="${tab === "lineups" ? "on" : ""}">${t("lineups")}</button>
        <button data-mtab="info" class="${tab === "info" ? "on" : ""}">${t("info")}</button>
      </div>
      ${tab === "watch" ? body : `<div class="sheet-card">${body}</div>`}
    `;
  }

  async function openLeague(ccd, scd, cid, name) {
    push({ type: "league", ccd, scd, cid, name, tab: "fixtures" });
    skeleton();
    setTitle(name, t("leagues"));
    try {
      const data = await api(`/api/stage/${ccd}/${scd}/${cid}`);
      const page = state.stack[state.stack.length - 1];
      if (!page || page.type !== "league") return;
      page.data = data;
      renderLeaguePage(page);
    } catch {
      $("#view").innerHTML = empty(t("error"));
    }
  }

  function renderLeaguePage(page) {
    const stg = page.data?.Stages?.[0] || {};
    const tab = page.tab || "fixtures";
    const key = `${page.ccd}/${page.scd}/${page.cid}`;
    setTitle(page.name || stg.Snm || t("leagues"), stg.Cnm || t("leagues"));

    const tables = stg.LeagueTable?.L?.[0]?.Tables || [];
    const teams = tables[0]?.team || [];
    const tableHtml = teams.length
      ? `<table class="table">
          <thead><tr><th>#</th><th></th><th>${t("played")}</th><th>W</th><th>D</th><th>L</th><th>${t("gd")}</th><th>${t("pts")}</th></tr></thead>
          <tbody>
            ${teams
              .map((tm) => {
                const team = { name: tm.Tnm, img: tm.Img, abr: (tm.Tnm || "").slice(0, 3) };
                return `<tr>
                  <td class="rk">${tm.rnk}</td>
                  <td><div class="team">${crest(team)}<span>${esc(tm.Tnm)}</span></div></td>
                  <td>${tm.pld}</td><td>${tm.win}</td><td>${tm.drw}</td><td>${tm.lst}</td>
                  <td>${tm.gd > 0 ? "+" : ""}${tm.gd}</td>
                  <td><b>${tm.pts}</b></td>
                </tr>`;
              })
              .join("")}
          </tbody>
        </table>`
      : `<div class="empty"><p>${t("noTable")}</p></div>`;

    const evs = stg.Events || [];
    const now = state.today + "000000";
    const upcoming = evs.filter((e) => String(e.Esd || "").slice(0, 8) >= state.today && statusOf(e).kind !== "ft");
    const results = evs.filter((e) => statusOf(e).kind === "ft").slice().reverse();
    const list = tab === "results" ? results : upcoming.length ? upcoming : evs;
    const groups = [];
    for (const e of list) {
      const ymd = esdYmd(e.Esd) || "00000000";
      if (!groups.length || groups[groups.length - 1].ymd !== ymd) groups.push({ ymd, evs: [e] });
      else groups[groups.length - 1].evs.push(e);
    }
    const matchesHtml = list.length
      ? groups
          .map(
            (g) => `<section class="league">
              <div class="day-banner">${esc(dayHeading(g.ymd))}</div>
              ${g.evs.map((e) => renderMatch(e, stg, { showDay: false })).join("")}
            </section>`
          )
          .join("")
      : empty(t("emptyDay"));

    $("#view").innerHTML = `
      <div style="display:flex;justify-content:flex-end;margin-bottom:8px">
        <button class="chip star-lg ${isFav(key) ? "on" : ""}" data-key="${esc(key)}">${isFav(key) ? "★ " + t("following") : "☆ " + t("follow")}</button>
      </div>
      <div class="seg">
        <button data-ltab="fixtures" class="${tab === "fixtures" ? "on" : ""}">${t("fixtures")}</button>
        <button data-ltab="results" class="${tab === "results" ? "on" : ""}">${t("results")}</button>
        <button data-ltab="standings" class="${tab === "standings" ? "on" : ""}">${t("standings")}</button>
      </div>
      ${tab === "standings" ? `<div class="sheet-card" style="overflow:auto">${tableHtml}</div>` : matchesHtml}
    `;
  }

  function renderCountry(page) {
    const ccd = page.ccd;
    const name = page.name;
    const items = state.catalog.filter((c) => c.ccd === ccd);
    const fromDay = (state.stages || []).filter((s) => s.Ccd === ccd);
    setTitle(name, t("countries"));
    let html = "";
    if (fromDay.length) html += renderStages(fromDay);
    if (items.length) {
      html += `<div class="section-t">${t("allLeagues")}</div><div class="list-wrap">`;
      html += items
        .map(
          (c) => `<button class="list-row league-open" data-ccd="${esc(c.ccd)}" data-scd="${esc(c.scd)}" data-cid="${esc(c.CompId)}" data-name="${esc(c.name || c.stage)}">
            <span style="flex:1;text-align:start;font-weight:550">${esc(c.stage || c.name)}</span>
            <span class="go">‹</span>
          </button>`
        )
        .join("");
      html += "</div>";
    }
    if (!html) html = empty(t("emptyDay"), name);
    $("#view").innerHTML = html;
  }

  function openCountry(ccd, name) {
    push({ type: "country", ccd, name });
    renderCountry(state.stack[state.stack.length - 1]);
  }

  function openSettings() {
    if (state.stack[state.stack.length - 1]?.type !== "settings") {
      push({ type: "settings" });
    }
    renderSettings();
  }

  function renderSettings() {
    setTitle(t("settings"), t("app"));
    $("#view").innerHTML = `
      <div class="sheet-card glass">
        <div class="credit">
          <div class="credit-name">
            <b>Youssef Mansouri</b>
            <span class="verified" title="Verified" aria-label="موثّق">
              <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
                <circle cx="12" cy="12" r="11" fill="#1ee0b0"/>
                <path d="M7.1 12.2l3.2 3.25 6.6-6.75" fill="none" stroke="#fff" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </span>
          </div>
          <span>${state.lang === "ar" ? "الحقوق محفوظة" : "All rights reserved"}</span>
        </div>
        <div class="settings-row">
          <div><b>${t("dark")}</b></div>
          <button class="toggle ${state.theme === "dark" ? "on" : ""}" id="themeToggle"><i></i></button>
        </div>
        <div class="settings-row">
          <div><b>${state.lang === "ar" ? "اللغة" : "Language"}</b></div>
          <button class="chip on" id="langToggle">${t("lang")}</button>
        </div>
      </div>
    `;
  }

  function renderPage() {
    applyChrome();
    const page = state.stack[state.stack.length - 1];
    if (!page) {
      $("#view").style.paddingBottom = "";
      if (state.tab === "matches") {
        setTitle(t("matches"));
        renderDates();
        renderChips();
        $("#view").innerHTML = state.stages.length
          ? renderStages(state.stages, { followedOnly: true })
          : empty(t("emptyDay"));
      } else if (state.tab === "live") {
        setTitle(t("live"));
        renderChips();
        $("#view").innerHTML = renderStages(state.live, { followedOnly: true, emptyTitle: t("emptyLive") });
      } else if (state.tab === "leagues") {
        setTitle(t("leagues"));
        renderLeagues();
      } else {
        setTitle(t("more"));
        renderSettings();
      }
      return;
    }
    if (page.type === "match" && page.data) renderMatchPage(page);
    else if (page.type === "league" && page.data) renderLeaguePage(page);
    else if (page.type === "country") renderCountry(page);
    else if (page.type === "settings") renderSettings();
  }

  const DHIKR = [
    "أستغفر الله",
    "أستغفر الله وأتوب إليه",
    "اللهم صل على محمد وعلى آل محمد",
    "اللهم صل وسلم على نبينا محمد",
    "سبحان الله وبحمده",
    "لا إله إلا الله",
    "الحمد لله رب العالمين",
    "لا حول ولا قوة إلا بالله",
  ];

  function startDhikr() {
    const el = $("#toast");
    if (!el) return;
    const show = () => {
      const phrase = DHIKR[Math.floor(Math.random() * DHIKR.length)];
      el.innerHTML = `<div class="toast-inner">
        <span class="toast-ico" aria-hidden="true">
          <svg viewBox="0 0 24 24" width="20" height="20"><path fill="currentColor" d="M12 2.2c.35 4.2 3.5 7.35 7.7 7.7-4.2.35-7.35 3.5-7.7 7.7-.35-4.2-3.5-7.35-7.7-7.7 4.2-.35 7.35-3.5 7.7-7.7z"/></svg>
        </span>
        <span class="toast-txt">${phrase}</span>
      </div>`;
      el.classList.add("on");
      clearTimeout(show.hide);
      show.hide = setTimeout(() => el.classList.remove("on"), 5000);
    };
    setTimeout(show, 6000);
    setInterval(show, 3 * 60 * 1000);
  }

  function unlockAudio() {
    try {
      const AC = window.AudioContext || window.webkitAudioContext;
      if (!AC) return;
      tap.ctx = tap.ctx || new AC();
      if (tap.ctx.state === "suspended") tap.ctx.resume();
    } catch {}
  }

  function playClickFile() {
    if (!tap.pool) {
      tap.pool = [0, 1, 2].map(() => {
        const a = new Audio("/sounds/click.wav");
        a.preload = "auto";
        a.volume = 0.55;
        return a;
      });
      tap.pi = 0;
    }
    const a = tap.pool[tap.pi++ % tap.pool.length];
    try { a.currentTime = 0; } catch {}
    const p = a.play();
    if (p && p.catch) p.catch(() => synthClick());
  }

  function synthClick() {
    try {
      const AC = window.AudioContext || window.webkitAudioContext;
      if (!AC) return;
      tap.ctx = tap.ctx || new AC();
      const ctx = tap.ctx;
      if (ctx.state === "suspended") ctx.resume();
      const t0 = ctx.currentTime;
      const g = ctx.createGain();
      g.gain.setValueAtTime(0.0001, t0);
      g.gain.exponentialRampToValueAtTime(0.18, t0 + 0.004);
      g.gain.exponentialRampToValueAtTime(0.0001, t0 + 0.04);
      g.connect(ctx.destination);
      const o1 = ctx.createOscillator();
      o1.type = "sine";
      o1.frequency.setValueAtTime(1900, t0);
      o1.frequency.exponentialRampToValueAtTime(700, t0 + 0.03);
      o1.connect(g);
      o1.start(t0);
      o1.stop(t0 + 0.042);
    } catch {}
  }

  function tap() {
    try { navigator.vibrate?.(12); } catch {}
    unlockAudio();
    try { playClickFile(); } catch { synthClick(); }
  }

  function bind() {
    document.addEventListener("touchstart", unlockAudio, { once: true, passive: true });
    document.addEventListener("click", unlockAudio, { once: true });
    $("#backBtn").addEventListener("click", () => { tap(); pop(); });
    $("#searchBtn").addEventListener("click", () => {
      tap();
      state.searchOpen = !state.searchOpen;
      $("#searchWrap").classList.toggle("hidden", !state.searchOpen);
      if (state.searchOpen) $("#searchInput").focus();
      else {
        state.q = "";
        $("#searchInput").value = "";
        renderPage();
      }
    });
    $("#moreBtn").addEventListener("click", () => { tap(); openSettings(); });
    $("#searchInput").addEventListener("input", (e) => {
      state.q = e.target.value.trim();
      renderPage();
    });
    $("#dates").addEventListener("click", (e) => {
      const b = e.target.closest(".day");
      if (!b) return;
      tap();
      loadDate(b.dataset.ymd);
    });
    $("#chips").addEventListener("click", (e) => {
      const b = e.target.closest(".chip");
      if (!b) return;
      tap();
      state.filter = b.dataset.f;
      renderChips();
      renderPage();
    });
    $("#tabbar").addEventListener("click", (e) => {
      const b = e.target.closest(".tab");
      if (!b) return;
      tap();
      state.tab = b.dataset.tab;
      state.stack = [];
      state.filter = "all";
      applyChrome();
      if (state.tab === "live") loadLive();
      else if (state.tab === "matches" && !state.stages.length && state.date) loadDate(state.date);
      else renderPage();
    });
    $("#view").addEventListener("click", (e) => {
      if (e.target.closest("button, .match, .feat, .list-row, .chip, .star, .toggle")) tap();
      const go = e.target.closest("[data-go-tab]");
      if (go) {
        state.tab = go.dataset.goTab;
        state.stack = [];
        renderPage();
        return;
      }
      if (e.target.closest("#retry")) return loadDate(state.date);
      if (e.target.closest("#themeToggle")) {
        state.theme = state.theme === "dark" ? "light" : "dark";
        localStorage.setItem("ahdaf-theme", state.theme);
        applyChrome();
        renderPage();
        return;
      }
      if (e.target.closest("#langToggle")) {
        state.lang = state.lang === "ar" ? "en" : "ar";
        localStorage.setItem("ahdaf-lang", state.lang);
        applyChrome();
        renderPage();
        return;
      }
      const star = e.target.closest(".star, .star-lg");
      if (star?.dataset.key) {
        toggleFav(star.dataset.key);
        renderPage();
        return;
      }
      const mtab = e.target.closest("[data-mtab]");
      if (mtab) {
        const page = state.stack[state.stack.length - 1];
        if (page) {
          page.tab = mtab.dataset.mtab;
          renderMatchPage(page);
        }
        return;
      }
      const ltab = e.target.closest("[data-ltab]");
      if (ltab) {
        const page = state.stack[state.stack.length - 1];
        if (page) {
          page.tab = ltab.dataset.ltab;
          renderLeaguePage(page);
        }
        return;
      }
      const lg = e.target.closest(".league-open");
      if (lg) {
        openLeague(lg.dataset.ccd, lg.dataset.scd, lg.dataset.cid, lg.dataset.name);
        return;
      }
      const c = e.target.closest(".country-open");
      if (c) {
        openCountry(c.dataset.ccd, c.dataset.name);
        return;
      }
      const m = e.target.closest(".match");
      if (m) {
        openMatch(m.dataset.eid, {
          ccd: m.dataset.ccd,
          scd: m.dataset.scd,
          cid: m.dataset.cid,
        });
      }
    });
  }

  function showFatal(err) {
    const view = $("#view");
    if (view) {
      view.innerHTML = empty(
        t("error"),
        String(err?.message || ""),
        `<button class="cta" id="retry">${t("retry")}</button>`
      );
    }
  }

  async function boot() {
    try {
      applyChrome();
      bind();
      skeleton();
      try {
        const bootData = await api("/api/bootstrap");
        state.today = bootData.today || ymdCasa();
        state.date = bootData.date || state.today;
        state.featured = bootData.featured?.length ? bootData.featured : FEATURED;
        state.countries = bootData.countries || [];
        state.catalog = bootData.catalog || [];
        state.stages = bootData.dateData?.Stages || [];
        state.live = bootData.liveData?.Stages || [];
        state.cache["d:" + state.date] = { t: Date.now(), v: bootData.dateData };
      } catch (e) {
        state.today = ymdCasa();
        state.date = state.today;
        state.featured = FEATURED;
        showFatal(e);
        renderDates();
        renderChips();
        applyChrome();
        startDhikr();
        return;
      }
      renderDates();
      renderChips();
      renderPage();
      startDhikr();
    } catch (err) {
      showFatal(err);
      return;
    }
    state.liveTimer = setInterval(async () => {
      if (document.hidden) return;
      const page = state.stack[state.stack.length - 1];
      if (page?.type === "match" && page.eid) {
        try {
          const data = await api("/api/match/" + page.eid);
          const cur = state.stack[state.stack.length - 1];
          if (cur?.eid !== page.eid) return;
          const fp = JSON.stringify({
            e: data?.scoreboard?.Eps,
            a: data?.scoreboard?.Tr1,
            b: data?.scoreboard?.Tr2,
            i: data?.incidents,
          });
          if (fp === cur.fp) return;
          cur.data = data;
          cur.fp = fp;
          const y = $("#view")?.scrollTop || 0;
          renderMatchPage(cur);
          if ($("#view")) $("#view").scrollTop = y;
        } catch {}
        return;
      }
      if (state.tab === "live" && !state.stack.length) loadLive({ silent: true });
      else if (state.tab === "matches" && !state.stack.length && state.date === state.today) {
        loadDate(state.date, { silent: true });
      }
    }, 8000);
  }

  if ("serviceWorker" in navigator && !isNative()) {
    navigator.serviceWorker.register("/sw.js").catch(() => {});
  }
  boot();
})();
