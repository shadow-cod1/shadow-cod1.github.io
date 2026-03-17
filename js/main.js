/* =========================
   روابط الحسابات الشخصية ووسائل التواصل
========================= */
const profileLinks = {
  github: "https://github.com/SHADOW-COD1", // رابط حساب GitHub
  email: "mailto:pcc.betc@gmail.com", // رابط البريد بصيغة mailto لفتح برنامج البريد مباشرة
  website: "https://shadow-cod1.github.io/" // رابط الموقع الشخصي
};

/* =========================
   بيانات المشاريع
   كل مشروع يحتوي على:
   - عنوان بالعربية والإنجليزية
   - وصف بالعربية والإنجليزية
   - صورة
   - التقنيات المستخدمة
   - رابط المعاينة المباشرة
   - رابط الكود
   - هل هو مشروع مميز أم لا
========================= */
const projects = [
  {
    title: { ar: "Loving Homes", en: "Loving Homes" },
    description: {
      ar: "موقع Loving Homes هو موقع ويب حديث، يركز على عرض خدمات فندق الكلاب والباقات والمرافق بطريقة واضحة وسهلة التصفح. ",
      en: "Loving Homes is a modern website that focuses on showcasing the services, packages, and facilities of a dog hotel in a clear and easy-to-navigate manner."
    },
    image: "assets/images/project-1.png", // صورة المشروع
    technologies: ["HTML", "CSS", "JavaScript"], // التقنيات المستخدمة
    liveUrl: "https://shadow-cod1.github.io/loving.homes.github.io/", // رابط العرض المباشر
    codeUrl: "https://github.com/SHADOW-COD1/loving.homes.github.io", // رابط الكود
    featured: true // هل المشروع يظهر في السلايدر كمشروع مميز؟
  },
  {
    title: { ar: "مشروع قادم", en: "Upcoming Project" },
    description: {
      ar: "مكان جاهز لإضافة مشروعك القادم مع وصفه ورابطه وصورته.",
      en: "A ready placeholder for your next project with its description, link, and image."
    },
    image: "assets/images/project-2.svg",
    technologies: ["HTML", "CSS"],
    liveUrl: "#",
    codeUrl: "#",
    featured: true
  },
  {
    title: { ar: "مشروع قادم", en: "Upcoming Project" },
    description: {
      ar: "مكان جاهز لاضافة مشروعك القادم مع وصفه ورابطه وصورته",
      en: "A ready placeholder for your next project with its description, link, and image."
    },
    image: "assets/images/project-3.svg",
    technologies: ["HTML", "CSS", "JavaScript"],
    liveUrl: "#",
    codeUrl: "#",
    featured: false
  }
];

/* =========================
   بيانات المهارات
   كل مهارة تحتوي على:
   - أيقونة
   - اسم بالعربية والإنجليزية
   - وصف بالعربية والإنجليزية
   - مستوى المهارة بالنسبة المئوية
========================= */
const skills = [
  { icon: "🌐", title: { ar: "HTML", en: "HTML" }, text: { ar: "بناء صفحات واضحة ومنظمة دلاليًا.", en: "Building clear and semantic pages." }, level: 92 },
  { icon: "🎨", title: { ar: "CSS", en: "CSS" }, text: { ar: "تصميم واجهات حديثة ومتجاوبة.", en: "Creating modern and responsive interfaces." }, level: 90 },
  { icon: "⚙️", title: { ar: "JavaScript", en: "JavaScript" }, text: { ar: "إضافة التفاعل والمنطق للواجهة.", en: "Adding logic and interactivity to interfaces." }, level: 80 },
  { icon: "📱", title: { ar: "Responsive UI", en: "Responsive UI" }, text: { ar: "تجربة مناسبة للهاتف والكمبيوتر.", en: "A comfortable experience on mobile and desktop." }, level: 88 }
];

