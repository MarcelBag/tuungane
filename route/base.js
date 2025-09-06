/* ===============================
   Tuunganes base.js (site-wide)
   =============================== */
(() => {
  const saved = localStorage.getItem('tuunganes-theme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  document.documentElement.setAttribute('data-theme', saved || (prefersDark ? 'dark' : 'light'));
})();

/* ---------- Language helpers ---------- */
window.setLang = function setLang(lang) {
  try { localStorage.setItem('siteLang', lang); } catch {}
  // Document lang for accessibility
  document.documentElement.setAttribute('lang', lang);

  // Swap any element that declares translations via data-*
  document.querySelectorAll('[data-en]').forEach(el => {
    const key = 'data-' + lang;
    if (el.hasAttribute(key)) {
      el.innerHTML = el.getAttribute(key);
    } else {
      // Fallback to English if the requested language string is missing
      el.innerHTML = el.getAttribute('data-en');
    }
  });

  // Toggle active state on language buttons (if present)
  document.querySelectorAll('.lang-switch [data-lang]').forEach(b => {
    b.classList.toggle('active', b.dataset.lang === lang);
    b.setAttribute('aria-pressed', String(b.dataset.lang === lang));
  });
};

/* ---------- Find site ROOT from this script---------- */
(function resolveRootAndBoot() {
  // Locate this script tag reliably
  const current =
    document.currentScript ||
    Array.from(document.scripts).find(s => (s.src || '').includes('/route/base.js')) ||
    Array.from(document.scripts).find(s => (s.src || '').endsWith('base.js')) ||
    null;

  // If not found, fallback to page location
  const ROOT = new URL('../', (current && current.src) || location.href);
  const url  = (p) => new URL(p, ROOT).href;  // helper to build absolute URLs from site root

  document.addEventListener('DOMContentLoaded', () => {
    /* ---------- Inject Header ---------- */
    const siteHeader = document.getElementById('site-header');
    if (siteHeader) {
      siteHeader.innerHTML = `
        <header class="nav glass">
          <div class="container nav-inner">
            <a href="${url('index.html')}" class="logo">
              <img src="${url('assets/fevicon.png')}" alt="Tuunganes" width="32" height="32">
              <span>Tuunganes</span>
            </a>

            <button id="navToggle" class="nav-toggle" aria-label="Open menu" aria-expanded="false">
              <span></span><span></span><span></span>
            </button>

            <nav class="main-nav" id="mainNav">
              <a href="${url('about.html')}"
                 data-en="About" data-fr="À propos" data-de="Über uns">About</a>

              <a href="${url('services/services.html')}"
                 data-en="Services" data-fr="Services" data-de="Dienstleistungen">Services</a>

              <a href="${url('index.html#impact')}"
                 data-en="Impact" data-fr="Impact" data-de="Wirkung">Impact</a>

              <a href="${url('index.html#join')}"
                 data-en="Join Us" data-fr="Nous rejoindre" data-de="Mitmachen">Join Us</a>

              <div class="nav-right">
                <div class="lang-switch">
                  <button type="button" data-lang="en" aria-pressed="false">EN</button>
                  <button type="button" data-lang="fr" aria-pressed="false">FR</button>
                  <button type="button" data-lang="de" aria-pressed="false">DE</button>
                </div>
                <button id="themeBtn" class="theme-switcher" title="Toggle theme" aria-label="Toggle theme">
                  <span class="knob"></span><span class="moon" aria-hidden>🌙</span><span class="sun" aria-hidden>☀️</span>
                </button>
              </div>
            </nav>
          </div>
        </header>
      `;
    }

    /* ---------- Inject Footer ---------- */
    const siteFooter = document.getElementById('site-footer');
    if (siteFooter) {
      siteFooter.innerHTML = `
        <footer class="footer glass">
          <div class="container">
            <p data-en="©2025 Tuunganes. All rights reserved."
               data-fr="©2025 Tuunganes. Tous droits réservés."
               data-de="©2025 Tuunganes. Alle Rechte vorbehalten.">
              ©2025 Tuunganes. All rights reserved.
            </p>
          </div>
        </footer>
      `;
    }

    /* ---------- Theme toggle ---------- */
    const themeBtn = document.getElementById('themeBtn');
    if (themeBtn) {
      themeBtn.addEventListener('click', () => {
        const root = document.documentElement;
        const next = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
        root.setAttribute('data-theme', next);
        try { localStorage.setItem('tuunganes-theme', next); } catch {}
      });
    }

    /* ---------- Mobile nav toggle ---------- */
    const navToggle = document.getElementById('navToggle');
    const mainNav   = document.getElementById('mainNav');
    if (navToggle && mainNav) {
      navToggle.addEventListener('click', () => {
        const open = mainNav.classList.toggle('open');
        navToggle.setAttribute('aria-expanded', String(open));
      });
    }

    /* ---------- Language switching (buttons) ---------- */
    document.querySelectorAll('.lang-switch [data-lang]').forEach(btn => {
      btn.addEventListener('click', () => window.setLang(btn.dataset.lang));
    });

    /* ---------- Apply saved language on load ---------- */
    const savedLang = localStorage.getItem('siteLang') || 'en';
    window.setLang(savedLang);

    /* ---------- Mark active nav item ---------- */
    const here = new URL(location.href);
    const herePath = here.pathname.replace(/\/+$/, '');
    document.querySelectorAll('.main-nav a[href]').forEach(a => {
      const aPath = new URL(a.href).pathname.replace(/\/+$/, '');
      if (aPath === herePath) a.setAttribute('aria-current', 'page');
    });

    /* ---------- (Optional) Smooth scroll for same-page anchors ---------- */
    document.querySelectorAll('a[href^="#"]').forEach(a => {
      a.addEventListener('click', e => {
        const id = a.getAttribute('href').slice(1);
        const target = document.getElementById(id);
        if (target) {
          e.preventDefault();
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      });
    });
  });
})();
