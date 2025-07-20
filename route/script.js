document.addEventListener("DOMContentLoaded", () => {
    const header = document.querySelector("header.nav");
    const toggle = document.querySelector(".menu-toggle");
    toggle.addEventListener("click", () => {
      header.classList.toggle("open");
    });
  });
  