/* =========================
   الترجمة الخاصة بالنصوص الثابتة في الموقع
   تحتوي على نسختين:
   - العربية ar
   - الإنجليزية en
========================= */
const translations = {
  ar: {
    brandSubtitle: "واجهة أعمال احترافية",
    nav: { home: "الرئيسية", about: "من أنا", projects: "المشاريع", contact: "التواصل" },
    home: {
      eyebrow: "مطور واجهات ومواقع ويب",
      title: "أصمم مواقع حديثة، مرتبة، وسهلة التصفح مع هوية بصرية واضحة.",
      text: "أستعرض في هذا الموقع مجموعة من أعمالي المختارة مع نبذة مختصرة عن أسلوبي في التصميم والتطوير وطريقة التواصل معي.",
      btnProjects: "استعراض المشاريع",
      btnContact: "التواصل معي",
      stat1: "مشروع منشور",
      stat2: "بنية واضحة",
      stat3: "تصميم متجاوب",
      panelLabel: "نبذة سريعة",
      panelTitle: "واجهة احترافية تعكس أعمالي وخبرتي",
      panelText: "تعرض هذه الواجهة أهم أعمالي بشكل منظم، مع صفحات واضحة ومحتوى يساعد الزائر على التعرف على خبرتي وأسلوب عملي بسرعة.",
      feature1: "عرض منظم للمشاريع والإنجازات",
      feature2: "تنقل واضح بين الصفحات الرئيسية",
      feature3: "تجربة مريحة على الجوال والكمبيوتر",
      sliderEyebrow: "مشروع مميز",
      sliderTitle: "لمحة على أحد الأعمال المميزة",
      sliderText: "يعرض هذا القسم نموذجًا من أعمالي مع لمحة سريعة عن فكرته وطريقة تقديمه وتجربة التصفح فيه.",
      quick1Title: "وضوح وسلاسة",
      quick1Text: "تنقل سلس ومحتوى مباشر يساعد الزائر على الوصول إلى ما يبحث عنه بسهولة.",
      quick2Title: "احترافي بصريًا",
      quick2Text: "ألوان متوازنة، بطاقات أنيقة، وأحجام نصوص أوضح.",
      quick3Title: "تجربة بلغتين",
      quick3Text: "يمكنك تصفح المحتوى بالعربية أو الإنجليزية بسهولة حسب ما تفضله."
    },
    about: {
      eyebrow: "نبذة مهنية",
      title: "من أنا؟",
      text: "أنا SHADOW-COD1، مطور واجهات ويب ومهتم ببناء مواقع منظمة، متجاوبة، وسهلة التصفح مع عناية كبيرة بالتفاصيل البصرية.",
      cardText: "أركز على بناء صفحات واضحة، وتنظيم الملفات، وتحسين تجربة المستخدم، وتحويل الأفكار إلى واجهات عملية وحديثة.",
      focusTitle: "ما الذي أركز عليه؟",
      focusText: "أركز على تصميم واجهات واضحة وأنيقة وسهلة الاستخدام تُظهر الفكرة بصورة احترافية وتمنح الزائر تجربة مريحة.",
      goalTitle: "هدفي الحالي",
      goalText: "إنشاء معرض أعمال قوي يعرض مشاريعي بشكل جذاب ويُظهر مهاراتي التقنية والتصميمية بوضوح.",
      skillsEyebrow: "المهارات",
      skillsTitle: "التقنيات الأساسية"
    },
    projects: {
      eyebrow: "معرض الأعمال",
      title: "أعمال ومشاريع مختارة",
      text: "في هذه الصفحة ستجد نماذج من أعمالي مع وصف مختصر وروابط مباشرة للمعاينة والاطلاع على التفاصيل.",
      filterAll: "الكل",
      live: "عرض المشروع",
      code: "عرض الكود"
    },
    contact: {
      eyebrow: "تواصل معي",
      title: "لنبدأ الحديث",
      text: "يسعدني استقبال رسائلك واستفساراتك عبر قنوات التواصل التالية، سواء للتعاون أو لعرض فكرة مشروع جديد.",
      linksTitle: "وسائل التواصل",
      noteTitle: "جاهز للتعاون",
      noteText: "إذا كان لديك استفسار أو فرصة تعاون، يسعدني تواصلك عبر البريد الإلكتروني أو من خلال حسابي على GitHub.",
      emailBtn: "إرسال بريد مباشر"
    }
  },

  en: {
    brandSubtitle: "Professional Portfolio UI",
    nav: { home: "Home", about: "About", projects: "Projects", contact: "Contact" },
    home: {
      eyebrow: "Frontend & Web Developer",
      title: "I design modern, organized, and easy-to-browse websites with a clear visual identity.",
      text: "This website presents a selection of my work with a clear overview of my design style, development approach, and ways to get in touch.",
      btnProjects: "View Projects",
      btnContact: "Contact Me",
      stat1: "Published Project",
      stat2: "Clear Structure",
      stat3: "Responsive UI",
      panelLabel: "Quick Overview",
      panelTitle: "A professional interface that reflects my work and experience",
      panelText: "This interface presents my featured work in an organized way, helping visitors understand my experience, style, and the value I aim to deliver.",
      feature1: "Organized showcase of projects and achievements",
      feature2: "Clear navigation across key pages",
      feature3: "Comfortable experience on mobile and desktop",
      sliderEyebrow: "Featured Project",
      sliderTitle: "A look at a featured project",
      sliderText: "This section highlights one featured project with a quick overview of its idea, presentation style, and browsing experience.",
      quick1Title: "Clear & Smooth",
      quick1Text: "Smooth navigation and direct content help visitors reach what matters quickly.",
      quick2Title: "Visually Professional",
      quick2Text: "Balanced colors, elegant cards, and clearer text sizing.",
      quick3Title: "Two-Language Experience",
      quick3Text: "Browse the content in Arabic or English based on your preference."
    },
    about: {
      eyebrow: "Professional Overview",
      title: "Who am I?",
      text: "I am SHADOW-COD1, a frontend web developer interested in building organized, responsive, and visually polished websites.",
      cardText: "I focus on clean pages, file organization, better user experience, and turning ideas into practical modern interfaces.",
      focusTitle: "What do I focus on?",
      focusText: "I focus on designing clear, elegant, and user-friendly interfaces that present ideas professionally and create a comfortable experience.",
      goalTitle: "My current goal",
      goalText: "To create a strong portfolio that presents my projects attractively and shows my technical and design skills clearly.",
      skillsEyebrow: "Skills",
      skillsTitle: "Core Technologies"
    },
    projects: {
      eyebrow: "Project Gallery",
      title: "Selected Projects & Work",
      text: "On this page, you can explore selected projects with short descriptions and direct links to previews and details.",
      filterAll: "All",
      live: "Live Demo",
      code: "Source Code"
    },
    contact: {
      eyebrow: "Contact Me",
      title: "Let’s start talking",
      text: "I would be glad to receive your messages and inquiries through the following contact channels for collaboration or new project ideas.",
      linksTitle: "Contact Channels",
      noteTitle: "Open to Collaboration",
      noteText: "If you have a question or a collaboration opportunity, feel free to reach out by email or through my GitHub profile.",
      emailBtn: "Send Direct Email"
    }
  }
};

