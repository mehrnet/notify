// Mehr Notify Application Script
(function () {
  const THEMES = ["dark", "black", "light"];
  const LOCALES = ["en", "fa"];
  const THEME_KEY = "mehr_theme";
  const LOCALE_KEY = "mehr_locale";

  const state = {
    theme: localStorage.getItem(THEME_KEY) || "dark",
    locale: localStorage.getItem(LOCALE_KEY) || "en",
  };

  const THEME_COLORS = {
    dark: "#0c0f12",
    black: "#000000",
    light: "#fdfbf7",
  };

  const I18N = {
    en: {
      "nav.home": "Home",
      "nav.telegram": "Telegram",
      "nav.email": "Email",
      "nav.commands": "Commands",
      "nav.features": "Features",
      "nav.terms": "Terms",
      "nav.privacy": "Privacy",
      "nav.open_bot": "Open Bot",
      "pref.theme": "Theme",
      "pref.language": "Language",
      "theme.light": "Light",
      "theme.dark": "Dark",
      "theme.black": "Black",
      "hero.badge": "⚡ Multi-Channel Notification Network",
      "hero.title": "Unified Real-Time Alerts for Mehrnet",
      "hero.lead": "Instant, self-custodial event notifications delivered straight to Telegram and Email. Connect your services, feeds, and apps with unified commands.",
      "hero.btn_tg": "Telegram Bot (@MehrNotifyBot)",
      "hero.btn_email": "Email Bot (notify@mehrnet.com)",
      "hero.btn_commands": "View Commands",
      "services.label": "Supported Subscription Types",
      "services.title": "Ecosystem Integrations",
      "services.desc": "Easily subscribe to events across the Mehrnet network and beyond. More services are continuously added.",
      "services.gateway_title": "Mehr Gateway (gateway)",
      "services.gateway_desc": "Real-time on-chain crypto payment settlements, invoices, and checkout events on EVM, BSC, Solana, TON, and TRON.",
      "services.gateway_type": "Type: gateway",
      "services.gateway_arg": "Arg: Account API Token",
      "services.rss_title": "Feeds & Releases (rss)",
      "services.rss_desc": "Sub-second RSS and Atom feed monitoring for GitHub releases, software version updates, blogs, and announcements.",
      "services.rss_type": "Type: rss",
      "services.rss_arg": "Arg: Feed URL (RSS/Atom)",
      "services.more_title": "More Mehrnet Services",
      "services.more_desc": "Upcoming integrations for Mehr Radar uptime monitoring, Mehr Rates exchange triggers, and ecosystem telemetry.",
      "services.more_badge": "In Development",
      "tg.section_label": "Telegram Integration",
      "tg.section_title": "Control Everything via @MehrNotifyBot",
      "tg.section_desc": "Full two-way command bot with interactive paginated menus, step-by-step prompts, and instant webhook delivery.",
      "tg.feature1_title": "Interactive Subscription Menu",
      "tg.feature1_desc": "Run /subscriptions to view active subscriptions with live status, pagination, and one-tap Delete buttons.",
      "tg.feature2_title": "Smart Message Lifecycle",
      "tg.feature2_desc": "In-place menu editing for recent messages (<10 min) keeps your chat clean without endless notification spam.",
      "tg.feature3_title": "Auto-Detection & Prompt Mode",
      "tg.feature3_desc": "Send a token directly for auto-subscription, or run /sub gateway without args to enter step-by-step guided mode.",
      "email.section_label": "Email Integration",
      "email.section_title": "Command-Driven Email Automation",
      "email.section_desc": "Operate notification feeds directly from your inbox at notify@mehrnet.com with standard email threading.",
      "email.feature1_title": "Subject or Body Commands",
      "email.feature1_desc": "Send commands like /sub, /unsub, /subscriptions, or /help in the email Subject line or the email Body.",
      "email.feature2_title": "RFC Threading & Nested Quoting",
      "email.feature2_desc": "All bot responses use In-Reply-To and References headers with standard > quoting for nested conversation history.",
      "email.feature3_title": "Direct Event Notifications",
      "email.feature3_desc": "Receive beautiful, responsive HTML and plain-text payment receipts and feed alerts delivered to your inbox.",
      "cmd.section_label": "Quick Reference",
      "cmd.section_title": "Unified Command Syntax",
      "cmd.section_desc": "Identical syntax works across both Telegram and Email channels.",
      "channels.section_label": "Delivery Channels",
      "channels.section_title": "Two Ways to Receive & Manage Alerts",
      "channels.section_desc": "Choose your preferred channel. Both support identical unified command syntax and instant push notifications.",
      "channels.tg_title": "Telegram",
      "channels.tg_tag": "Instant Push",
      "channels.tg_summary": "Interactive bot with inline action buttons, in-place menu updates, and step-by-step guided prompts.",
      "channels.tg_h1": "Interactive /subscriptions menu with one-tap delete",
      "channels.tg_h2": "Smart in-place editing keeps your chat history clean",
      "channels.tg_h3": "Sub-second webhook delivery for invoices and releases",
      "channels.tg_btn": "Open @MehrNotifyBot",
      "channels.email_title": "Email",
      "channels.email_tag": "Zero Setup",
      "channels.email_summary": "Operate notification feeds directly from any email client with standard message threading and receipts.",
      "channels.email_h1": "Send commands in email Subject line or Body",
      "channels.email_h2": "RFC threading (In-Reply-To) with quoted conversation history",
      "channels.email_h3": "Clean HTML and plain-text payment & release receipts",
      "channels.email_btn": "Email notify@mehrnet.com",
      "preview.section_label": "Live Output",
      "preview.section_title": "What Your Alerts Look Like",
      "preview.tg_tab": "Telegram Alert",
      "preview.email_tab": "Email Alert",
      "copy.copied": "Copied to clipboard!",
      "copy.btn": "Copy",
    },
    fa: {
      "nav.home": "خانه",
      "nav.telegram": "تلگرام",
      "nav.email": "ایمیل",
      "nav.commands": "دستورات",
      "nav.features": "ویژگی‌ها",
      "nav.terms": "قوانین",
      "nav.privacy": "حریم خصوصی",
      "nav.open_bot": "شروع ربات",
      "pref.theme": "پوسته",
      "pref.language": "زبان",
      "theme.light": "روشن",
      "theme.dark": "تیره",
      "theme.black": "مشکی",
      "hero.badge": "⚡ شبکه اطلاع‌رسانی چندکاناله",
      "hero.title": "هاب اطلاع‌رسانی یکپارچه برای شبکه مهر",
      "hero.lead": "ارسال لحظه‌ای و غیرحضانتی رویدادها مستقیماً به تلگرام و ایمیل. سرویس‌ها و فیدهای خود را با دستورات یکپارچه متصل کنید.",
      "hero.btn_tg": "ربات تلگرام (@MehrNotifyBot)",
      "hero.btn_email": "ربات ایمیل (notify@mehrnet.com)",
      "hero.btn_commands": "مشاهده دستورات",
      "services.label": "انواع اشتراک‌های پشتیبانی‌شده",
      "services.title": "اتصال سرویس‌های اکوسیستم",
      "services.desc": "به‌سادگی به رویدادهای مختلف سراسر شبکه مهر متصل شوید. سرویس‌های جدید به‌صورت پیوسته افزوده می‌شوند.",
      "services.gateway_title": "درگاه مهر (gateway)",
      "services.gateway_desc": "تسویه لحظه‌ای پرداخت‌های آنچین، صدور فاکتور و پرداخت مشتری در شبکه‌های EVM، بایننس، سولانا، تون و ترون.",
      "services.gateway_type": "نوع: gateway",
      "services.gateway_arg": "پارامتر: توکن API حساب",
      "services.rss_title": "فیدها و انتشارات (rss)",
      "services.rss_desc": "پایش زیرثانیه‌ای فیدهای RSS و Atom برای ریلیزهای گیت‌هاب، نسخه‌های نرم‌افزار، وبلاگ‌ها و اخبار.",
      "services.rss_type": "نوع: rss",
      "services.rss_arg": "پارامتر: آدرس اینترنتی فید",
      "services.more_title": "سرویس‌های دیگر مهر",
      "services.more_desc": "ادغام‌های آینده برای مانیتورینگ آپ‌تایم Mehr Radar، هشدارهای نرخ ارز Mehr Rates و سایر وب‌سایت‌های مهر.",
      "services.more_badge": "در حال توسعه",
      "tg.section_label": "اتصال تلگرام",
      "tg.section_title": "مدیریت کامل از طریق @MehrNotifyBot",
      "tg.section_desc": "ربات هوشمند با منوهای دکمه‌ای صفحه‌بندی‌شده، حالت تعاملی مرحله‌به‌مرحله و وب‌هوک‌های بدون تاخیر.",
      "tg.feature1_title": "منوی تعاملی اشتراک‌ها",
      "tg.feature1_desc": "با اجرای دستور /subscriptions وضعیت تمام اشتراک‌های فعال، صفحه‌بندی و دکمه‌های حذف را مشاهده کنید.",
      "tg.feature2_title": "ویرایش هوشمند پیام‌ها",
      "tg.feature2_desc": "ویرایش درجا برای پیام‌های کمتر از ۱۰ دقیقه مانع از شلوغ شدن صفحه چت تلگرام شما می‌شود.",
      "tg.feature3_title": "تشخیص خودکار و راهنمای مرحله‌ای",
      "tg.feature3_desc": "ارسال مستقیم توکن برای اتصال سریع، یا ارسال /sub gateway بدون ورودی برای ورود به راهنمای مرحله‌به‌مرحله.",
      "email.section_label": "اتصال ایمیل",
      "email.section_title": "مدیریت اشتراک‌ها از طریق ایمیل",
      "email.section_desc": "کنترل دستورات و دریافت هشدارها از هر کلاینت ایمیل به آدرس notify@mehrnet.com با پشتیبانی از Threading استاندارد.",
      "email.feature1_title": "دستور در موضوع یا متن ایمیل",
      "email.feature1_desc": "دستورات مانند /sub یا /subscriptions یا /help را می‌توانید در عنوان ایمیل یا متن آن ارسال کنید.",
      "email.feature2_title": "تردینگ استاندارد و نقل‌قول RFC",
      "email.feature2_desc": "پاسخ‌های ربات با هدرهای In-Reply-To و علامت > ارسال شده و در کلاینت‌هایی مثل Evolution به‌صورت درختواره نمایش می‌یابند.",
      "email.feature3_title": "هشدارهای لحظه‌ای با ایمیل",
      "email.feature3_desc": "رسیدهای تراکنش و به‌روزرسانی‌های فیدها را با قالب مرتب و ریسپانسیو در اینباکس خود تحویل بگیرید.",
      "cmd.section_label": "راهنمای سریع",
      "cmd.section_title": "دستورات استاندارد و یکپارچه",
      "cmd.section_desc": "دستورات دقیقاً به یک شکل در هر دو بستر تلگرام و ایمیل پشتیبانی می‌شوند.",
      "channels.section_label": "کانال‌های اطلاع‌رسانی",
      "channels.section_title": "دو بستر برای دریافت و مدیریت هشدارها",
      "channels.section_desc": "کانال مورد نظر خود را انتخاب کنید. دستورات یکپارچه و ارسال آنی در هر دو بستر پشتیبانی می‌شوند.",
      "channels.tg_title": "تلگرام",
      "channels.tg_tag": "ارسال آنی",
      "channels.tg_summary": "ربات هوشمند با دکمه‌های شیشه‌ای، ویرایش درجا و حالت تعاملی برای ایجاد اشتراک.",
      "channels.tg_h1": "منوی تعاملی subscriptions/ با حذف تک‌کلیک",
      "channels.tg_h2": "ویرایش درجا برای جلوگیری از شلوغی چت",
      "channels.tg_h3": "وب‌هوک‌های فوق سریع برای فاکتورها و آپدیت‌ها",
      "channels.tg_btn": "شروع ربات MehrNotifyBot@",
      "channels.email_title": "ایمیل",
      "channels.email_tag": "بدون نیاز به نصب",
      "channels.email_summary": "مدیریت هشدارها و فیدها مستقیماً از هر کلاینت ایمیل با پشتیبانی از تردهای استاندارد.",
      "channels.email_h1": "ارسال دستورات در عنوان یا متن ایمیل",
      "channels.email_h2": "پشتیبانی از RFC اینباکس با تاریخچه مکالمه",
      "channels.email_h3": "رسیدهای تراکنش و فیدها در قالب زیبا و مرتب",
      "channels.email_btn": "ارسال ایمیل به notify@mehrnet.com",
      "preview.section_label": "نمونه خروجی",
      "preview.section_title": "شکل پیام‌های دریافتی شما",
      "preview.tg_tab": "پیام تلگرام",
      "preview.email_tab": "ایمیل دریافتی",
      "copy.copied": "در حافظه کپی شد!",
      "copy.btn": "کپی",
    },
  };

  function applyPreferences() {
    document.documentElement.dataset.theme = state.theme;
    document.documentElement.lang = state.locale;
    document.documentElement.dir = state.locale === "fa" ? "rtl" : "ltr";

    const metaTheme = document.querySelector('meta[name="theme-color"]');
    if (metaTheme) {
      metaTheme.setAttribute("content", THEME_COLORS[state.theme] || THEME_COLORS.dark);
    }

    // Sync theme buttons
    document.querySelectorAll("[data-theme-val]").forEach((btn) => {
      const active = btn.dataset.themeVal === state.theme;
      btn.classList.toggle("active", active);
      btn.setAttribute("aria-pressed", active ? "true" : "false");
    });

    // Sync locale buttons
    document.querySelectorAll("[data-lang-val]").forEach((btn) => {
      const active = btn.dataset.langVal === state.locale;
      btn.classList.toggle("active", active);
      btn.setAttribute("aria-pressed", active ? "true" : "false");
    });

    // Sync trigger icons
    const themeIcon = state.theme === "light" ? "sun" : state.theme === "black" ? "contrast" : "moon";
    const langIcon = state.locale === "fa" ? "flag-ir" : "flag-us";

    document.querySelectorAll("[data-pref-theme-icon] use").forEach((use) => {
      use.setAttribute("href", `/icons.svg#${themeIcon}`);
    });
    document.querySelectorAll("[data-pref-lang-icon] use").forEach((use) => {
      use.setAttribute("href", `/icons.svg#${langIcon}`);
    });

    // Translate DOM text
    const dict = I18N[state.locale] || I18N.en;
    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.getAttribute("data-i18n");
      if (dict[key]) {
        el.textContent = dict[key];
      }
    });

    // Update trigger aria-label & title
    const trigger = document.querySelector("[data-dropdown-toggle]");
    if (trigger) {
      const themeLabel = dict[`theme.${state.theme}`] || state.theme;
      const langLabel = state.locale === "fa" ? "فارسی" : "English";
      trigger.setAttribute("aria-label", `${dict["pref.theme"]}: ${themeLabel}; ${dict["pref.language"]}: ${langLabel}`);
      trigger.setAttribute("title", `${themeLabel} · ${langLabel}`);
    }
  }

  function setTheme(theme) {
    if (!THEMES.includes(theme)) theme = "dark";
    state.theme = theme;
    localStorage.setItem(THEME_KEY, theme);
    applyPreferences();
  }

  function setLocale(locale) {
    if (!LOCALES.includes(locale)) locale = "en";
    state.locale = locale;
    localStorage.setItem(LOCALE_KEY, locale);
    applyPreferences();
  }

  document.addEventListener("DOMContentLoaded", () => {
    applyPreferences();

    // Dropdown toggle
    const dropdown = document.querySelector("[data-menu-root]");
    const toggleBtn = document.querySelector("[data-dropdown-toggle]");

    if (dropdown && toggleBtn) {
      toggleBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        const isOpen = dropdown.classList.toggle("active");
        toggleBtn.setAttribute("aria-expanded", isOpen ? "true" : "false");
      });

      document.addEventListener("click", (e) => {
        if (!dropdown.contains(e.target)) {
          dropdown.classList.remove("active");
          toggleBtn.setAttribute("aria-expanded", "false");
        }
      });

      document.addEventListener("keydown", (e) => {
        if (e.key === "Escape" && dropdown.classList.contains("active")) {
          dropdown.classList.remove("active");
          toggleBtn.setAttribute("aria-expanded", "false");
          toggleBtn.focus();
        }
      });
    }

    // Theme buttons click
    document.querySelectorAll("[data-theme-val]").forEach((btn) => {
      btn.addEventListener("click", () => {
        setTheme(btn.dataset.themeVal);
        if (dropdown) dropdown.classList.remove("active");
      });
    });

    // Locale buttons click
    document.querySelectorAll("[data-lang-val]").forEach((btn) => {
      btn.addEventListener("click", () => {
        setLocale(btn.dataset.langVal);
        if (dropdown) dropdown.classList.remove("active");
      });
    });

    // Toast message handler
    const toast = document.getElementById("toast");
    let toastTimer = null;

    function showToast(text) {
      if (!toast) return;
      toast.textContent = text || (I18N[state.locale] || I18N.en)["copy.copied"];
      toast.classList.add("show");
      clearTimeout(toastTimer);
      toastTimer = setTimeout(() => {
        toast.classList.remove("show");
      }, 2200);
    }

    // Copy to clipboard
    document.querySelectorAll("[data-copy]").forEach((btn) => {
      btn.addEventListener("click", async () => {
        const textToCopy = btn.getAttribute("data-copy");
        if (!textToCopy) return;

        try {
          await navigator.clipboard.writeText(textToCopy);
          btn.classList.add("copied");
          const span = btn.querySelector("span");
          const orig = span ? span.textContent : "";
          if (span) span.textContent = state.locale === "fa" ? "کپی شد!" : "Copied!";
          showToast(state.locale === "fa" ? `کپی شد: ${textToCopy}` : `Copied: ${textToCopy}`);

          setTimeout(() => {
            btn.classList.remove("copied");
            if (span) span.textContent = orig || (state.locale === "fa" ? "کپی" : "Copy");
          }, 2000);
        } catch {
          showToast(state.locale === "fa" ? "با Ctrl+C کپی کنید" : "Press Ctrl+C to copy");
        }
      });
    });

    // Preview tab switcher (Telegram vs Email)
    const tabBtns = document.querySelectorAll("[data-preview-tab]");
    const previewTg = document.getElementById("preview-telegram");
    const previewEmail = document.getElementById("preview-email");

    tabBtns.forEach((btn) => {
      btn.addEventListener("click", () => {
        tabBtns.forEach((b) => b.classList.remove("active"));
        btn.classList.add("active");
        const tab = btn.getAttribute("data-preview-tab");
        if (tab === "email") {
          if (previewTg) previewTg.classList.add("hidden");
          if (previewEmail) previewEmail.classList.remove("hidden");
        } else {
          if (previewEmail) previewEmail.classList.add("hidden");
          if (previewTg) previewTg.classList.remove("hidden");
        }
      });
    });

    // Active bottom-nav and nav-center highlight based on scroll
    const sections = ["home"];
    const navLinks = document.querySelectorAll(".nav-center a, .bottom-nav a");

    window.addEventListener("scroll", () => {
      let current = "home";
      const scrollY = window.pageYOffset;

      sections.forEach((sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
          const sectionTop = section.offsetTop - 120;
          if (scrollY >= sectionTop) {
            current = sectionId;
          }
        }
      });

      navLinks.forEach((link) => {
        const href = link.getAttribute("href");
        if (href === `/#${current}` || href === `#${current}` || (current === "home" && href === "/")) {
          link.classList.add("active");
        } else if (href && href.startsWith("#") || href && href.startsWith("/#")) {
          link.classList.remove("active");
        }
      });
    }, { passive: true });
  });
})();
