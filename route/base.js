function setLang(lang) {
  console.log('Setting language to:', lang);
  document.querySelectorAll('[data-en]').forEach(el => {
    if (el.hasAttribute('data-' + lang)) {
      el.innerHTML = el.getAttribute('data-' + lang);
    }
  });
  // ... rest of the function
}
// ================= Theme init =================
(function(){
  const saved = localStorage.getItem('tuunganes-theme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  document.documentElement.setAttribute('data-theme', saved || (prefersDark ? 'dark' : 'light'));
})();

document.addEventListener("DOMContentLoaded", () => {
  // ================= Inject Header =================
  const siteHeader = document.getElementById("site-header");
  if (siteHeader) {
    siteHeader.innerHTML = `
      <header class="nav glass">
        <div class="container nav-inner">
          <a href="../index.html" class="logo">
            <img src="../assets/fevicon.png" alt="Tuunganes" width="32" height="32">
            <span>Tuunganes</span>
          </a>
          <button id="navToggle" class="nav-toggle" aria-label="Open menu" aria-expanded="false">
            <span></span><span></span><span></span>
          </button>
          <nav class="main-nav" id="mainNav">
            <a href="../about.html" 
               data-en="About" data-fr="À propos" data-de="Über uns">About</a>
            <a href="../services/services.html" 
               data-en="Services" data-fr="Services" data-de="Dienstleistungen">Services</a>
            <a href="../index.html#impact" 
               data-en="Impact" data-fr="Impact" data-de="Wirkung">Impact</a>
            <a href="../index.html#join" 
               data-en="Join Us" data-fr="Nous rejoindre" data-de="Mitmachen">Join Us</a>
            <div class="nav-right">
              <div class="lang-switch">
                <button type="button" data-lang="en">EN</button>
                <button type="button" data-lang="fr">FR</button>
                <button type="button" data-lang="de">DE</button>
              </div>
              <button id="themeBtn" class="theme-switcher" title="Toggle theme" aria-label="Toggle theme">
                <span class="knob"></span><span class="moon">🌙</span><span class="sun">☀️</span>
              </button>
            </div>
          </nav>
        </div>
      </header>
    `;
  }

  // ================= Inject Footer =================
  const siteFooter = document.getElementById("site-footer");
  if (siteFooter) {
    siteFooter.innerHTML = `
      <footer class="footer glass">
        <div class="container">
          <p data-en="©2025 Tuunganes. All rights reserved." data-fr="©2025 Tuunganes. Tous droits réservés" data-de="©2025 Tuunganes. Alle Rechte vorbehalten."> </p>
        </div>
      </footer>
    `;
  }

  // ================= Theme toggle =================
  const themeBtn = document.getElementById('themeBtn');
  if (themeBtn) {
    themeBtn.addEventListener('click', () => {
      const root = document.documentElement;
      const next = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
      root.setAttribute('data-theme', next);
      localStorage.setItem('tuunganes-theme', next);
    });
  }

  // ================= Mobile nav toggle =================
  const navToggle = document.getElementById('navToggle');
  const mainNav = document.getElementById('mainNav');
  if (navToggle && mainNav) {
    navToggle.addEventListener('click', () => {
      const open = mainNav.classList.toggle('open');
      navToggle.setAttribute('aria-expanded', String(open));
    });
  }

  // ================= Language switching =================
  document.querySelectorAll('.lang-switch [data-lang]').forEach(btn => {
    btn.addEventListener('click', () => {
      const lang = btn.dataset.lang;
      document.querySelectorAll('[data-' + lang + ']').forEach(el => {
        el.textContent = el.getAttribute('data-' + lang);
      });
      localStorage.setItem('siteLang', lang);
    });
  });

  // ================= Keeping .html to links =================
  // Removed the block that stripped .html because we need static file access and for the future we will check the possibility
});
