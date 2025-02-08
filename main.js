/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById("nav-menu"),
  navToggle = document.getElementById("nav-toggle"),
  navClose = document.getElementById("nav-close");

/*===== Show Menu =====*/
if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
  });
}

/*===== Hide Menu =====*/
if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
}

/*=============== IMAGE GALLERY ===============*/
function imgGallery() {
  const mainImg = document.querySelector(".details__img"),
    smallImg = document.querySelectorAll(".details__small-img");

  smallImg.forEach((img) => {
    img.addEventListener("click", function () {
      mainImg.src = this.src;
    });
  });
}

imgGallery();

/*=============== SWIPER CATEGORIES ===============*/
let swiperCategories = new Swiper(".categories__container", {
  spaceBetween: 24,
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    350: { slidesPerView: 2, spaceBetween: 24 },
    768: { slidesPerView: 3, spaceBetween: 24 },
    992: { slidesPerView: 4, spaceBetween: 24 },
    1200: { slidesPerView: 5, spaceBetween: 24 },
    1400: { slidesPerView: 6, spaceBetween: 24 },
  },
});

/*=============== SWIPER PRODUCTS ===============*/
let swiperProducts = new Swiper(".new__container", {
  spaceBetween: 24,
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    768: { slidesPerView: 2, spaceBetween: 24 },
    992: { slidesPerView: 4, spaceBetween: 24 },
    1400: { slidesPerView: 4, spaceBetween: 24 },
  },
});

/*=============== PRODUCTS TABS ===============*/
const tabs = document.querySelectorAll("[data-target]"),
  tabsContents = document.querySelectorAll("[data-content]");

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    const target = document.querySelector(tab.dataset.target);

    tabsContents.forEach((content) => content.classList.remove("active-tab"));
    target.classList.add("active-tab");

    tabs.forEach((tab) => tab.classList.remove("active-tab"));
    tab.classList.add("active-tab");
  });
});

/*=============== FORM VALIDATION ===============*/
document.addEventListener("DOMContentLoaded", function () {
  const loginForm = document.querySelector(".login .form"),
    registerForm = document.querySelector(".register .form");

  function validateForm(form) {
    let isValid = true;
    const inputs = form.querySelectorAll(".form__input");

    inputs.forEach((input) => {
      if (input.value.trim() === "") {
        isValid = false;
        showError(input, "This field is required");
      } else {
        clearError(input);
      }
    });

    return isValid;
  }

  function showError(input, message) {
    let error = input.nextElementSibling;
    if (!error || !error.classList.contains("error-message")) {
      error = document.createElement("span");
      error.classList.add("error-message");
      input.parentNode.insertBefore(error, input.nextSibling);
    }
    error.textContent = message;
    input.classList.add("error");
  }

  function clearError(input) {
    let error = input.nextElementSibling;
    if (error && error.classList.contains("error-message")) {
      error.remove();
    }
    input.classList.remove("error");
  }

  if (loginForm) {
    loginForm.addEventListener("submit", function (event) {
      if (!validateForm(loginForm)) {
        event.preventDefault();
      }
    });
  }

  if (registerForm) {
    registerForm.addEventListener("submit", function (event) {
      if (!validateForm(registerForm)) {
        event.preventDefault();
      }
    });
  }
});

