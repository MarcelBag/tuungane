function setLang(lang) {
  document.querySelectorAll('[data-en]').forEach(el => {
    if (el.hasAttribute('data-' + lang)) {
      el.innerHTML = el.getAttribute('data-' + lang); // keep inline HTML (e.g., <small>)
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
}
document.addEventListener('DOMContentLoaded', () => {
  setLang(localStorage.getItem('siteLang') || 'en');
});
