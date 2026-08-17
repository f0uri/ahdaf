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
      myTeams: "فرقي",
      liveNow: "الآن",
      dhikr: "أذكار",
      dhikrHint: "تظهر لخمس ثوانٍ أثناء التصفح",
      followTeam: "متابعة",
      followingTeam: "متابَع",
      about: "حول أهداف",
      aboutBody: "أهداف تطبيق عربي لنتائج كرة القدم: مباشر، مواعيد، ترتيب، تشكيلات وأحداث. تتابع فرقك ودورياتك فقط، مع الوديات، بتوقيت المغرب وتصميم هادئ.",
      aboutFeat1: "نتائج ومباشر لكل الدوريات والكؤوس",
      aboutFeat2: "فرقي ودورياتي في الصفحة الرئيسية",
      aboutFeat3: "ترتيب، تشكيلات، إحصائيات وأحداث",
      guest: "زائر",
      googleBtn: "المتابعة بحساب Google",
      guestBtn: "الدخول كزائر",
      authLead: "نتائج ومواعيد فرقك، بتصميم هادئ",
      authNote: "الزائر يُحفظ على هذا الجهاز. حساب Google يفصل متابعاتك.",
      account: "الحساب",
      signOut: "تسجيل الخروج",
      googleSoon: "حفظ السحابة عبر Google Play يحتاج إعداد المطوّر. حُفظ حسابك على هذا الجهاز.",
      googleFail: "تعذّر الدخول بجوجل. جرّب إنشاء يوزر أو الزائر.",
      googleBlocked: "جوجل رفض التطبيق. أضف بريدك كمستخدم تجريبي بحروف صغيرة ثم أعد المحاولة.",
      googleWait: "جارٍ اختيار الحساب داخل أهداف…",
      createUser: "إنشاء حساب",
      userPlaceholder: "اسم المستخدم",
      userBad: "اكتب اسماً من حرفين على الأقل",
      verifyTitle: "طلب التوثيق",
      verifyBody: "كل حساب له كود خاص لا يعمل على حساب آخر. أنشئ يوزر أو ادخل بجوجل، ثم راسل المطوّر باسمك ليُرسل كودك.",
      verifyNeedUser: "أنشئ يوزر أو ادخل بجوجل أولاً حتى يُربط الكود بحسابك.",
      verifyCode: "كود التوثيق",
      verifyGo: "تفعيل التوثيق",
      verifyOk: "تم التوثيق",
      verifyNo: "الكود غير صحيح",
      verifyWait: "محاولات كثيرة. انتظر قليلاً ثم أعد المحاولة.",
      verifyDm: "مراسلة المطوّر",
      verifiedOn: "حساب موثّق",
      makeUser: "تحويل إلى يوزر",
      handleTitle: "أكمل حسابك",
      handleLead: "اليوزر ثابت ولا يمكن تغييره لاحقاً",
      handleLeadAdmin: "حساب المطوّر — يمكنك تغيير اليوزر لاحقاً متى شئت",
      handleLab: "اليوزر",
      nameLab: "الاسم",
      handleSave: "متابعة",
      handleBad: "يوزر من 3 إلى 20 حرفاً: حروف وأرقام ونقطة وشرطة سفلية",
      handleTaken: "هذا اليوزر مستخدم",
      handleNeed: "أدخل اليوزر والاسم",
      editHandle: "تغيير اليوزر",
      adminHandleHint: "متاح لحساب المطوّر فقط — غيّره متى شئت",
      saveHandle: "حفظ اليوزر",
      handleSaved: "تم تغيير اليوزر",
      badgeColor: "لون التوثيق",
      badgeColorHint: "",
      adminOn: "حساب المطوّر موثّق تلقائياً",
      adminMark: "أدمن",
      accounts: "الحسابات",
      switchAcc: "تبديل",
      addAcc: "حساب جوجل آخر",
      addPhoto: "إضافة صورة",
      changePhoto: "تغيير الصورة",
      removePhoto: "حذف الصورة",
      currentAcc: "الحالي",
      continueAcc: "متابعة",
      clubs: "فرقي",
      pickClubs: "أضف نادياً",
      grantTitle: "توثيق يوزر",
      grantLead: "أدخل اليوزر لعرض معلوماته وتوثيقه أو إزالة التوثيق",
      grantGo: "بحث",
      grantOn: "توثيق",
      grantOff: "إزالة التوثيق",
      grantMiss: "لا يوجد هذا اليوزر على هذا الجهاز",
      grantOk: "تم التوثيق",
      grantNo: "أُزيل التوثيق",
      h2h: "المواجهات",
      formLab: "آخر النتائج",
      goalAlert: "هدف",
      officialWatch: "منصات رسمية",
      verifyBody: "راسل المطوّر بيوزرك ليصلك الكود الخاص بحسابك فقط.",
      editName: "تعديل الاسم",
      saveName: "حفظ",
      support: "الدعم",
      supportLead: "اكتب مشكلتك أو استفسارك. تصل للمطوّر مع معلومات حسابك.",
      supportPh: "صف المشكلة هنا…",
      supportSend: "إرسال",
      supportOk: "وصلت رسالتك",
      supportShort: "اكتب تفاصيل أكثر قليلاً",
      supportHint: "اضغط لفتح نموذج الدعم",
      savedOk: "تم الحفظ",
      ameen: "آمين",
      remembrance: "ذكر",
      followHint: "تابع فرقك لتظهر أولاً في الرئيسية.",
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
      myTeams: "My teams",
      liveNow: "Live now",
      dhikr: "Remembrance",
      dhikrHint: "Appears for five seconds while you browse",
      followTeam: "Follow",
      followingTeam: "Following",
      about: "About Ahdaf",
      aboutBody: "Ahdaf is an Arabic football scores app: live, fixtures, tables, line-ups and events. Follow only your teams and leagues, plus friendlies, on Morocco time.",
      aboutFeat1: "Live scores for leagues and cups",
      aboutFeat2: "My teams and leagues on the home screen",
      aboutFeat3: "Tables, line-ups, stats and events",
      guest: "Guest",
      googleBtn: "Continue with Google",
      guestBtn: "Continue as guest",
      authLead: "Your teams, live and fixtures — calmly",
      authNote: "Guest data stays on this device. A Google account keeps follows separate.",
      account: "Account",
      signOut: "Sign out",
      googleSoon: "Play cloud save needs a developer Google client. Your profile is stored on this device.",
      googleFail: "Google sign-in failed. Create a username or continue as guest.",
      googleBlocked: "Google blocked the app. Add your Gmail as a lowercase test user, then try again.",
      googleWait: "Choose your Google account inside Ahdaf…",
      createUser: "Create account",
      userPlaceholder: "Username",
      userBad: "Use at least two characters",
      verifyTitle: "Request verification",
      verifyBody: "Enter the verification code, or message the developer on Instagram.",
      verifyCode: "Verification code",
      verifyGo: "Activate",
      verifyOk: "Verified",
      verifyNo: "That code is not valid",
      verifyWait: "Too many tries. Wait a bit, then try again.",
      verifyDm: "Message the developer",
      verifiedOn: "Verified account",
      makeUser: "Create a username",
      handleTitle: "Finish your profile",
      handleLead: "Your username is permanent and unique",
      handleLeadAdmin: "Owner account — you can change your username anytime",
      handleLab: "Username",
      nameLab: "Name",
      handleSave: "Continue",
      handleBad: "3–20 characters: letters, numbers, dot or underscore",
      handleTaken: "That username is taken",
      handleNeed: "Enter a username and name",
      editHandle: "Change username",
      adminHandleHint: "Owner only — change it whenever you want",
      saveHandle: "Save username",
      handleSaved: "Username updated",
      badgeColor: "Badge color",
      badgeColorHint: "",
      adminOn: "Owner account is verified automatically",
      adminMark: "Admin",
      accounts: "Accounts",
      switchAcc: "Switch",
      addAcc: "Another Google account",
      currentAcc: "Current",
      continueAcc: "Continue",
      clubs: "My clubs",
      pickClubs: "Add a club",
      addPhoto: "Add photo",
      changePhoto: "Change photo",
      removePhoto: "Remove photo",
      grantTitle: "Verify a user",
      grantLead: "Enter a username to see their info and verify or remove verification",
      grantGo: "Search",
      grantOn: "Verify",
      grantOff: "Remove",
      grantMiss: "That username is not on this device",
      grantOk: "Verified",
      grantNo: "Verification removed",
      h2h: "Head to head",
      formLab: "Recent form",
      goalAlert: "Goal",
      officialWatch: "Official platforms",
      verifyNeedUser: "Create a username first so the code binds to you.",
      editName: "Edit name",
      saveName: "Save",
      support: "Support",
      supportLead: "Write your issue. It reaches the developer with your account info.",
      supportPh: "Describe the problem…",
      supportSend: "Send",
      supportOk: "Message sent",
      supportShort: "Please write a bit more",
      supportHint: "Tap to open the support form",
      savedOk: "Saved",
      verifyBody: "Message the developer your username to receive your unique code.",
      ameen: "Ameen",
      remembrance: "Remembrance",
      followHint: "Follow your clubs so they appear first on Home.",
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
    "world-cup": "un", "nations-league": "eu", "euro": "eu", "copa-america": "un",
    "africa-cup": "un", afcon: "un", "asian-cup": "un", "gold-cup": "un",
    "korea-republic": "kr", "korea-dpr": "kp", "north-korea": "kp",
    "china-pr": "cn", "chinese-taipei": "tw", taiwan: "tw",
    "republic-of-ireland": "ie", eire: "ie",
    "bosnia-herzegovina": "ba", "fyrom": "mk",
    "trinidad-and-tobago": "tt", "el-salvador": "sv", nicaragua: "ni",
    "dominican-republic": "do", haiti: "ht", cuba: "cu",
    "papua-new-guinea": "pg", fiji: "fj", tahiti: "pf",
    "central-african-republic": "cf", "equatorial-guinea": "gq",
    "sao-tome": "st", eswatini: "sz", swaziland: "sz", lesotho: "ls",
    eritrea: "er", "south-sudan": "ss",
    "congo-dr": "cd", "drcongo": "cd", "democratic-republic-congo": "cd",
    "korea": "kr", "usa": "us", "united-states-of-america": "us",
    "england": "gb-eng", "scotland": "gb-sct", "wales": "gb-wls",
    georgia: "ge", armenia: "am", azerbaijan: "az",
    "sri-lanka": "lk", nepal: "np", "myanmar": "mm", cambodia: "kh",
    laos: "la", mongolia: "mn", afghanistan: "af",
    "new-caledonia": "nc", "solomon-islands": "sb",
    "san-marino": "sm", andorra: "ad", liechtenstein: "li",
    gibraltar: "gi", "isle-of-man": "im",
    "puerto-rico": "pr", suriname: "sr", guyana: "gy",
    "french-guiana": "gf", martinique: "mq", guadeloupe: "gp",
    curacao: "cw", aruba: "aw", bermuda: "bm",
    "antigua-and-barbuda": "ag", barbados: "bb", grenada: "gd",
    dominica: "dm", "st-lucia": "lc", "st-kitts": "kn",
    "st-vincent": "vc", belize: "bz",
    "timor-leste": "tl", brunei: "bn", maldives: "mv",
    kyrgyzstan: "kg", tajikistan: "tj", turkmenistan: "tm",
    "korea-south": "kr",
  };

  const FLAG_NAME = {
    morocco: "ma", maroc: "ma", england: "gb-eng", spain: "es", italy: "it",
    germany: "de", france: "fr", egypt: "eg", netherlands: "nl", holland: "nl",
    portugal: "pt", brazil: "br", mexico: "mx", turkey: "tr", argentina: "ar",
    belgium: "be", scotland: "gb-sct", tunisia: "tn", algeria: "dz",
    nigeria: "ng", japan: "jp", china: "cn", australia: "au", canada: "ca",
    "saudi arabia": "sa", "south africa": "za", "united states": "us", usa: "us",
    "ivory coast": "ci", "côte d'ivoire": "ci", "cote d'ivoire": "ci",
    "saudi arabia": "sa", "united arab emirates": "ae", "south korea": "kr",
    "north korea": "kp", "czech republic": "cz", "north macedonia": "mk",
    "bosnia and herzegovina": "ba", "faroe islands": "fo",
    "northern ireland": "gb-nir", "republic of ireland": "ie",
    "hong kong": "hk", "south africa": "za", "new zealand": "nz",
    "costa rica": "cr", "el salvador": "sv", "trinidad and tobago": "tt",
    "cape verde": "cv", "burkina faso": "bf", "sierra leone": "sl",
    "guinea bissau": "gw", "equatorial guinea": "gq",
    "central african republic": "cf", "dr congo": "cd", "congo dr": "cd",
    "south sudan": "ss", "sri lanka": "lk", "san marino": "sm",
    "united states": "us", "great britain": "gb",
    المغرب: "ma", مصر: "eg", السعودية: "sa", الجزائر: "dz", تونس: "tn",
    الإمارات: "ae", قطر: "qa", العراق: "iq", الأردن: "jo", لبنان: "lb",
    فلسطين: "ps", سوريا: "sy", اليمن: "ye", السودان: "sd", ليبيا: "ly",
    إنجلترا: "gb-eng", إسبانيا: "es", إيطاليا: "it", ألمانيا: "de",
    فرنسا: "fr", البرازيل: "br", الأرجنتين: "ar", البرتغال: "pt",
    هولندا: "nl", بلجيكا: "be", المغرب: "ma",
  };

  const COUNTRY_AR = {
    morocco: "المغرب", england: "إنجلترا", spain: "إسبانيا", italy: "إيطاليا",
    germany: "ألمانيا", france: "فرنسا", egypt: "مصر", "saudi-arabia": "السعودية",
    holland: "هولندا", netherlands: "هولندا", portugal: "البرتغال", usa: "أمريكا",
    "united-states": "أمريكا", brazil: "البرازيل", mexico: "المكسيك", turkey: "تركيا",
    turkiye: "تركيا", argentina: "الأرجنتين", belgium: "بلجيكا", scotland: "اسكتلندا",
    tunisia: "تونس", algeria: "الجزائر", nigeria: "نيجيريا", japan: "اليابان",
    china: "الصين", australia: "أستراليا", canada: "كندا", denmark: "الدنمارك",
    sweden: "السويد", norway: "النرويج", switzerland: "سويسرا", austria: "النمسا",
    greece: "اليونان", poland: "بولندا", ukraine: "أوكرانيا", russia: "روسيا",
    croatia: "كرواتيا", serbia: "صربيا", romania: "رومانيا", ireland: "إيرلندا",
    wales: "ويلز", colombia: "كولومبيا", chile: "تشيلي", peru: "بيرو",
    ecuador: "الإكوادور", uruguay: "الأوروغواي", qatar: "قطر", iraq: "العراق",
    jordan: "الأردن", lebanon: "لبنان", kuwait: "الكويت", bahrain: "البحرين",
    oman: "عُمان", yemen: "اليمن", palestine: "فلسطين", sudan: "السودان",
    libya: "ليبيا", senegal: "السنغال", ghana: "غانا", "united-arab-emirates": "الإمارات",
    uae: "الإمارات", "south-africa": "جنوب أفريقيا", "south-korea": "كوريا الجنوبية",
    korea: "كوريا الجنوبية", iran: "إيران", syria: "سوريا", india: "الهند",
    "champions-league": "أوروبا", "europa-league": "أوروبا", uefa: "أوروبا",
    fifa: "دولي", intl: "دولي", international: "دولي", africa: "أفريقيا",
    "club-friendlies": "ودية", friendlies: "ودية", "world-cup": "دولي",
    "nations-league": "أوروبا", euro: "أوروبا", "copa-america": "أمريكا الجنوبية",
    "africa-cup": "أفريقيا", afcon: "أفريقيا", "czech-republic": "التشيك",
    czechia: "التشيك", hungary: "المجر", slovakia: "سلوفاكيا", slovenia: "سلوفينيا",
    bulgaria: "بلغاريا", finland: "فنلندا", iceland: "آيسلندا", "hong-kong": "هونغ كونغ",
    "ivory-coast": "ساحل العاج", cameroon: "الكاميرون", mali: "مالي",
    "north-macedonia": "مقدونيا", albania: "ألبانيا", "bosnia-and-herzegovina": "البوسنة",
    montenegro: "الجبل الأسود", israel: "إسرائيل", "new-zealand": "نيوزيلندا",
    "united-kingdom": "بريطانيا", uk: "بريطانيا", "northern-ireland": "إيرلندا الشمالية",
  };

  function readAuth() {
    try { return JSON.parse(localStorage.getItem("ahdaf-auth") || "null"); } catch { return null; }
  }
  function uid() {
    try { if (state?.auth?.id) return state.auth.id; } catch {}
    return readAuth()?.id || "guest";
  }
  function storeKey(name) { return name + ":" + uid(); }
  function defaultLeagues() {
    return [
      "morocco/botola-pro/200",
      "england/premier-league/65",
      "spain/laliga/75",
      "champions-league/qualification/60",
      "club-friendlies/club-friendlies-2026/310",
    ];
  }
  function readFavs() {
    try {
      const scoped = JSON.parse(localStorage.getItem(storeKey("ahdaf-fav-l")) || "null");
      if (Array.isArray(scoped) && scoped.length) return scoped;
      const raw = JSON.parse(localStorage.getItem("ahdaf-fav-l") || "null");
      if (Array.isArray(raw) && raw.length) return raw;
    } catch {}
    return defaultLeagues();
  }
  function readTeams() {
    try {
      const scoped = JSON.parse(localStorage.getItem(storeKey("ahdaf-fav-t")) || "null");
      if (Array.isArray(scoped)) return scoped;
      const raw = JSON.parse(localStorage.getItem("ahdaf-fav-t") || "[]");
      return Array.isArray(raw) ? raw : [];
    } catch { return []; }
  }
  function vaultAll() {
    try { return JSON.parse(localStorage.getItem("ahdaf-vault") || "{}"); } catch { return {}; }
  }
  function vaultIds(auth) {
    const ids = [];
    const mail = String(auth?.email || "").trim().toLowerCase();
    if (mail) ids.push("m:" + mail);
    if (auth?.id && auth.id !== "guest" && auth.id !== "pending") ids.push("i:" + auth.id);
    return ids;
  }
  function readVault(auth) {
    const all = vaultAll();
    for (const id of vaultIds(auth)) {
      if (all[id] && typeof all[id] === "object") return all[id];
    }
    return null;
  }
  function writeVault(auth) {
    if (!auth || auth.mode === "guest") return;
    const ids = vaultIds(auth);
    if (!ids.length) return;
    const all = vaultAll();
    const prev = readVault(auth) || {};
    const rec = {
      ...prev,
      id: auth.id || prev.id,
      email: auth.email || prev.email || "",
      handle: auth.handle || prev.handle || "",
      name: auth.name || prev.name || "",
      badge: auth.badge || prev.badge || "teal",
      mode: auth.mode || prev.mode,
      seal: auth.seal || prev.seal || "",
      role: auth.role || prev.role || "",
      verified: !!(auth.verified || prev.verified || (auth.handle && window.AhdafSecure?.isGranted?.(auth.handle))),
      picture: auth.picture == null ? (prev.picture || "") : auth.picture,
      favLeagues: Array.isArray(state.favLeagues) && state.favLeagues.length ? state.favLeagues : prev.favLeagues,
      favTeams: Array.isArray(state.favTeams) ? state.favTeams : prev.favTeams,
      theme: state.theme,
      lang: state.lang,
      dhikr: state.dhikr,
      savedAt: Date.now(),
    };
    for (const id of ids) all[id] = rec;
    try { localStorage.setItem("ahdaf-vault", JSON.stringify(all)); } catch {}
  }
  function listVaultAccounts() {
    const all = vaultAll();
    const seen = new Set();
    const out = [];
    for (const rec of Object.values(all)) {
      if (!rec || !rec.id || rec.mode === "guest") continue;
      if (seen.has(rec.id)) continue;
      seen.add(rec.id);
      out.push(rec);
    }
    return out.sort((a, b) => (b.savedAt || 0) - (a.savedAt || 0));
  }
  function findLocalUser(handle) {
    const h = String(handle || "").trim().toLowerCase();
    if (!h) return null;
    const grant = window.AhdafSecure?.grantOf?.(h);
    for (const rec of listVaultAccounts()) {
      if (String(rec.handle || "").toLowerCase() === h) {
        return {
          handle: rec.handle || h,
          name: rec.name || grant?.name || "",
          email: rec.email || grant?.email || "",
          id: rec.id,
          granted: !!(grant && grant.on) || !!rec.verified,
        };
      }
    }
    if (grant) return { handle: h, name: grant.name || "", email: grant.email || "", granted: !!grant.on };
    return { handle: h, name: "", email: "", granted: false, missing: true };
  }
  function stampUserVerified(handle, on, extra) {
    const h = String(handle || "").trim().toLowerCase();
    if (!h) return;
    window.AhdafSecure?.setGrant?.(h, on ? { on: true, name: extra?.name || "", email: extra?.email || "" } : { on: false });
    const all = vaultAll();
    let changed = false;
    for (const [k, rec] of Object.entries(all)) {
      if (!rec || String(rec.handle || "").toLowerCase() !== h) continue;
      all[k] = { ...rec, verified: !!on, name: extra?.name || rec.name || "", email: extra?.email || rec.email || "" };
      changed = true;
    }
    if (changed) {
      try { localStorage.setItem("ahdaf-vault", JSON.stringify(all)); } catch {}
    }
    if (state.auth && String(state.auth.handle || "").toLowerCase() === h) {
      state.auth = { ...state.auth, verified: !!on };
      try { localStorage.setItem("ahdaf-auth", JSON.stringify(state.auth)); } catch {}
    }
  }
  function applyVault(auth) {
    const rec = readVault(auth);
    if (!rec) return auth;
    if (Array.isArray(rec.favLeagues) && rec.favLeagues.length) state.favLeagues = rec.favLeagues;
    if (Array.isArray(rec.favTeams)) state.favTeams = rec.favTeams;
    if (rec.theme) state.theme = rec.theme;
    if (rec.lang) state.lang = rec.lang;
    if (typeof rec.dhikr === "boolean") state.dhikr = rec.dhikr;
    return {
      ...auth,
      handle: auth.handle || rec.handle || "",
      name: auth.name || rec.name || "",
      badge: auth.badge || rec.badge || "teal",
      seal: auth.seal || rec.seal || "",
      role: auth.role || rec.role || "",
      verified: !!(rec.verified || window.AhdafSecure?.isGranted?.(auth.handle || rec.handle)),
      picture: pickPicture(auth.picture, rec.picture),
    };
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
    auth: readAuth(),
    favLeagues: readFavs(),
    favTeams: readTeams(),
    dhikr: localStorage.getItem("ahdaf-dhikr") !== "0",
    cache: {},
    liveTimer: null,
    cloudToken: localStorage.getItem("ahdaf-gtoken") || "",
    owner: false,
    supportOpen: false,
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
    renderUserLine();
  }

  function pickPicture(authPic, recPic) {
    if (authPic === "") return "";
    if (typeof authPic === "string" && authPic.startsWith("data:")) return authPic;
    if (typeof recPic === "string" && recPic.startsWith("data:")) return recPic;
    return authPic || recPic || "";
  }
  function accountFromRec(rec) {
    return {
      id: rec.id,
      email: rec.email || "",
      handle: rec.handle || "",
      name: rec.name || "",
      badge: rec.badge || "teal",
      mode: rec.mode || "google",
      seal: rec.seal || "",
      role: rec.role || "",
      picture: rec.picture || "",
      verified: !!rec.verified,
    };
  }
  function renderUserLine() {
    const line = $("#userLine");
    const nameEl = $("#userLineName");
    const badgeEl = $("#userLineBadge");
    const avaEl = $("#userLineAva");
    const name = state.auth?.name;
    const show = !!(name && state.auth?.mode !== "guest");
    if (line) line.classList.toggle("hidden", !show);
    if (nameEl) nameEl.textContent = show ? name : "";
    if (avaEl) avaEl.innerHTML = show ? avatarHTML(state.auth, "sm") : "";
    if (badgeEl) badgeEl.innerHTML = show && window.AhdafSecure?.isVerified?.(state.auth) ? verifiedBadge(16) : "";
  }

  const BADGE_COLORS = [
    { id: "teal", hex: "#1ee0b0" },
    { id: "green", hex: "#30d158" },
    { id: "yellow", hex: "#ffd60a" },
    { id: "orange", hex: "#ff9f0a" },
    { id: "red", hex: "#ff453a" },
    { id: "blue", hex: "#0a84ff" },
    { id: "purple", hex: "#bf5af2" },
    { id: "pink", hex: "#ff375f" },
    { id: "white", hex: "#f2f2f7" },
  ];
  function badgeHex(auth) {
    const id = String(auth?.badge || "teal");
    return (BADGE_COLORS.find((c) => c.id === id) || BADGE_COLORS[0]).hex;
  }
  function isOwner() {
    return !!window.AhdafSecure?.isAdmin?.(state.auth);
  }
  function avatarHTML(person, cls) {
    const src = person?.picture || "";
    const letter = esc(String(person?.name || person?.handle || "؟").slice(0, 1));
    if (src) {
      return `<span class="acc-ava ${cls || ""} has-img"><img src="${esc(src)}" alt=""></span>`;
    }
    return `<span class="acc-ava ${cls || ""}">${letter}</span>`;
  }
  function compressPhoto(file) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onerror = () => reject(new Error("read"));
      reader.onload = () => {
        const img = new Image();
        img.onload = () => {
          const size = 256;
          const canvas = document.createElement("canvas");
          canvas.width = size;
          canvas.height = size;
          const ctx = canvas.getContext("2d");
          const side = Math.min(img.width, img.height);
          const sx = (img.width - side) / 2;
          const sy = (img.height - side) / 2;
          ctx.drawImage(img, sx, sy, side, side, 0, 0, size, size);
          resolve(canvas.toDataURL("image/jpeg", 0.82));
        };
        img.onerror = () => reject(new Error("img"));
        img.src = reader.result;
      };
      reader.readAsDataURL(file);
    });
  }

  function saveFav() {
    localStorage.setItem(storeKey("ahdaf-fav-l"), JSON.stringify(state.favLeagues));
    writeVault(state.auth);
    cloudPushSoon();
  }
  function isFav(key) {
    return state.favLeagues.includes(key);
  }
  function isFriendly(s) {
    const blob = `${s.Ccd || s.ccd || ""} ${s.Cnm || s.country || ""} ${s.Snm || s.stage || ""} ${s.Scd || s.scd || ""} ${s.CompN || s.name || ""}`.toLowerCase();
    return blob.includes("friend") || blob.includes("ودي") || (s.Ccd || s.ccd) === "club-friendlies";
  }
  function isFavTeam(id) {
    if (id == null || id === "") return false;
    return state.favTeams.some((x) => String(x.id) === String(id));
  }
  function evHasFavTeam(ev) {
    return isFavTeam(teamOf(ev.T1).id) || isFavTeam(teamOf(ev.T2).id);
  }
  function toggleTeam(id, name, img) {
    if (id == null || id === "") return;
    const sid = String(id);
    if (isFavTeam(sid)) state.favTeams = state.favTeams.filter((x) => String(x.id) !== sid);
    else state.favTeams.unshift({ id: sid, name: name || "", img: img || "" });
    localStorage.setItem(storeKey("ahdaf-fav-t"), JSON.stringify(state.favTeams));
    writeVault(state.auth);
    cloudPushSoon();
  }
  function followedStages(stages) {
    return (stages || []).filter((s) =>
      isFav(leagueKey(s)) || isFriendly(s) || (s.Events || []).some(evHasFavTeam)
    );
  }
  function toggleFav(key) {
    if (isFav(key)) state.favLeagues = state.favLeagues.filter((x) => x !== key);
    else state.favLeagues.unshift(key);
    saveFav();
  }
  function leagueKey(s) {
    return `${s.Ccd || s.ccd || ""}/${s.Scd || s.scd || ""}/${s.CompId || s.cid || s.Sid || ""}`;
  }

  function verifiedBadge(size = 18, color) {
    const fill = color || (isOwner() ? badgeHex(state.auth) : "#1ee0b0");
    const petals = [];
    for (let i = 0; i < 12; i++) {
      const a = ((i * 30 - 90) * Math.PI) / 180;
      petals.push(`<circle cx="${(12 + Math.cos(a) * 7.38).toFixed(2)}" cy="${(12 + Math.sin(a) * 7.38).toFixed(2)}" r="2.2"/>`);
    }
    return `<span class="verified" title="Verified" aria-label="موثّق">
      <svg viewBox="0 0 24 24" width="${size}" height="${size}" aria-hidden="true">
        <g fill="${fill}">
          <circle cx="12" cy="12" r="7.5"/>
          ${petals.join("")}
        </g>
        <path d="M8.1 12.15l2.55 2.6 5.25-5.4" fill="none" stroke="#fff" stroke-width="1.95" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    </span>`;
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

  function collectMeetings(id1, id2) {
    if (id1 == null || id2 == null || id1 === "" || id2 === "") return [];
    const a = String(id1), b = String(id2);
    const seen = new Set();
    const out = [];
    const bags = [...(state.stages || []), ...(state.live || [])];
    for (const rec of Object.values(state.cache || {})) {
      if (rec?.v?.Stages) bags.push(...rec.v.Stages);
    }
    for (const s of bags) {
      for (const ev of s.Events || []) {
        const x = String(teamOf(ev.T1).id || "");
        const y = String(teamOf(ev.T2).id || "");
        if (!x || !y || seen.has(ev.Eid)) continue;
        if (!((x === a && y === b) || (x === b && y === a))) continue;
        seen.add(ev.Eid);
        out.push({ ev, s });
      }
    }
    out.sort((p, q) => String(q.ev.Esd || "").localeCompare(String(p.ev.Esd || "")));
    return out.slice(0, 8);
  }
  function pingGoal(stages) {
    const prev = pingGoal.map || {};
    const next = {};
    for (const s of stages || []) {
      for (const ev of s.Events || []) {
        if (!evHasFavTeam(ev)) continue;
        const sc = `${ev.Tr1 ?? ""}-${ev.Tr2 ?? ""}`;
        next[ev.Eid] = sc;
        if (prev[ev.Eid] && prev[ev.Eid] !== sc && statusOf(ev).kind === "live") {
          const t1 = teamOf(ev.T1), t2 = teamOf(ev.T2);
          const msg = `${t("goalAlert")} · ${t1.name} ${ev.Tr1}–${ev.Tr2} ${t2.name}`;
          flash(msg);
          try {
            if (window.Notification) {
              if (Notification.permission === "granted") new Notification("أهداف", { body: msg, silent: false });
              else if (Notification.permission !== "denied") Notification.requestPermission();
            }
          } catch {}
        }
      }
    }
    pingGoal.map = next;
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
    const rawCcd = String(ccd || "").toLowerCase().trim();
    const rawName = String(countryName || "").toLowerCase().trim();
    let code = FLAG[rawCcd] || FLAG_NAME[rawCcd] || FLAG_NAME[rawName] || "";
    if (!code && rawName) {
      const slug = rawName.replace(/[^a-z0-9\u0600-\u06ff]+/g, "-").replace(/^-|-$/g, "");
      code = FLAG[slug] || FLAG_NAME[slug] || "";
    }
    if (!code && rawCcd.includes("-")) {
      const last = rawCcd.split("-").pop();
      if (last && /^[a-z]{2}$/.test(last)) code = last;
    }
    if (!code && /^[a-z]{2}$/.test(rawCcd)) code = rawCcd;
    if (!code && /^[a-z]{3}$/.test(rawCcd)) {
      const iso3 = { mar:"ma", egy:"eg", sau:"sa", uae:"ae", alg:"dz", tun:"tn",
        irn:"ir", irq:"iq", jor:"jo", lib:"lb", pal:"ps", syr:"sy", yem:"ye",
        sud:"sd", lby:"ly", sen:"sn", gha:"gh", nga:"ng", cmr:"cm", civ:"ci",
        mli:"ml", bfa:"bf", gui:"gn", gnb:"gw", gam:"gm", tog:"tg", ben:"bj",
        nig:"ne", cha:"td", mtn:"mr", sle:"sl", lbr:"lr", gab:"ga", cgo:"cg",
        cod:"cd", ang:"ao", moz:"mz", zam:"zm", zim:"zw", mwi:"mw", rwa:"rw",
        uga:"ug", ken:"ke", tan:"tz", eth:"et", som:"so", dji:"dj", mad:"mg",
        com:"km", mri:"mu", cpv:"cv", bot:"bw", nam:"na", rsa:"za",
        eng:"gb-eng", sco:"gb-sct", wal:"gb-wls", nir:"gb-nir", irl:"ie",
        esp:"es", ita:"it", ger:"de", fra:"fr", por:"pt", ned:"nl", bel:"be",
        bra:"br", arg:"ar", mex:"mx", usa:"us", can:"ca", uru:"uy", chi:"cl",
        col:"co", per:"pe", ecu:"ec", par:"py", bol:"bo", ven:"ve",
        jpn:"jp", kor:"kr", chn:"cn", aus:"au", ind:"in", idn:"id", tha:"th",
        tur:"tr", gre:"gr", pol:"pl", ukr:"ua", rus:"ru", cro:"hr", srb:"rs",
        rou:"ro", cze:"cz", svk:"sk", svn:"si", hun:"hu", aut:"at", sui:"ch",
        den:"dk", swe:"se", nor:"no", fin:"fi", isl:"is" };
      code = iso3[rawCcd] || "";
    }
    if (!code) return `<span class="flag flag-gap" aria-hidden="true"></span>`;
    const safe = String(code).replace(/[^a-z0-9-]/gi, "");
    const src = isNative()
      ? `https://flagcdn.com/w40/${safe}.png`
      : `/flag?c=${encodeURIComponent(safe)}`;
    return `<img class="flag" alt="" src="${src}" onerror="this.classList.add('off')">`;
  }

  function prettyCcd(s) {
    return String(s || "").replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());
  }
  function countryLabel(ccd, cnm) {
    const key = String(ccd || "").toLowerCase().trim();
    const fromList = (state.countries || []).find((c) => String(c.ccd || "").toLowerCase() === key);
    if (state.lang === "ar") {
      return COUNTRY_AR[key] || fromList?.nameAr || fromList?.name || cnm || "";
    }
    return fromList?.name || cnm || prettyCcd(key);
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
    const fav1 = isFavTeam(t1.id);
    const fav2 = isFavTeam(t2.id);
    return `<article class="match ${st.kind === "live" ? "is-live" : ""}" data-eid="${esc(ev.Eid)}" data-sid="${esc(stage.Sid || "")}" data-ccd="${esc(stage.Ccd || "")}" data-scd="${esc(stage.Scd || "")}" data-cid="${esc(stage.CompId || stage.Sid || "")}">
      <div class="mtime ${st.kind}">${st.kind === "live" ? `<i class="lp"></i>` : ""}${esc(when)}</div>
      <div class="mside home ${w1} ${fav1 ? "fav" : ""}"><span class="nm">${esc(t1.name)}</span>${crest(t1)}</div>
      <div class="mscore" dir="ltr">${showScore ? `${esc(s1)}<i>-</i>${esc(s2)}` : "–"}</div>
      <div class="mside away ${w2} ${fav2 ? "fav" : ""}">${crest(t2)}<span class="nm">${esc(t2.name)}</span></div>
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
    list.forEach((s) => {
      s.Events.sort((a, b) => Number(evHasFavTeam(b)) - Number(evHasFavTeam(a)));
    });
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
        const nation = isFriendly(s) ? (state.lang === "ar" ? "ودية" : "International") : countryLabel(s.Ccd, s.Cnm);
        return `<section class="league">
          <div class="league-h">
            <button class="league-open flag-only" data-ccd="${esc(s.Ccd)}" data-scd="${esc(s.Scd)}" data-cid="${esc(s.CompId || s.Sid)}" data-name="${esc(name)}">
              ${flag(s.Ccd, s.Cnm)}
            </button>
            <button class="meta league-open" data-ccd="${esc(s.Ccd)}" data-scd="${esc(s.Scd)}" data-cid="${esc(s.CompId || s.Sid)}" data-name="${esc(name)}">
              <b>${esc(name)}</b>
              ${nation ? `<span>${esc(nation)}</span>` : ""}
            </button>
            <button class="star ${isFav(key) ? "on" : ""}" data-key="${esc(key)}" aria-label="fav">★</button>
          </div>
          ${s.Events.map((ev) => renderMatch(ev, s, { showDay: false })).join("")}
        </section>`;
      })
      .join("");
    let extra = "";
    if (opts.followedOnly && state.date && state.tab === "matches") {
      extra += `<div class="day-banner sticky">${esc(dayHeading(state.date))}</div>`;
    }
    if (opts.followedOnly && state.tab === "matches" && state.favTeams.length) {
      const mine = [];
      const seen = new Set();
      for (const s of list) {
        for (const ev of s.Events) {
          if (!evHasFavTeam(ev) || seen.has(ev.Eid)) continue;
          seen.add(ev.Eid);
          mine.push({ ev, s });
        }
      }
      if (mine.length) {
        extra += `<section class="league">
          <div class="league-h"><div class="meta"><b>${t("myTeams")}</b><span>${mine.length}</span></div></div>
          ${mine.map(({ ev, s }) => renderMatch(ev, s)).join("")}
        </section>`;
      }
    }
    return extra + html;
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
      pingGoal(state.live);
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
            ${flag(f.ccd)}<span style="flex:1;text-align:start;font-weight:550">${esc(state.lang === "ar" ? f.nameAr : f.name)}</span>
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
      <div class="section-t">${t("officialWatch")}</div>
      <div class="official-mini">
        <a href="https://www.tod.tv" target="_blank" rel="noopener">TOD</a>
        <a href="https://www.beinsports.com" target="_blank" rel="noopener">beIN</a>
        <a href="https://www.snrt.ma" target="_blank" rel="noopener">SNRT</a>
      </div>
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
        : (() => {
            const meets = collectMeetings(t1.id, t2.id);
            const h2h = meets.length
              ? meets.map(({ ev }) => {
                  const a = teamOf(ev.T1), b = teamOf(ev.T2);
                  return `<div class="h2h-row"><span>${esc(a.name)} ${esc(ev.Tr1 ?? "–")}–${esc(ev.Tr2 ?? "–")} ${esc(b.name)}</span><span>${esc(formatKick(ev.Esd))}</span></div>`;
                }).join("")
              : `<p class="verify-lead">${t("noEvents")}</p>`;
            return `<div class="event-row"><span style="flex:1">${t("venue")}</span><b>${esc([venue, city].filter(Boolean).join(" · ") || "—")}</b></div>
           <div class="event-row"><span style="flex:1">${t("referee")}</span><b>${esc(ref || "—")}</b></div>
           <div class="event-row"><span style="flex:1">${t("kickoff")}</span><b>${esc(formatKick(sb.Esd || info.Esd))}</b></div>
           <div class="section-t">${t("h2h")}</div>${h2h}`;
          })();

    const hideHero = tab === "watch";
    $("#view").innerHTML = `
      ${hideHero ? "" : `<div class="sheet-card scoreboard">
        <div class="comp">${esc(comp)}${sb.Stg?.Cnm ? " · " + esc(sb.Stg.Cnm) : ""}</div>
        <div class="sb-row">
          <button class="sb-team team-follow ${isFavTeam(t1.id) ? "on" : ""}" data-tid="${esc(t1.id || "")}" data-tname="${esc(t1.name)}" data-timg="${esc(t1.img || "")}">
            ${crest(t1, true)}<div class="nm">${esc(t1.name)}</div>
            <span class="follow-hint">${isFavTeam(t1.id) ? "★ " + t("followingTeam") : "☆ " + t("followTeam")}</span>
          </button>
          <div class="sb-score" dir="ltr">${show ? `${esc(s1)} – ${esc(s2)}` : formatKick(sb.Esd)}</div>
          <button class="sb-team team-follow ${isFavTeam(t2.id) ? "on" : ""}" data-tid="${esc(t2.id || "")}" data-tname="${esc(t2.name)}" data-timg="${esc(t2.img || "")}">
            ${crest(t2, true)}<div class="nm">${esc(t2.name)}</div>
            <span class="follow-hint">${isFavTeam(t2.id) ? "★ " + t("followingTeam") : "☆ " + t("followTeam")}</span>
          </button>
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
            ${flag(c.ccd, c.country)}
            <span style="flex:1;text-align:start;font-weight:550">${esc(c.stage || c.name)}</span>
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

  function renderClubRail() {
    const seen = new Set(state.favTeams.map((x) => String(x.id)));
    const suggested = [];
    for (const s of state.stages || []) {
      for (const ev of s.Events || []) {
        for (const tm of [teamOf(ev.T1), teamOf(ev.T2)]) {
          if (!tm.id || seen.has(String(tm.id))) continue;
          seen.add(String(tm.id));
          suggested.push(tm);
        }
      }
    }
    const mine = state.favTeams.slice(0, 14);
    const extra = suggested.slice(0, 10);
    if (!mine.length && !extra.length) return "";
    const cell = (c, on) => `<button type="button" class="club-chip team-follow ${on ? "on" : ""}" data-tid="${esc(c.id)}" data-tname="${esc(c.name)}" data-timg="${esc(c.img || "")}">
      ${crest(c)}<span>${esc(c.name)}</span>
    </button>`;
    return `<section class="club-dock">
      <div class="club-kicker">${t("clubs")}</div>
      <div class="club-rail">
        ${mine.map((c) => cell(c, true)).join("")}
        ${extra.map((c) => cell(c, false)).join("")}
      </div>
    </section>`;
  }

  function renderSettings() {
    setTitle(t("more"), t("app"));
    const accs = listVaultAccounts();
    $("#view").innerHTML = `
      <section class="studio-hero glass">
        <div class="studio-who">
          <button type="button" class="ava-btn" id="pickPhotoBtn" aria-label="${esc(state.auth?.picture ? t("changePhoto") : t("addPhoto"))}">${avatarHTML(state.auth, "lg")}${state.auth && state.auth.mode !== "guest" ? `<i class="ava-cam" aria-hidden="true"><svg viewBox="0 0 24 24" width="11" height="11"><path fill="currentColor" d="M9.2 4.4h1.3l.9 1.4h1.2l.9-1.4h1.3A2 2 0 0 1 16.8 6.4v10.3a2 2 0 0 1-2 2H9.2a2 2 0 0 1-2-2V6.4a2 2 0 0 1 2-2zm2.8 11.2a3.3 3.3 0 1 0 0-6.6 3.3 3.3 0 0 0 0 6.6z"/></svg></i>` : ""}</button>
          <div>
            <div class="credit-name"><b>${esc(state.auth?.name || t("guest"))}</b>${state.auth && state.auth.mode !== "guest" && window.AhdafSecure?.isVerified?.(state.auth) ? verifiedBadge(18) : ""}</div>
            <small>${state.auth?.handle ? "@" + esc(state.auth.handle) : t("guest")}${isOwner() ? " · " + t("adminMark") : ""}</small>
            ${state.auth && state.auth.mode !== "guest" ? `<button type="button" class="photo-link" id="pickPhotoTxt">${state.auth.picture ? t("changePhoto") : t("addPhoto")}</button>${state.auth.picture ? ` · <button type="button" class="photo-link dim" id="removePhotoBtn">${t("removePhoto")}</button>` : ""}` : ""}
          </div>
        </div>
        ${state.auth ? `<button class="ghost-btn" id="signOutBtn">${t("signOut")}</button>` : `<button class="chip on auth-google mini" id="authGoogle"><span class="g-logo" aria-hidden="true"><svg viewBox="0 0 24 24" width="16" height="16"><path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z"/><path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/><path fill="#FBBC05" d="M5.84 14.09A6.97 6.97 0 0 1 5.48 12c0-.72.12-1.43.36-2.09V7.07H2.18A10.96 10.96 0 0 0 1 12c0 1.77.42 3.45 1.18 4.93l3.66-2.84z"/><path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/></svg></span><span>${t("googleBtn")}</span></button>`}
      </section>
      ${accs.length ? `<section class="sheet-card glass switch-dock">
        <div class="club-kicker">${t("accounts")}</div>
        <div class="switch-rail">
          ${accs.map((a) => `<button type="button" class="switch-card ${a.id === state.auth?.id ? "on" : ""}" data-switch="${esc(a.id)}">
            ${avatarHTML(a)}
            <b>${esc(a.name || a.handle || t("account"))}</b>
            <small>${a.id === state.auth?.id ? t("currentAcc") : (a.handle ? "@" + esc(a.handle) : t("switchAcc"))}</small>
          </button>`).join("")}
          <button type="button" class="switch-card add" id="addAccBtn"><span class="acc-ava">+</span><b>${t("addAcc")}</b></button>
        </div>
      </section>` : ""}
      <div class="sheet-card glass about-card">
        <div class="credit">
          <div class="credit-name">
            <b>Youssef Mansouri</b>
            ${verifiedBadge(20, "#1ee0b0")}
          </div>
        <div class="about">
          <b>${t("about")}</b>
          <p>${t("aboutBody")}</p>
          <ul>
            <li>${t("aboutFeat1")}</li>
            <li>${t("aboutFeat2")}</li>
            <li>${t("aboutFeat3")}</li>
          </ul>
        </div>
      </div>
      <div class="sheet-card glass">
        ${state.auth && state.auth.mode !== "guest" ? `<div class="settings-row">
          <div><b>${t("editName")}</b><small>${state.auth.handle ? "@" + esc(state.auth.handle) : ""}</small></div>
        </div>
        <div class="verify-field" style="padding:0 2px 12px">
          <input id="editNameInput" type="text" maxlength="24" value="${esc(state.auth.name || "")}" />
          <button class="verify-go" id="saveNameBtn" style="margin-top:8px">${t("saveName")}</button>
        </div>` : ""}
        ${isOwner() ? `<div class="settings-row">
          <div><b>${t("editHandle")}</b><small>${t("adminHandleHint")}</small></div>
        </div>
        <div class="verify-field" style="padding:0 2px 12px">
          <input id="editHandleInput" type="text" maxlength="20" autocomplete="off" autocapitalize="off" spellcheck="false" value="${esc(state.auth.handle || "")}" />
          <p class="field-err hidden" id="editHandleErr"></p>
          <button class="verify-go" id="saveHandleBtn" style="margin-top:8px">${t("saveHandle")}</button>
        </div>` : ""}
        ${!state.auth || state.auth.mode === "guest" ? `<div class="settings-row">
          <div>
            <b>${t("makeUser")}</b>
            <small>${t("userPlaceholder")}</small>
          </div>
        </div>
        <div class="verify-field" style="padding:0 2px 12px">
          <input id="makeUserInput" type="text" maxlength="24" placeholder="${esc(t("userPlaceholder"))}" />
          <button class="verify-go" id="makeUserBtn" style="margin-top:8px">${t("createUser")}</button>
        </div>` : ""}
        <div class="settings-row">
          <div><b>${t("dark")}</b></div>
          <button class="toggle ${state.theme === "dark" ? "on" : ""}" id="themeToggle"><i></i></button>
        </div>
        <div class="settings-row">
          <div><b>${state.lang === "ar" ? "اللغة" : "Language"}</b></div>
          <button class="chip on" id="langToggle">${t("lang")}</button>
        </div>
        <div class="settings-row">
          <div>
            <b>${t("dhikr")}</b>
            <small>${t("dhikrHint")}</small>
          </div>
          <button class="toggle ${state.dhikr ? "on" : ""}" id="dhikrToggle"><i></i></button>
        </div>
      </div>
      <div class="sheet-card glass verify-card">
        <div class="about">
          <b>${t("verifyTitle")}</b>
          ${isOwner()
            ? `<div class="verify-on" style="color:${badgeHex(state.auth)}">${verifiedBadge(18)}<span>${t("adminOn")}</span></div>
          <div class="settings-row" style="border-top:0;padding-top:16px">
            <div><b>${t("badgeColor")}</b></div>
          </div>
          <div class="badge-picks">
            ${BADGE_COLORS.map((c) => `<button type="button" class="badge-dot ${(state.auth.badge || "teal") === c.id ? "on" : ""}" data-badge="${c.id}" style="--c:${c.hex}" aria-label="${c.id}"></button>`).join("")}
          </div>
          <div class="settings-row" style="border-top:0;padding-top:16px"><div><b>${t("grantTitle")}</b><small>${t("grantLead")}</small></div></div>
          <div class="verify-field">
            <input id="grantInput" type="text" maxlength="20" autocomplete="off" />
            <button type="button" class="verify-go" id="grantSearch" style="margin-top:8px">${t("grantGo")}</button>
          </div>
          <div id="grantBox"></div>`
            : window.AhdafSecure?.isVerified?.(state.auth)
            ? `<div class="verify-on">${verifiedBadge(18)}<span>${t("verifiedOn")}</span></div>`
            : `<p class="verify-lead">${t("verifyBody")}</p>
          <div class="verify-field">
            <span class="field-lab">${esc(t("verifyCode"))}</span>
            <input id="verifyInput" type="text" maxlength="16" autocomplete="one-time-code" placeholder="XXXX-XXXX-XXXX" />
            <p class="field-err hidden" id="verifyErr"></p>
          </div>
          <div class="verify-actions">
            <button type="button" class="verify-dm" id="verifyDm">${t("verifyDm")}</button>
            <button type="button" class="verify-go" id="verifyGo">${t("verifyGo")}</button>
          </div>`}
        </div>
      </div>
      <div class="sheet-card glass verify-card">
        <div class="about">
          <button type="button" class="settings-row support-toggle" id="supportOpen">
            <div><b>${t("support")}</b><small>${t("supportHint")}</small></div>
          </button>
          ${state.supportOpen ? `<p class="verify-lead">${t("supportLead")}</p>
          <textarea class="support-box" id="supportBox" maxlength="800" placeholder="${esc(t("supportPh"))}"></textarea>
          <div class="verify-actions">
            <span></span>
            <button type="button" class="verify-go" id="supportSend">${t("supportSend")}</button>
          </div>` : ""}
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
        const hint = !state.favTeams.length
          ? `<div class="hint-card"><p>${t("followHint")}</p><button class="cta" data-go-tab="leagues">${t("pickLeagues")}</button></div>`
          : "";
        $("#view").innerHTML = renderClubRail() + hint + (state.stages.length
          ? renderStages(state.stages, { followedOnly: true })
          : empty(t("emptyDay")));
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

  function hideDhikr() {
    $("#dhikrLayer")?.classList.add("hidden");
    clearTimeout(hideDhikr.tid);
  }
  function showDhikrCard() {
    if (!state.dhikr) return;
    const layer = $("#dhikrLayer");
    const phrase = $("#dhikrPhrase");
    const kick = $("#dhikrKicker");
    const btn = $("#dhikrAmeen");
    if (!layer || !phrase) return;
    if (kick) kick.textContent = t("remembrance");
    if (btn) btn.textContent = t("ameen");
    phrase.textContent = DHIKR[Math.floor(Math.random() * DHIKR.length)];
    layer.classList.remove("hidden");
    clearTimeout(hideDhikr.tid);
    hideDhikr.tid = setTimeout(hideDhikr, 5000);
  }
  function startDhikr() {
    setTimeout(showDhikrCard, 900);
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
        a.volume = 0.22;
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
    try { navigator.vibrate?.(8); } catch {}
    unlockAudio();
    try { playClickFile(); } catch { synthClick(); }
  }

  async function persistAuth(auth, opts) {
    if (auth) {
      auth = applyVault(auth);
      if (window.AhdafSecure?.prepareAuth) {
        try { auth = await window.AhdafSecure.prepareAuth(auth, opts); } catch {}
      }
      if (auth.handle && window.AhdafSecure?.isGranted?.(auth.handle)) auth.verified = true;
      if (auth.role === "o" || auth.verified) {
        try {
          localStorage.setItem("ahdaf-vok", "1");
          const id = window.AhdafSecure.identityOf?.(auth);
          if (id) localStorage.setItem("ahdaf-vbind", id);
        } catch {}
      }
    }
    state.auth = auth;
    state.owner = !!(auth && auth.role === "o" && auth.mode === "google");
    if (auth) {
      localStorage.setItem("ahdaf-auth", JSON.stringify(auth));
      if (auth.mode !== "guest") {
        localStorage.setItem(storeKey("ahdaf-fav-l"), JSON.stringify(state.favLeagues));
        localStorage.setItem(storeKey("ahdaf-fav-t"), JSON.stringify(state.favTeams));
        writeVault(auth);
      }
    } else {
      localStorage.removeItem("ahdaf-auth");
      localStorage.removeItem("ahdaf-gtoken");
      state.cloudToken = "";
      state.owner = false;
      /* vault, grants, handles and per-account follows stay forever */
    }
    if (auth) {
      state.favLeagues = readFavs();
      state.favTeams = readTeams();
      const rec = readVault(auth);
      if (rec) {
        if (Array.isArray(rec.favLeagues) && rec.favLeagues.length) state.favLeagues = rec.favLeagues;
        if (Array.isArray(rec.favTeams)) state.favTeams = rec.favTeams;
        localStorage.setItem(storeKey("ahdaf-fav-l"), JSON.stringify(state.favLeagues));
        localStorage.setItem(storeKey("ahdaf-fav-t"), JSON.stringify(state.favTeams));
      }
    }
  }
  function hideAuth() {
    const layer = $("#authLayer");
    if (layer) {
      layer.classList.add("hidden");
      layer.setAttribute("aria-hidden", "true");
    }
    $("#handleLayer")?.classList.add("hidden");
    setGoogleBusy(false);
    enterWithGoogle.busy = false;
  }
  function enterHome() {
    hideAuth();
    try { applyChrome(); } catch {}
    try { renderPage(); } catch (e) { showFatal(e); }
    startDhikr();
  }
  async function enterAsGuest() {
    await persistAuth({ id: "guest", name: t("guest"), mode: "guest" });
    enterHome();
  }
  function slugName(name) {
    return String(name || "")
      .trim()
      .toLowerCase()
      .replace(/\s+/g, "-")
      .replace(/[^0-9A-Za-z\u0600-\u06FF-]+/g, "")
      .slice(0, 24) || "user";
  }
  async function enterAsUser(raw) {
    await persistAuth({ id: "pending", name: String(raw || "").trim(), mode: "user" });
    showHandleSetup();
    return true;
  }
  function setVerifyErr(msg) {
    const input = $("#verifyInput");
    const err = $("#verifyErr");
    if (input) input.classList.toggle("bad", !!msg);
    if (err) {
      err.textContent = msg || "";
      err.classList.toggle("hidden", !msg);
    }
  }
  async function submitVerify() {
    const input = $("#verifyInput");
    const res = await window.AhdafSecure?.submitCode?.(input?.value || "", state.auth);
    if (res?.ok) {
      setVerifyErr("");
      applyChrome();
      if (state.stack[state.stack.length - 1]?.type === "settings" || state.tab === "more") renderSettings();
      return;
    }
    if (res?.needUser) setVerifyErr(t("verifyNeedUser"));
    else if (res?.wait) setVerifyErr(t("verifyWait"));
    else setVerifyErr(t("verifyNo"));
  }
  function snapshot() {
    return {
      favLeagues: state.favLeagues,
      favTeams: state.favTeams,
      theme: state.theme,
      lang: state.lang,
      dhikr: state.dhikr,
      handle: state.auth?.handle || "",
      name: state.auth?.name || "",
      badge: state.auth?.badge || "",
      verified: !!(state.auth && window.AhdafSecure?.isVerified?.(state.auth)),
      picture: state.auth?.picture || "",
    };
  }
  function applyRemote(remote) {
    if (!remote || typeof remote !== "object") return;
    if (Array.isArray(remote.favLeagues) && remote.favLeagues.length) state.favLeagues = remote.favLeagues;
    if (Array.isArray(remote.favTeams)) state.favTeams = remote.favTeams;
    if (remote.theme) state.theme = remote.theme;
    if (remote.lang) state.lang = remote.lang;
    if (typeof remote.dhikr === "boolean") state.dhikr = remote.dhikr;
    if (state.auth && remote.handle) state.auth.handle = state.auth.handle || remote.handle;
    if (state.auth && remote.name) state.auth.name = state.auth.name || remote.name;
    if (state.auth && remote.badge) state.auth.badge = state.auth.badge || remote.badge;
    if (state.auth && remote.picture) state.auth.picture = pickPicture(state.auth.picture, remote.picture);
    if (state.auth && remote.verified) {
      state.auth.verified = true;
      if (state.auth.handle) window.AhdafSecure?.setGrant?.(state.auth.handle, { on: true, name: state.auth.name, email: state.auth.email });
    }
    if (state.auth) writeVault(state.auth);
    saveFav();
    localStorage.setItem(storeKey("ahdaf-fav-t"), JSON.stringify(state.favTeams));
    localStorage.setItem("ahdaf-theme", state.theme);
    localStorage.setItem("ahdaf-lang", state.lang);
    localStorage.setItem("ahdaf-dhikr", state.dhikr ? "1" : "0");
  }
  function cloudPushSoon() {
    clearTimeout(cloudPushSoon.t);
    cloudPushSoon.t = setTimeout(async () => {
      if (!state.cloudToken || !window.AhdafCloud) return;
      try { await window.AhdafCloud.push(state.cloudToken, snapshot()); } catch {}
    }, 700);
  }
  function flash(msg) {
    const toast = $("#toast");
    if (!toast) return;
    toast.innerHTML = `<div class="toast-card"><span class="toast-msg">${esc(msg)}</span></div>`;
    toast.classList.add("on");
    clearTimeout(flash.tid);
    flash.tid = setTimeout(() => toast.classList.remove("on"), 2800);
  }
  function renderAuthAccounts() {
    const box = $("#authAccounts");
    if (!box) return;
    const list = listVaultAccounts().filter((a) => a.handle || a.name);
    if (!list.length) { box.innerHTML = ""; return; }
    box.innerHTML = `<div class="acc-kicker">${t("accounts")}</div>` + list.map((a) => `
      <button type="button" class="acc-resume" data-resume="${esc(a.id)}">
        ${avatarHTML(a)}
        <span class="acc-meta"><b>${esc(a.name || a.handle)}</b><small>${a.handle ? "@" + esc(a.handle) : t("continueAcc")}</small></span>
        <span class="acc-go">${t("continueAcc")}</span>
      </button>`).join("");
  }
  function setAuthCopy() {
    const lead = $("#authLead");
    const note = $("#authNote");
    const guest = $("#authGuest");
    const label = $("#authGoogleLabel");
    const create = $("#authCreate");
    const user = $("#authUser");
    if (lead) lead.textContent = t("authLead");
    if (note) note.textContent = t("authNote");
    if (guest) guest.textContent = t("guestBtn");
    if (label) label.textContent = t("googleBtn");
    if (create) create.textContent = t("createUser");
    if (user) user.placeholder = t("userPlaceholder");
    renderAuthAccounts();
  }
  function setGoogleBusy(on) {
    const btn = $("#authGoogle");
    if (!btn) return;
    btn.classList.toggle("busy", !!on);
    btn.disabled = !!on;
    const label = $("#authGoogleLabel") || btn.querySelector("span:last-child");
    if (label) label.textContent = on ? t("googleWait") : t("googleBtn");
  }
  function showHandleSetup(prefill) {
    hideAuth();
    const layer = $("#handleLayer");
    if (!layer) { enterHome(); return; }
    $("#handleLead") && ($("#handleLead").textContent = isOwner() ? t("handleLeadAdmin") : t("handleLead"));
    $("#handleLab") && ($("#handleLab").textContent = t("handleLab"));
    $("#nameLab") && ($("#nameLab").textContent = t("nameLab"));
    $("#handleSave") && ($("#handleSave").textContent = t("handleSave"));
    if ($("#handleUser")) $("#handleUser").value = "";
    if ($("#handleName")) $("#handleName").value = "";
    const err = $("#handleErr");
    if (err) { err.textContent = ""; err.classList.add("hidden"); }
    layer.classList.remove("hidden");
    setTimeout(() => $("#handleUser")?.focus(), 80);
  }
  async function finishProfile() {
    const parsed = window.AhdafSecure?.validHandle?.($("#handleUser")?.value, { admin: isOwner(), auth: state.auth });
    const name = String($("#handleName")?.value || "").trim().replace(/\s+/g, " ").slice(0, 24);
    const box = $("#handleErr");
    const show = (msg) => { if (box) { box.textContent = msg; box.classList.remove("hidden"); } };
    if (!parsed?.ok) { show(t("handleBad")); return false; }
    if (!name || name.length < 2) { show(t("handleNeed")); return false; }
    const owner = state.auth?.id || ("u:" + parsed.handle);
    if (window.AhdafSecure?.isTaken?.(parsed.handle, owner)) { show(t("handleTaken")); return false; }
    if (!window.AhdafSecure?.claim?.(parsed.handle, owner)) { show(t("handleTaken")); return false; }
    const next = {
      ...(state.auth || {}),
      id: state.auth?.id || ("u:" + parsed.handle),
      handle: parsed.handle,
      name,
      mode: state.auth?.mode || "user",
    };
    await persistAuth(next);
    writeVault(next);
    $("#handleLayer")?.classList.add("hidden");
    window.AhdafSecure?.notifySignup?.(next);
    enterHome();
    return true;
  }
  async function enterWithGoogle(opts) {
    tap();
    if (enterWithGoogle.busy) return;
    enterWithGoogle.busy = true;
    setGoogleBusy(true);
    try {
      if (!window.AhdafCloud?.ready?.()) {
        flash(t("googleFail"));
        return;
      }
      const session = await window.AhdafCloud.signIn(opts || {});
      if (!session?.profile) {
        flash(t("googleFail"));
        return;
      }
      state.cloudToken = session.access || "";
      if (session.access) localStorage.setItem("ahdaf-gtoken", session.access);
      const prev = readAuth();
      const incoming = {
        ...session.profile,
        handle: "",
        name: "",
        badge: "teal",
        picture: session.profile.picture || "",
      };
      const stored = readVault(incoming) || (
        prev && (prev.id === incoming.id || (prev.email && prev.email === incoming.email)) ? prev : null
      );
      const merged = {
        ...incoming,
        handle: stored?.handle || "",
        name: stored?.name || "",
        badge: stored?.badge || "teal",
        seal: stored?.seal || "",
        role: stored?.role || "",
        picture: pickPicture(stored?.picture, incoming.picture),
        verified: !!(stored?.verified),
      };
      await persistAuth(merged, { fresh: true });
      if (session.access && window.AhdafCloud) {
        window.AhdafCloud.pull(session.access).then((remote) => {
          if (remote) { applyRemote(remote); if (state.auth?.handle) renderPage(); }
          else return window.AhdafCloud.push(session.access, snapshot());
        }).catch(() => {});
      }
      if (merged.handle) enterHome();
      else showHandleSetup();
    } catch (e) {
      const code = String(e?.code || e?.message || e || "");
      if (code === "cancel") return;
      flash(code === "blocked" || code === "10" ? t("googleBlocked") : t("googleFail"));
    } finally {
      enterWithGoogle.busy = false;
      setGoogleBusy(false);
    }
  }
  function signOut() {
    writeVault(state.auth);
    window.AhdafCloud?.signOut?.().catch(() => {});
    persistAuth(null);
    state.stack = [];
    state.tab = "matches";
    setAuthCopy();
    $("#authLayer")?.classList.remove("hidden");
    applyChrome();
  }

  function bind() {
    document.addEventListener("touchstart", unlockAudio, { once: true, passive: true });
    document.addEventListener("click", unlockAudio, { once: true });
    $("#authGuest")?.addEventListener("click", () => { tap(); enterAsGuest(); });
    $("#authCreate")?.addEventListener("click", () => { tap(); enterAsUser($("#authUser")?.value); });
    $("#authUser")?.addEventListener("keydown", (e) => {
      if (e.key === "Enter") { e.preventDefault(); tap(); enterAsUser(e.target.value); }
    });
    $("#authGoogle")?.addEventListener("click", enterWithGoogle);
    $("#authAccounts")?.addEventListener("click", (e) => {
      const b = e.target.closest("[data-resume]");
      if (!b?.dataset.resume) return;
      tap();
      const rec = listVaultAccounts().find((a) => a.id === b.dataset.resume);
      if (!rec) return;
      persistAuth(accountFromRec(rec)).then(() => {
        applyChrome();
        if (rec.handle) enterHome();
        else showHandleSetup();
      });
    });
    $("#photoInput")?.addEventListener("change", async (e) => {
      const file = e.target.files && e.target.files[0];
      e.target.value = "";
      if (!file || !state.auth || state.auth.mode === "guest") return;
      try {
        const data = await compressPhoto(file);
        await persistAuth({ ...state.auth, picture: data });
        applyChrome();
        if (state.tab === "more" || state.stack[state.stack.length - 1]?.type === "settings") renderSettings();
        flash(t("savedOk"));
      } catch {
        flash(t("error"));
      }
    });
    $("#handleSave")?.addEventListener("click", () => { tap(); finishProfile(); });
    $("#handleUser")?.addEventListener("keydown", (e) => { if (e.key === "Enter") { e.preventDefault(); $("#handleName")?.focus(); } });
    $("#handleName")?.addEventListener("keydown", (e) => { if (e.key === "Enter") { e.preventDefault(); tap(); finishProfile(); } });
    $("#dhikrAmeen")?.addEventListener("click", (e) => { e.stopPropagation(); tap(); hideDhikr(); });
    $("#dhikrLayer")?.addEventListener("click", (e) => {
      if (e.target.id === "dhikrLayer") hideDhikr();
    });
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
    $("#moreBtn")?.addEventListener("click", () => { tap(); openSettings(); });
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
      if (e.target.closest("#signOutBtn")) {
        tap();
        signOut();
        return;
      }
      if (e.target.closest("#authGoogle")) {
        enterWithGoogle();
        return;
      }
      if (e.target.closest("#makeUserBtn")) {
        enterAsUser($("#makeUserInput")?.value);
        return;
      }
      if (e.target.closest("#supportOpen")) {
        state.supportOpen = !state.supportOpen;
        renderSettings();
        return;
      }
      if (e.target.closest("#addAccBtn")) {
        writeVault(state.auth);
        enterWithGoogle({ picker: true });
        return;
      }
      if (e.target.closest("#pickPhotoBtn") || e.target.closest("#pickPhotoTxt")) {
        if (!state.auth || state.auth.mode === "guest") return;
        $("#photoInput")?.click();
        return;
      }
      if (e.target.closest("#removePhotoBtn")) {
        persistAuth({ ...state.auth, picture: "" }).then(() => {
          applyChrome();
          renderSettings();
          flash(t("savedOk"));
        });
        return;
      }
      const sw = e.target.closest("[data-switch]");
      if (sw?.dataset.switch) {
        const rec = listVaultAccounts().find((a) => a.id === sw.dataset.switch);
        if (!rec) return;
        writeVault(state.auth);
        state.cloudToken = "";
        try { localStorage.removeItem("ahdaf-gtoken"); } catch {}
        persistAuth({
          id: rec.id,
          email: rec.email || "",
          handle: rec.handle || "",
          name: rec.name || "",
          badge: rec.badge || "teal",
          mode: rec.mode || "google",
          seal: rec.seal || "",
          role: rec.role || "",
          picture: rec.picture || "",
          verified: !!rec.verified,
        }).then(() => { applyChrome(); renderPage(); flash(t("savedOk")); });
        return;
      }
      if (e.target.closest("#grantSearch")) {
        const raw = $("#grantInput")?.value;
        const parsed = window.AhdafSecure?.validHandle?.(raw, { admin: true });
        const found = findLocalUser(parsed?.handle || raw);
        const box = $("#grantBox");
        if (!box) return;
        if (!found?.handle) { box.innerHTML = `<p class="field-err">${t("grantMiss")}</p>`; return; }
        box.innerHTML = `<div class="grant-card">
          <div>
            <b>${esc(found.name || "—")}</b>
            <div class="grant-meta">${t("nameLab")}: ${esc(found.name || "—")}<br>@${esc(found.handle)}${found.email ? "<br>" + esc(found.email) : ""}${found.missing ? "<br>" + t("grantMiss") : ""}</div>
          </div>
          <button type="button" data-grant="${esc(found.handle)}" data-on="${found.granted ? "0" : "1"}">${found.granted ? t("grantOff") : t("grantOn")}</button>
        </div>`;
        return;
      }
      const gb = e.target.closest("[data-grant]");
      if (gb && isOwner()) {
        const h = gb.dataset.grant;
        const on = gb.dataset.on === "1";
        const found = findLocalUser(h) || { handle: h, name: "", email: "" };
        stampUserVerified(h, on, found);
        if (on) {
          window.AhdafSecure?.codeForHandle?.(h).then((code) => {
            window.AhdafSecure?.notifySupport?.(state.auth, "توثيق يوزر: @" + h + (found.name ? " / " + found.name : "") + (found.email ? " / " + found.email : "") + (code ? " / " + code : ""));
          }).catch(() => {});
        }
        applyChrome();
        flash(on ? t("grantOk") : t("grantNo"));
        const box = $("#grantBox");
        if (box) {
          const next = findLocalUser(h);
          box.innerHTML = `<div class="grant-card">
            <div>
              <b>${esc(next.name || "—")}</b>
              <div class="grant-meta">${t("nameLab")}: ${esc(next.name || "—")}<br>@${esc(next.handle)}${next.email ? "<br>" + esc(next.email) : ""}</div>
            </div>
            <button type="button" data-grant="${esc(next.handle)}" data-on="${next.granted ? "0" : "1"}">${next.granted ? t("grantOff") : t("grantOn")}</button>
          </div>`;
        }
        return;
      }
      if (e.target.closest("#saveNameBtn")) {
        const n = String($("#editNameInput")?.value || "").trim().replace(/\s+/g, " ").slice(0, 24);
        if (n.length < 2) { flash(t("userBad")); return; }
        persistAuth({ ...state.auth, name: n }).then(() => { applyChrome(); renderSettings(); flash(t("savedOk")); });
        return;
      }
      if (e.target.closest("#saveHandleBtn")) {
        if (!isOwner()) return;
        const box = $("#editHandleErr");
        const show = (msg) => { if (box) { box.textContent = msg || ""; box.classList.toggle("hidden", !msg); } };
        const parsed = window.AhdafSecure?.validHandle?.($("#editHandleInput")?.value, { admin: true, auth: state.auth });
        if (!parsed?.ok) { show(t("handleBad")); return; }
        const owner = state.auth?.id || ("u:" + parsed.handle);
        if (window.AhdafSecure?.isTaken?.(parsed.handle, owner)) { show(t("handleTaken")); return; }
        if (!window.AhdafSecure?.claim?.(parsed.handle, owner)) { show(t("handleTaken")); return; }
        persistAuth({ ...state.auth, handle: parsed.handle }).then(() => {
          applyChrome();
          renderSettings();
          flash(t("handleSaved"));
        });
        return;
      }
      const badgeBtn = e.target.closest(".badge-dot");
      if (badgeBtn?.dataset.badge && isOwner()) {
        persistAuth({ ...state.auth, badge: badgeBtn.dataset.badge }).then(() => {
          applyChrome();
          renderSettings();
        });
        return;
      }
      if (e.target.closest("#supportSend")) {
        tap();
        window.AhdafSecure?.notifySupport?.(state.auth, $("#supportBox")?.value).then((r) => {
          if (r?.ok) { if ($("#supportBox")) $("#supportBox").value = ""; flash(t("supportOk")); }
          else flash(t("supportShort"));
        });
        return;
      }
      if (e.target.closest("#verifyGo")) {
        tap();
        submitVerify();
        return;
      }
      if (e.target.closest("#verifyDm")) {
        tap();
        window.AhdafSecure?.openDeveloper?.().catch(() => flash(t("error")));
        return;
      }
      if (e.target.closest("#themeToggle")) {
        state.theme = state.theme === "dark" ? "light" : "dark";
        localStorage.setItem("ahdaf-theme", state.theme);
        writeVault(state.auth);
        applyChrome();
        renderPage();
        return;
      }
      if (e.target.closest("#dhikrToggle")) {
        state.dhikr = !state.dhikr;
        localStorage.setItem("ahdaf-dhikr", state.dhikr ? "1" : "0");
        writeVault(state.auth);
        renderSettings();
        return;
      }
      const tf = e.target.closest(".team-follow");
      if (tf?.dataset.tid) {
        toggleTeam(tf.dataset.tid, tf.dataset.tname, tf.dataset.timg);
        const page = state.stack[state.stack.length - 1];
        if (page?.type === "match" && page.data) renderMatchPage(page);
        else renderPage();
        return;
      }
      if (e.target.closest("#langToggle")) {
        state.lang = state.lang === "ar" ? "en" : "ar";
        localStorage.setItem("ahdaf-lang", state.lang);
        writeVault(state.auth);
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
      if (state.auth) await persistAuth(state.auth);
      applyChrome();
      bind();
      if (!state.auth) {
        setAuthCopy();
        $("#authLayer")?.classList.remove("hidden");
      } else if (state.auth.mode !== "guest" && !state.auth.handle) {
        showHandleSetup();
      }
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
        if (state.auth) startDhikr();
        return;
      }
      renderDates();
      renderChips();
      renderPage();
      if (state.auth) startDhikr();
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
