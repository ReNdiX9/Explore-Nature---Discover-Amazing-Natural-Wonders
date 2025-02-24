const hamburger = document.querySelector(".hamburger");
const mobileMenu = document.querySelector(".mobile-menu");
const overlay = document.querySelector(".overlay");

hamburger.addEventListener("click", () => {
  mobileMenu.classList.toggle("active");
  overlay.classList.toggle("active");
  document.body.classList.toggle("fixed-position");

  if (mobileMenu.classList.contains("active")) {
    hamburger.innerHTML = '<i class="bi bi-x-square"></i>';
  } else {
    hamburger.innerHTML = '<i class="bi bi-list"></i>';
  }
});

overlay.addEventListener("click", () => {
  mobileMenu.classList.remove("active");
  overlay.classList.remove("active");
  document.body.classList.remove("fixed-position");
  hamburger.innerHTML = '<i class="bi bi-list"></i>';
});