/* =========================
   مفاتيح التخزين المحلي localStorage
   لحفظ اللغة والثيم في المتصفح
========================= */
const langKey = "portfolio-language";
const themeKey = "portfolio-theme";

/* =========================
   متغيرات خاصة بالسلايدر
========================= */
let currentSlide = 0; // رقم الشريحة الحالية
let sliderInterval = null; // مؤقت التبديل التلقائي بين الشرائح

/* =========================
   جلب اللغة الحالية من localStorage
   وإذا لم تكن محفوظة يتم اعتماد العربية افتراضيًا
========================= */
function currentLang() {
  return localStorage.getItem(langKey) || "ar";
}

/* =========================
   جلب الثيم الحالي من localStorage
   وإذا لم يكن محفوظًا يتم اعتماد الداكن افتراضيًا
========================= */
function currentTheme() {
  return localStorage.getItem(themeKey) || "dark";
}

/* =========================
   تغيير الثيم وحفظه
   - dark
   - light
========================= */
function setTheme(theme) {
  localStorage.setItem(themeKey, theme); // حفظ الثيم
  document.body.classList.toggle("light-theme", theme === "light"); // إضافة/إزالة كلاس الثيم الفاتح
}

/* =========================
   تغيير اللغة وحفظها
   وتحديث:
   - lang
   - dir
   - النصوص
   - المحتوى الديناميكي
   - نص زر اللغة
========================= */
function setLanguage(lang) {
  localStorage.setItem(langKey, lang); // حفظ اللغة
  document.documentElement.lang = lang; // تحديث خاصية lang في html
  document.documentElement.dir = lang === "ar" ? "rtl" : "ltr"; // اتجاه الصفحة
  applyTranslations(lang); // تطبيق الترجمة على النصوص الثابتة
  renderDynamicContent(); // إعادة رسم العناصر المتغيرة بحسب اللغة

  const btn = document.getElementById("langToggle");
  if (btn) btn.textContent = lang === "ar" ? "EN" : "AR"; // نص زر تبديل اللغة
}

/* =========================
   تطبيق الترجمة على العناصر التي تحتوي على data-i18n
========================= */
function applyTranslations(lang) {
  const t = translations[lang]; // كائن الترجمة للغة المختارة

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n").split("."); // مثال: home.title
    let value = t;

    // الوصول إلى القيمة داخل الكائن بشكل متدرج
    key.forEach((part) => value = value?.[part]);

    // إذا كانت القيمة نصًا يتم وضعها داخل العنصر
    if (typeof value === "string") el.textContent = value;
  });

  // تفعيل الرابط النشط في شريط التنقل
  document.querySelectorAll(".main-nav a").forEach((a) => {
    a.classList.toggle("active", a.dataset.nav === document.body.dataset.page);
  });
}

