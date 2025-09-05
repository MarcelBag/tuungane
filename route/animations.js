document.addEventListener("DOMContentLoaded", () => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("in");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });

  // Observe all reveal elements
  document.querySelectorAll(".reveal").forEach(el => {
    observer.observe(el);
    // ensure visible on load
    if (el.getBoundingClientRect().top < window.innerHeight) {
      el.classList.add("in");
    }
  });
});
