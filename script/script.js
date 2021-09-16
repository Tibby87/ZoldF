const navButton = document.querySelector(".nav-toggle");
const nav = document.querySelector(".nav");
const navLink = document.querySelectorAll(".nav__link");

// Hamburger menü ki-be kapcsolása kisebb szélességű képernyőkön
navButton.addEventListener("click", function () {
  nav.classList.toggle("nav--visible");
});