/* =========================
   إنشاء بادجات التقنيات المستخدمة في المشاريع
   وتحويل المصفوفة إلى HTML
========================= */
function techBadges(list) {
  return list.map((item) => `<span class="tech-badge">${item}</span>`).join("");
}

/* =========================
   رسم السلايدر الخاص بالمشاريع المميزة
========================= */
function renderSlider(lang) {
  const track = document.getElementById("featuredSlider"); // حاوية الشرائح
  const dots = document.getElementById("sliderDots"); // حاوية النقاط
  if (!track || !dots) return; // الخروج إذا لم تكن العناصر موجودة

  // استخراج المشاريع المميزة فقط
  const featured = projects.filter((p) => p.featured);

  // إنشاء الشرائح داخل السلايدر
  track.innerHTML = featured.map((project) => `
    <article class="slide">
      <div class="slide-media"><img src="${project.image}" alt="${project.title[lang]}" /></div>
      <div class="slide-content">
        <h3>${project.title[lang]}</h3>
        <p>${project.description[lang]}</p>
        <div class="project-tech">${techBadges(project.technologies)}</div>
        <div class="project-actions">
          <a class="btn btn-primary" href="${project.liveUrl}" target="_blank">${translations[lang].projects.live}</a>
          <a class="btn btn-secondary" href="${project.codeUrl}" target="_blank">${translations[lang].projects.code}</a>
        </div>
      </div>
    </article>
  `).join("");

  // إنشاء نقاط التنقل أسفل السلايدر
  dots.innerHTML = featured.map((_, i) => `<button data-slide="${i}"></button>`).join("");

  // تهيئة السلايدر بعد الإنشاء
  setupSlider(featured.length);
}

/* =========================
   إعداد منطق السلايدر:
   - السابق
   - التالي
   - النقاط
   - التبديل التلقائي
========================= */
function setupSlider(total) {
  const track = document.getElementById("featuredSlider");
  const dots = [...document.querySelectorAll("#sliderDots button")];
  const prev = document.getElementById("sliderPrev");
  const next = document.getElementById("sliderNext");

  if (!track || !dots.length || !prev || !next) return;

  // تحديث موضع السلايدر والشريحة النشطة
  const update = (index) => {
    currentSlide = (index + total) % total; // لضمان التنقل الدائري
    track.style.transform = `translateX(${currentSlide * -100}%)`; // تحريك السلايدر
    dots.forEach((d, i) => d.classList.toggle("active", i === currentSlide)); // تفعيل النقطة الحالية
  };

  // زر السابق
  prev.onclick = () => update(currentSlide - 1);

  // زر التالي
  next.onclick = () => update(currentSlide + 1);

  // الضغط على النقاط
  dots.forEach((dot, i) => dot.onclick = () => update(i));

  // إيقاف المؤقت السابق إن وُجد
  if (sliderInterval) clearInterval(sliderInterval);

  // التبديل التلقائي كل 5 ثوانٍ
  sliderInterval = setInterval(() => update(currentSlide + 1), 5000);

  // بدء السلايدر من أول شريحة
  update(0);
}

/* =========================
   إنشاء بطاقة مشروع واحدة بصيغة HTML
========================= */
function projectCard(project, lang) {
  return `
    <article class="project-card glass reveal">
      <div class="project-media"><img src="${project.image}" alt="${project.title[lang]}" /></div>
      <div class="project-body">
        <h3>${project.title[lang]}</h3>
        <p class="project-desc">${project.description[lang]}</p>
        <div class="project-tech">${techBadges(project.technologies)}</div>
        <div class="project-actions">
          <a class="project-link live" href="${project.liveUrl}" target="_blank">${translations[lang].projects.live}</a>
          <a class="project-link code" href="${project.codeUrl}" target="_blank">${translations[lang].projects.code}</a>
        </div>
      </div>
    </article>
  `;
}

/* =========================
   رسم المشاريع داخل الصفحة
   مع إمكانية الفلترة حسب التقنية
========================= */
function renderProjects(lang, filter = "all") {
  const container = document.getElementById("projectsContainer");
  if (!container) return;

  // إذا كان الفلتر all يتم عرض كل المشاريع
  // وإلا يتم تصفية المشاريع حسب التقنية
  const filtered = filter === "all"
    ? projects
    : projects.filter((p) => p.technologies.some((t) => t.toLowerCase() === filter));

  container.innerHTML = filtered.map((p) => projectCard(p, lang)).join("");
}

