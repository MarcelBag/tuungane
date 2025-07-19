function setLang(lang) {
    document.querySelectorAll('[data-en]').forEach(el => {
      if (el.hasAttribute('data-' + lang)) {
        el.textContent = el.getAttribute('data-' + lang);
      }
    });
    document.querySelectorAll('input[placeholder], textarea[placeholder]').forEach(el => {
      if (el.hasAttribute('data-' + lang)) {
        el.placeholder = el.getAttribute('data-' + lang);
      }
    });
    const title = document.querySelector('title[data-en]');
    if (title && title.hasAttribute('data-' + lang)) {
      document.title = title.getAttribute('data-' + lang);
    }
    localStorage.setItem('siteLang', lang);
    document.querySelectorAll('.lang-switch button').forEach(btn => btn.classList.remove('active'));
    document.querySelector(`.lang-switch button[onclick*="${lang}"]`).classList.add('active');
  }
  document.addEventListener("DOMContentLoaded", () => {
    setLang(localStorage.getItem('siteLang') || 'en');
  });
  