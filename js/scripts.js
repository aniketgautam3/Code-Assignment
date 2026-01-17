const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");
const dropdown = document.querySelector(".dropdown");

menuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

dropdown.addEventListener("click", () => {
  dropdown.classList.toggle("open");
});
