// ! Burger
(function () {
  const burgerMenu = document.querySelector(".burger-open");
  const menu = document.querySelector(".menu");
  const menuCloseItem = document.querySelector(".burger-close");
  const wrapper = document.querySelector(".wrapper");
  const navList = document.querySelector(".nav-list");

  burgerMenu.addEventListener("click", () => {
    menu.classList.add("menu-active");
    wrapper.classList.add("overlay");
  });

  menuCloseItem.addEventListener("click", () => {
    menu.classList.remove("menu-active");
    wrapper.classList.remove("overlay");
  });

  navList.addEventListener("click", () => {
    menu.classList.remove("menu-active");
    wrapper.classList.remove("overlay");
  });

  wrapper.addEventListener("click", () => {
    menu.classList.remove("menu-active");
    wrapper.classList.remove("overlay");
  });
})();

// !SLIDER---------------------------------------------
const slider = document.querySelector(".slide-wrapper");
const slides = Array.from(slider.querySelectorAll(".slide"));
const WIDTH = slides[0].offsetWidth;
slider.innerHTML = "";

let step = 0;
let offset = -0.5;
const OFFSET_LAST_SLIDE = 2.5;
const OFFSET_FIRST_SLIDE = -1.5;

function draw() {
  const slide = slides[step].cloneNode(true);
  slide.style.left = offset * WIDTH + "px";
  slider.appendChild(slide);
  if (step + 1 === slides.length) {
    step = 0;
  } else {
    step++;
  }
  offset++;
}

function drawRight() {
  const slidesVisible = Array.from(slider.querySelectorAll(".slide"));
  const slide = slidesVisible[0].cloneNode(true);
  offset = OFFSET_LAST_SLIDE;
  slide.style.left = offset * WIDTH + "px";
  slider.appendChild(slide);
}

function drawLeft() {
  const slidesVisible = Array.from(slider.querySelectorAll(".slide"));
  const slide = slidesVisible[slidesVisible.length - 1].cloneNode(true);
  offset = OFFSET_FIRST_SLIDE;
  slide.style.left = offset * WIDTH + "px";
  slider.prepend(slide);
}

for (let i = 0; i < 3; i++) {
  draw();
}

function moveRight() {
  slider.onclick = null;
  const slidesVisible = Array.from(slider.querySelectorAll(".slide"));
  let offset2 = -0.5;
  for (let i = 0; i < slidesVisible.length; i++) {
    slidesVisible[i].style.left = offset2 * WIDTH - WIDTH + "px";
    offset2++;
  }
  setTimeout(() => {
    slidesVisible[0].remove();
  }, 1000);
}

function moveLeft() {
  slider.onclick = null;
  const slidesVisible = Array.from(slider.querySelectorAll(".slide"));
  let offset2 = 0.5;
  for (let i = 0; i < slidesVisible.length; i++) {
    slidesVisible[i].style.left = offset2 * WIDTH - WIDTH + "px";
    offset2++;
  }
  setTimeout(() => {
    slidesVisible[slidesVisible.length - 1].remove();
  }, 1000);
}

slider.addEventListener("click", (event) => {
  const slides = Array.from(slider.querySelectorAll(".slide"));
  const slideClick = event.target.parentElement;
  if (event.target.classList.contains("img-spain")) {
    document
      .querySelector(".button-japan")
      .classList.remove("button-slide-active");
    document
      .querySelector(".button-usa")
      .classList.remove("button-slide-active");
    document
      .querySelector(".button-spain")
      .classList.add("button-slide-active");
  } else if (event.target.classList.contains("img-japan")) {
    document
      .querySelector(".button-japan")
      .classList.add("button-slide-active");
    document
      .querySelector(".button-usa")
      .classList.remove("button-slide-active");
    document
      .querySelector(".button-spain")
      .classList.remove("button-slide-active");
  } else if (event.target.classList.contains("img-usa")) {
    document
      .querySelector(".button-japan")
      .classList.remove("button-slide-active");
    document.querySelector(".button-usa").classList.add("button-slide-active");
    document
      .querySelector(".button-spain")
      .classList.remove("button-slide-active");
  }
  const indexClick = slides.indexOf(slideClick);
  const indexLeftSlide = 0;
  const indexRightSlide = 2;
  if (indexClick === indexRightSlide) {
    drawRight();
    setTimeout(() => {
      moveRight();
    }, 100);
  } else if (indexClick === indexLeftSlide) {
    drawLeft();
    setTimeout(() => {
      moveLeft();
    }, 100);
  }
});

//! slider click button
if (document.querySelector(".slide-wrapper").offsetWidth === 0) {
  document.querySelector(".button-spain").classList.add("button-slide-active");
} else
  document.querySelector(".button-japan").classList.add("button-slide-active");

const buttonSpain = document.querySelector(".button-spain");
buttonSpain.addEventListener("click", () => {
  slider.querySelector(".img-spain").click();

  document
    .querySelector(".button-japan")
    .classList.remove("button-slide-active");
  document.querySelector(".button-usa").classList.remove("button-slide-active");
  document.querySelector(".button-spain").classList.add("button-slide-active");
});

const buttonJapan = document.querySelector(".button-japan");
buttonJapan.addEventListener("click", () => {
  slider.querySelector(".img-japan").click();

  document
    .querySelector(".button-spain")
    .classList.remove("button-slide-active");
  document.querySelector(".button-usa").classList.remove("button-slide-active");
  document.querySelector(".button-japan").classList.add("button-slide-active");
});

