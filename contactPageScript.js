/*Index Page js */
const hamburger = document.querySelector(".hamburger");
const mobileMenu = document.querySelector(".mobile-menu");
const overlay = document.querySelector(".overlay");

hamburger.addEventListener("click", () => {
  mobileMenu.classList.toggle("active");
  overlay.classList.toggle("active");

  document.body.classList.toggle("fixed-position");
  hamburger.innerHTML = `<i class="bi ${mobileMenu.classList.contains("active") ? "bi-x-square" : "bi-list"}"></i>`;
});

overlay.addEventListener("click", () => {
  mobileMenu.classList.remove("active");
  overlay.classList.remove("active");
  document.body.classList.remove("fixed-position");
  hamburger.innerHTML = '<i class="bi bi-list"></i>';
});

/*Contact Page js */
const form = document.forms[0];
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const phoneInput = document.getElementById("phone");
const emailErrorP = document.getElementById("email-error");
const phoneErrorP = document.getElementById("phone-error");
const nameErrorP = document.getElementById("name-error");
const spinner = document.getElementById("spinner");
const thankyou = document.getElementById("thankyou-message");
const formContent = document.querySelector(".form-content");

window.addEventListener("DOMContentLoaded", () => {
  spinner.style.display = "none";
  thankyou.style.display = "none";
  form.style.display = "block";
});

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const nameValue = nameInput.value.trim();
  const emailValue = emailInput.value.trim();
  const phoneValue = phoneInput.value.trim();

  //name validation
  if (!nameValue) {
    nameErrorP.textContent = "Please enter your full name";
    return;
  } else {
    nameErrorP.textContent = "";
  }
  let [firstName, lastName, ...rest] = nameValue.split(" ");
  if (!lastName) {
    nameErrorP.textContent = "Please enter both first and last name!";
    return;
  }
  //Regex for phone validation
  if (!/^(\+?\d{1,2}\s?)?(\(?\d{3}\)?[\s-]?)?\d{3}[\s-]?\d{4}$/.test(phoneValue)) {
    phoneErrorP.textContent = "Please enter a valid phone number!";
    return;
  } else {
    phoneErrorP.textContent = "";
  }
  // Email Validation
  if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(emailValue)) {
    emailErrorP.textContent = "Please enter a valid email address!";
    return;
  } else {
    emailErrorP.textContent = "";
  }
  //data base logic
  let obj = {
    fname: firstName,
    lname: lastName,
    ...(rest.length > 0 && { rest }),
    email: emailValue,
    phone: phoneValue,
  };
  window.localStorage.setItem(emailValue, JSON.stringify(Object.values(obj)));
  //reset
  form.reset();

  form.style.display = "none";
  spinner.style.display = "flex";
  formContent.style.display = "none";
  setTimeout(() => {
    spinner.style.display = "none";
    thankyou.style.display = "block";
    thankyou.setAttribute("tabindex", "-1");
    thankyou.focus();
    setTimeout(() => {
      thankyou.style.display = "none";
      form.style.display = "block";
      formContent.style.display = "block";
    }, 2500);
  }, 2500);
});
