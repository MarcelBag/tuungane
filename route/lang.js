function setLang(lang) {
    document.querySelectorAll('[data-en]').forEach(function(el) {
      el.textContent = el.getAttribute('data-' + lang);
    });
    
    document.querySelectorAll('input[placeholder], textarea[placeholder]').forEach(function(el) {
      if (el.hasAttribute('placeholder-en') && el.hasAttribute('placeholder-fr')) {
        el.placeholder = el.getAttribute('placeholder-' + lang);
      }
    });
    localStorage.setItem('siteLang', lang);
  }
  document.addEventListener("DOMContentLoaded", function() {
    setLang(localStorage.getItem('siteLang') || 'en');
  });
  