const buttonUsa = document.querySelector(".button-usa");
buttonUsa.addEventListener("click", () => {
  slider.querySelector(".img-usa").click();

  document
    .querySelector(".button-spain")
    .classList.remove("button-slide-active");
  document
    .querySelector(".button-japan")
    .classList.remove("button-slide-active");
  document.querySelector(".button-usa").classList.add("button-slide-active");
});

//! Mobile slider
let offsetMobile = slideMob.offsetWidth;
const slideWrapperMobile = document.querySelector(".slide-wrapper-mobile");

function checkActiveButton(params) {
  if (offsetMobile === slideMob.offsetWidth) {
    document
      .querySelector(".button-japan")
      .classList.remove("button-slide-active");
    document
      .querySelector(".button-usa")
      .classList.remove("button-slide-active");
    document
      .querySelector(".button-spain")
      .classList.add("button-slide-active");
  } else if (offsetMobile === 0) {
    document
      .querySelector(".button-spain")
      .classList.remove("button-slide-active");
    document
      .querySelector(".button-usa")
      .classList.remove("button-slide-active");
    document
      .querySelector(".button-japan")
      .classList.add("button-slide-active");
  } else {
    document
      .querySelector(".button-spain")
      .classList.remove("button-slide-active");
    document
      .querySelector(".button-japan")
      .classList.remove("button-slide-active");
    document.querySelector(".button-usa").classList.add("button-slide-active");
  }
}

const arrowRight = document.querySelector(".arrow-right");
arrowRight.addEventListener("click", () => {
  offsetMobile += -slideMob.offsetWidth;
  if (offsetMobile < -slideMob.offsetWidth) {
    offsetMobile = slideMob.offsetWidth;
  }
  slideWrapperMobile.style.left = offsetMobile + "px";
  checkActiveButton();
});

const arrowLeft = document.querySelector(".arrow-left");
arrowLeft.addEventListener("click", () => {
  if (offsetMobile === slideMob.offsetWidth) {
    offsetMobile = -slideMob.offsetWidth;
  } else offsetMobile += slideMob.offsetWidth;
  slideWrapperMobile.style.left = offsetMobile + "px";
  checkActiveButton();
});

// !POPUP
const login = document.querySelector(".login");
const account = document.querySelector(".nav-link-account");
const popup = document.querySelector(".popup");
const popupWrapper = document.querySelector(".popup-wrapper");

login.addEventListener("click", () => {
  popupWrapper.classList.toggle("popup-open");
  popup.classList.toggle("hidden");
  document.body.style.overflow = "hidden";
});

account.addEventListener("click", () => {
  popupWrapper.classList.toggle("popup-open");
  popup.classList.toggle("hidden");
  document.body.style.overflow = "hidden";
});

popup.addEventListener("click", (event) => {
  if (event.target.classList.contains("popup")) {
    popup.classList.toggle("hidden");
    popupWrapper.classList.toggle("popup-open");
  }
});

// !SignIn + alert
const email = document.querySelector(".email");
const password = document.querySelector(".password");
const signIn = document.querySelector(".popup-signin");

signIn.addEventListener("click", () => {
  alert(`Email: ${email.value}\nPassword: ${password.value}`);
});

// !click on register
const register = document.querySelector(".register");
const clickLogin = document.querySelector(".register");
let counter = 0;
register.addEventListener("click", () => {
  if (counter === 0) {
    document.querySelector(".popup-title").innerHTML = "Create account";
    document.querySelector(".popup-facebook").style = "display: none";
    document.querySelector(".popup-google").style = "display: none";
    document.querySelector(".popup-line-or").style = "display: none";
    document.querySelector(".popup-signin").innerHTML = "Sign Up";
    document.querySelector(".popup-forgot").style = "display: none";
    document.querySelector(".popup-register-text").innerHTML =
      "Already have an account?";
    document.querySelector(".register").innerHTML = " Log In";
    document.querySelector(".popup-wrapper").style = "min-height: 43.6rem;";
    document.querySelector(".popup-signin").style = "  margin-bottom: 2.6rem";
    counter = 1;
  } else {
    document.querySelector(".popup-title").innerHTML = "Log in to your account";
    document.querySelector(".popup-facebook").style = "display: flex";
    document.querySelector(".popup-google").style = "display: flex";
    document.querySelector(".popup-line-or").style = "display: flex";
    document.querySelector(".popup-signin").innerHTML = "Sign In";
    document.querySelector(".popup-forgot").style = "display: block";
    document.querySelector(".popup-register-text").innerHTML =
      "Don’t have an account?";
    document.querySelector(".register").innerHTML = " Register";
    document.querySelector(".popup-wrapper").style = "min-height: 66rem;";
    document.querySelector(".popup-signin").style = "  margin-bottom: 1rem";
    counter = 0;
  }
});

console.log(
  "Слайдер изображений в секции destinations +50\nНажатие на кнопку Login (кнопка Account в мобильной версии) показывает сверстанный логин попап + 50\nНажатие на кнопку Register на Login попапе меняет разметку попапа на разметку Sign Up попапа согласно макет (То есть нажатие не закрывает модал а просто меняет его наполнение). +25\nИтого: 125 быллов"
);