/* =========================
   رسم المهارات داخل الصفحة
========================= */
function renderSkills(lang) {
  const container = document.getElementById("skillsGrid");
  if (!container) return;

  container.innerHTML = skills.map((skill) => `
    <article class="skill-card glass reveal">
      <span class="skill-icon">${skill.icon}</span>
      <h3>${skill.title[lang]}</h3>
      <p>${skill.text[lang]}</p>
      <div class="skill-level"><span style="inline-size:${skill.level}%"></span></div>
    </article>
  `).join("");
}

/* =========================
   رسم روابط التواصل
   وتحديث زر البريد المباشر
========================= */
function renderContacts() {
  const container = document.getElementById("contactLinks");
  const mailBtn = document.getElementById("directEmailBtn");

  // تحديث رابط زر البريد المباشر
  if (mailBtn) mailBtn.href = profileLinks.email;

  if (!container) return;

  // إنشاء عناصر التواصل
  container.innerHTML = `
    <a class="contact-link" href="${profileLinks.github}" target="_blank"><strong>GitHub</strong><span>${profileLinks.github}</span></a>
    <a class="contact-link" href="${profileLinks.website}" target="_blank"><strong>Website</strong><span>${profileLinks.website}</span></a>
    <a class="contact-link" href="${profileLinks.email}"><strong>Email</strong><span>${profileLinks.email.replace("mailto:", "")}</span></a>
  `;
}

/* =========================
   إعادة رسم جميع الأجزاء الديناميكية
   عند تغيير اللغة أو تحميل الصفحة
========================= */
function renderDynamicContent() {
  const lang = currentLang(); // اللغة الحالية
  renderSlider(lang); // رسم السلايدر
  renderProjects(lang, document.querySelector(".filter-btn.active")?.dataset.filter || "all"); // رسم المشاريع مع الفلتر الحالي
  renderSkills(lang); // رسم المهارات
  renderContacts(); // رسم بيانات التواصل
  revealOnScroll(); // تفعيل تأثيرات الظهور
}

/* =========================
   إظهار العناصر عند النزول إليها أثناء التمرير
   باستخدام IntersectionObserver
========================= */
function revealOnScroll() {
  const items = document.querySelectorAll(".reveal, .reveal-delay-1, .reveal-delay-2, .reveal-delay-3");

  const obs = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) entry.target.classList.add("reveal-visible");
    });
  }, { threshold: 0.12 }); // يبدأ التأثير عند ظهور 12% من العنصر

  items.forEach((item) => obs.observe(item));
}

/* =========================
   تهيئة أزرار الفلاتر الخاصة بالمشاريع
========================= */
function initFilters() {
  document.querySelectorAll(".filter-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      // إزالة active من كل الأزرار
      document.querySelectorAll(".filter-btn").forEach((b) => b.classList.remove("active"));

      // تفعيل الزر المضغوط
      btn.classList.add("active");

      // إعادة رسم المشاريع حسب الفلتر المختار
      renderProjects(currentLang(), btn.dataset.filter);

      // إعادة تفعيل تأثيرات الظهور
      revealOnScroll();
    });
  });
}

/* =========================
   تهيئة القائمة في الجوال
   فتح/إغلاق القائمة عند الضغط على الزر
========================= */
function initNav() {
  const toggle = document.getElementById("navToggle");
  const nav = document.getElementById("mainNav");

  if (toggle && nav) {
    toggle.addEventListener("click", () => nav.classList.toggle("open"));
  }
}

/* =========================
   الدالة الرئيسية عند تحميل الصفحة
   تقوم بـ:
   - تفعيل الثيم المحفوظ
   - تفعيل اللغة المحفوظة
   - إعداد القائمة
   - إعداد الفلاتر
   - ربط أزرار اللغة والثيم
========================= */
function init() {
  setTheme(currentTheme()); // تطبيق الثيم المحفوظ
  setLanguage(currentLang()); // تطبيق اللغة المحفوظة
  initNav(); // تهيئة القائمة
  initFilters(); // تهيئة الفلاتر

  const themeBtn = document.getElementById("themeToggle");
  const langBtn = document.getElementById("langToggle");

  // زر تغيير الثيم
  if (themeBtn) {
    themeBtn.onclick = () => setTheme(currentTheme() === "dark" ? "light" : "dark");
  }

  // زر تغيير اللغة
  if (langBtn) {
    langBtn.onclick = () => setLanguage(currentLang() === "ar" ? "en" : "ar");
  }
}

/* =========================
   تشغيل الدالة الرئيسية بعد اكتمال تحميل عناصر الصفحة
========================= */
document.addEventListener("DOMContentLoaded", init);
