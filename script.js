/*Index Page js */
const hamburger = document.querySelector(".hamburger");
const mobileMenu = document.querySelector(".mobile-menu");
const overlay = document.querySelector(".overlay");

hamburger.addEventListener("click", () => {
  mobileMenu.classList.toggle("active");
  overlay.classList.toggle("active");
  document.body.classList.toggle("fixed-position");
  /*
  hamburger.innerHTML = mobileMenu.classList.contains("active")
    ? '<i class="bi bi-x-square"></i>'
    : '<i class="bi bi-list"></i>';
    */
  hamburger.innerHTML = `<i class="bi ${mobileMenu.classList.contains("active") ? "bi-x-square" : "bi-list"}"></i>`;
});

overlay.addEventListener("click", () => {
  mobileMenu.classList.remove("active");
  overlay.classList.remove("active");
  document.body.classList.remove("fixed-position");
  hamburger.innerHTML = '<i class="bi bi-list"></i>';
});
