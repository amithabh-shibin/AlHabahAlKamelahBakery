/* ==========================================================
   Whole Wheat House & Bakery — main.js
   Language switch (AR/EN), menu tabs, mobile nav.
   Edit the MENU array and the TEXT object to change content.
   ========================================================== */
(function () {
  "use strict";

  /* ---------- TEXT ---------- */
  var TEXT = {
    ar: {
      title: "مخبز الحبة الكاملة | Whole Wheat House & Bakery",
      skip: "انتقل إلى المحتوى", brand: "مخبز الحبة الكاملة",
      nav_home: "الرئيسية", nav_products: "منتجاتنا", nav_menu: "المنيو", nav_how: "الخدمة الذاتية", nav_contact: "اتصل بنا",
      tag: "طازج من الفرن اليوم", h1: "نخبز الخير كل يوم", h1sub: "Baking Goodness Every Day",
      lead: "مناقيش ومعجنات وبيتزا وخبز من الحبة الكاملة. زوروا مخبزنا للخدمة الذاتية في مدينة خليفة، أو أرسلوا طلبكم عبر واتساب.",
      cta_wa: "اطلب عبر واتساب", cta_wa2: "اسأل عبر واتساب", cta_menu: "استعرض المنيو", cta_call: "اتصل الآن", cta_map: "الموقع على الخريطة",
      f1a: "مفتوح يومياً", f1b: "8 ص – 11 م", f2a: "مدينة خليفة", f2b: "أبوظبي", f3a: "٩ أنواع من المعجنات يومياً",
      p_h: "خيرٌ يكتمل على مائدتك", p_p: "من الفرن إلى المونة البلدية، كل ما تحتاجه من الحبة الكاملة.",
      c1: "خبز ومخبوزات", c1d: "قمح كامل وشعير وأعشاب وشراك وطابون وصمون عراقي.",
      c2: "مناقيش ومعجنات", c2d: "٩ أنواع من المعجنات: جبنة وسبانخ ولحم وبيتزا والمزيد.",
      c3: "معمول وكعك", c3d: "معمول محشو بالتمر، وكعك بصراوي وكعك مالح.",
      c4: "مونة بلدية", c4d: "حبوب وطحين · بهارات وزعتر · خل ودبس · مكدوس ومخللات",
      m_h: "المنيو", m_p: "الأسعار بالدرهم. اختر القسم لتعرف ما يُخبز الآن.",
      m_note: "التوفر يتغير خلال اليوم. راسلونا للتأكد قبل حضوركم.", m_pdf: "عرض المنيو الكامل (PDF)",
      h_h: "خدمة ذاتية بثلاث خطوات", h_p: "متجرنا في مدينة خليفة مفتوح كل يوم، بدون طوابير وبدون انتظار.",
      s1h: "خذ ما تحتاجه", s1p: "اختر الخبز والمعجنات من الرفوف.",
      s2h: "صوّر طلبك وأرسله", s2p: "صوّر ما أخذته وأرسله لنا عبر واتساب.",
      s3h: "حاسب بنفسك", s3p: "ادفع ثمن ما أخذته وانصرف. نحن على واتساب إن احتجت مساعدة.",
      t_h: "دفء المكان، وبساطة التفاصيل.", t_p: "تصميم مستوحى من روح الضيافة العربية ليمنحكم تجربة مميزة في أجواء مريحة وملهمة.",
      k_h: "نرحّب بتواصلكم", k_p: "للاستفسارات والطلبات، يسعدنا خدمتكم دائماً.",
      k_ph: "اتصال أو واتساب", k_em: "البريد الإلكتروني", k_loc: "الموقع", k_loc_t: "مدينة خليفة، أبوظبي",
      k_hr: "ساعات العمل", k_hr_t: "يومياً من 8 صباحاً إلى 11 مساءً",
      foot2: "مدينة خليفة، أبوظبي", dock_wa: "واتساب", dock_call: "اتصل",
      cur: "درهم", medium: "وسط", large: "كبير", extras: "إضافة جبنة أو بيض: +3 درهم", switch: "EN"
    },
    en: {
      title: "Whole Wheat House & Bakery | Khalifa City, Abu Dhabi",
      skip: "Skip to content", brand: "Whole Wheat House",
      nav_home: "Home", nav_products: "Our products", nav_menu: "Menu", nav_how: "Self-service", nav_contact: "Contact",
      tag: "Fresh from the oven today", h1: "Baking Goodness Every Day", h1sub: "نخبز الخير كل يوم",
      lead: "Manakish, pastries, pizza and bread made from whole grain. Visit our self-service bakery in Khalifa City, or send your order on WhatsApp.",
      cta_wa: "Order on WhatsApp", cta_wa2: "Ask on WhatsApp", cta_menu: "View the menu", cta_call: "Call now", cta_map: "Open in Maps",
      f1a: "Open daily", f1b: "8 AM – 11 PM", f2a: "Khalifa City", f2b: "Abu Dhabi", f3a: "9 kinds of pastries daily",
      p_h: "Goodness that completes your table", p_p: "From the oven to the local pantry, everything you need made from the whole grain.",
      c1: "Bread & bakes", c1d: "Whole wheat, barley, herb, shrak, taboon and Iraqi samoon.",
      c2: "Manakish & pastries", c2d: "9 kinds of pastries: cheese, spinach, meat, pizza and more.",
      c3: "Maamoul & cookies", c3d: "Date-filled maamoul, Basrawi cookies and savory cookies.",
      c4: "Local pantry", c4d: "Grains & flour · Spices & thyme · Vinegar & molasses · Makdous & pickles",
      m_h: "Menu", m_p: "Prices in AED. Pick a category to see what's baking.",
      m_note: "Availability changes through the day. Message us to check before you come.", m_pdf: "View full menu (PDF)",
      h_h: "Self-service in three steps", h_p: "Our Khalifa City store is open every day, with no queue and no waiting.",
      s1h: "Take what you need", s1p: "Pick your bread and pastries from the shelves.",
      s2h: "Photo it and send", s2p: "Take a picture of what you took and send it to us on WhatsApp.",
      s3h: "Pay yourself", s3p: "Pay for what you took and go. We're on WhatsApp if you need help.",
      t_h: "Warm space, simple details.", t_p: "A design inspired by Arab hospitality, made for a distinctive experience in a comfortable, inspiring setting.",
      k_h: "We'd love to hear from you", k_p: "For questions and orders, we're always happy to help.",
      k_ph: "Call or WhatsApp", k_em: "Email", k_loc: "Location", k_loc_t: "Khalifa City, Abu Dhabi",
      k_hr: "Opening hours", k_hr_t: "Every day, 8 AM to 11 PM",
      foot2: "Khalifa City, Abu Dhabi", dock_wa: "WhatsApp", dock_call: "Call",
      cur: "AED", medium: "Medium", large: "Large", extras: "Extra cheese or egg: +3 AED", switch: "ع"
    }
  };

  /* ---------- MENU ----------  [english, arabic, price or [medium, large], (desc en, desc ar)] */
  var MENU = [
    { id: "manakish", en: "Manakish", ar: "المناقيش", extras: true, items: [
      ["Za'atar", "زعتر", 13], ["Halloumi", "جبنة حلوم", 12], ["Nabulsi cheese", "جبنة نابلسية", 15],
      ["Za'atar & cheese", "زعتر وجبنة", 14], ["Za'atar & labneh", "زعتر ولبنة", 13], ["Mixed cheeses", "مكس أجبان", 16],
      ["Turkish & kashkaval", "تيركي وقشقوان", 15], ["Salami & kashkaval", "سلامي وقشقوان", 14],
      ["Meat in dough", "لحمة بعجين", 15], ["Meat in dough & cheese", "لحمة بعجين وجبنة", 17],
      ["Labneh & vegetables", "لبنة وخضار", 13], ["Potato", "بطاطا", 13], ["Muhammara", "محمرة", 13], ["Eggs", "بيض", 13]
    ]},
    { id: "pastries", en: "Pastries", ar: "معجنات", items: [
      ["Yellow cheese", "جبنة صفراء", 3.5], ["White cheese", "جبنة بيضاء", 3.5], ["Spinach", "سبانخ", 3.5],
      ["Potato", "بطاطا", 3.5], ["Cheese & thyme", "جبنة وزعتر", 3.5], ["Triangle cheese", "جبنة مثلثات", 3.5],
      ["Cheese & siniora", "جبنة وسنيورة", 3.5], ["Sausage", "نقانق", 3.5], ["Pizza", "بيتزا", 4],
      ["Cheese & olives", "جبنة وزيتون", 4], ["Meat", "لحمة", 5]
    ]},
    { id: "pizza", en: "Pizza", ar: "البيتزا", sizes: true, extras: true, items: [
      ["Margherita", "مارجريتا", [35, 40]], ["Vegetables", "خضار", [35, 40]], ["Pepperoni", "بيبروني", [40, 45]],
      ["Turkey", "تيركي", [35, 40]], ["Mushroom", "فطر", [35, 40]], ["Chicken fajita", "دجاج فاهيتا", [35, 45]],
      ["Super supreme", "سوبر سوبريم", [35, 45]], ["Hot dog", "هوت دوغ", [35, 40]],
      ["Alfredo", "الفريدو", [40, 45]], ["Mixed cheese", "مكس أجبان", [40, 45]]
    ]},
    { id: "calzone", en: "Calzone", ar: "الكلزوني", items: [
      ["Zinger", "زنجر", 40, "Zinger chicken, turkey, cheddar, mozzarella", "دجاج زنجر، تيركي، شيدر، موزاريلا"],
      ["Chicken with cream", "دجاج بالكريمة", 40, "Chicken, mozzarella, fresh mushrooms, Alfredo sauce", "دجاج، موزاريلا، فطر طازج، صلصة الفريدو"]
    ]},
    { id: "bread", en: "Bread bundles", ar: "ربطات الخبز", items: [
      ["Whole wheat", "قمح حبة كاملة", 7.5], ["Whole barley", "شعير حبة كاملة", 7.5], ["Herb", "أعشاب", 10],
      ["Shrak", "شراك", 10], ["Taboon", "طابون", 10], ["Iraqi samoon", "صمون عراقي", 10]
    ]}
  ];

  /* ---------- helpers ---------- */
  var $ = function (s) { return document.querySelector(s); };
  var lang = "en", tab = "manakish";
  try { var saved = localStorage.getItem("wwb-lang"); if (saved === "en" || saved === "ar") lang = saved; } catch (e) {}
  var fmt = function (n) { return Number.isInteger(n) ? String(n) : n.toFixed(1); };

  function renderMenu() {
    var t = TEXT[lang], tabs = $("#tabs");
    tabs.innerHTML = MENU.map(function (c) {
      return '<button class="tab" role="tab" aria-selected="' + (c.id === tab) + '" data-id="' + c.id + '">' + c[lang] + "</button>";
    }).join("");
    Array.prototype.forEach.call(tabs.querySelectorAll(".tab"), function (b) {
      b.addEventListener("click", function () { tab = b.dataset.id; renderMenu(); });
    });
    var c = MENU.filter(function (x) { return x.id === tab; })[0];
    var h = "";
    if (c.sizes) h += '<div class="sizes"><span>' + t.medium + "</span><span>" + t.large + "</span></div>";
    h += '<div class="menu-grid">' + c.items.map(function (i) {
      var name = lang === "en" ? i[0] : i[1];
      var desc = i[3] ? (lang === "en" ? i[3] : i[4]) : "";
      var price = Array.isArray(i[2]) ? i[2].map(fmt).join(" / ") : fmt(i[2]);
      return '<div class="item"><div><span class="n">' + name + "</span>" + (desc ? "<small>" + desc + "</small>" : "") +
        '</div><span class="dots"></span><span class="p">' + price + "<em>" + t.cur + "</em></span></div>";
    }).join("") + "</div>";
    if (c.extras) h += '<p class="note" style="margin-top:20px">' + t.extras + "</p>";
    $("#menuBody").innerHTML = h;
  }

  function apply() {
    var t = TEXT[lang], r = document.documentElement;
    r.lang = lang; r.dir = lang === "ar" ? "rtl" : "ltr";
    Array.prototype.forEach.call(document.querySelectorAll("[data-i18n]"), function (e) {
      var k = e.getAttribute("data-i18n");
      if (t[k] !== undefined) e.textContent = t[k];
    });
    $("#lang").textContent = t.switch;
    document.title = t.title;
    renderMenu();
    try { localStorage.setItem("wwb-lang", lang); } catch (e) {}
  }

  $("#lang").addEventListener("click", function () { lang = lang === "ar" ? "en" : "ar"; apply(); });

  /* mobile nav */
  var nav = $("#nav"), burger = $("#burger");
  function closeNav() { nav.classList.remove("open"); burger.setAttribute("aria-expanded", "false"); }
  burger.addEventListener("click", function () {
    var open = nav.classList.toggle("open");
    burger.setAttribute("aria-expanded", String(open));
  });
  Array.prototype.forEach.call(nav.querySelectorAll("a"), function (a) { a.addEventListener("click", closeNav); });
  document.addEventListener("keydown", function (e) { if (e.key === "Escape") closeNav(); });

  /* active link on scroll */
  var links = Array.prototype.slice.call(nav.querySelectorAll("a"));
  if ("IntersectionObserver" in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) {
          links.forEach(function (l) { l.classList.toggle("active", l.getAttribute("href") === "#" + en.target.id); });
        }
      });
    }, { rootMargin: "-40% 0px -55% 0px" });
    ["home", "products", "menu", "how", "contact"].forEach(function (id) { var s = document.getElementById(id); if (s) io.observe(s); });
  }

  $("#year").textContent = new Date().getFullYear();
  apply();
})();
