document.addEventListener("DOMContentLoaded", () => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in-view");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.2 });
  
    // Observe all sections/cards marked `.reveal`
    document.querySelectorAll(".reveal").forEach(el => observer.observe(el));
  
    // **Also** observe each number box
    document.querySelectorAll(".numbers div").forEach(el => observer.observe(el));
  });
  