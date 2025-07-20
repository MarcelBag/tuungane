//console.log('script.js loaded');
//console.log('header:', header, 'toggle:', toggle);

document.addEventListener("DOMContentLoaded", () => {
    const header = document.querySelector("header.nav");
    const toggle = document.querySelector(".menu-toggle");
    toggle.addEventListener("click", () => {
      header.classList.toggle("open");
    });
  });
  