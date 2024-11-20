"use strict";

//Header에 페이지 아래로 스크롤시 다크 스타일링 적용
document.addEventListener("scroll", () => {
  const header = document.querySelector(".header");
  const headerLogo = document.querySelector(".header_logo");
  const headerHeight = headerLogo.getBoundingClientRect().height;
  const scrollY = window.scrollY;
  if (scrollY > headerHeight) {
    header.classList.add("header--dark");
  } else {
    header.classList.remove("header--dark");
  }
});

//스크롤 시 Home 섹션을 투명하게 처리함
const home = document.querySelector(".home__container");
const homeHeight = home.offsetHeight;
document.addEventListener("scroll", () => {
  home.style.opacity = 1 - window.scrollY / homeHeight;
});

//스크롤 시 arrowUp 버튼 나타남
const arrowUp = document.querySelector(".arrow-up");
document.addEventListener("scroll", () => {
  if (window.scrollY > homeHeight / 2) {
    arrowUp.style.opacity = 1;
  } else {
    arrowUp.style.opacity = 0;
  }
});

//arrowUpBtn clicked, go to the top
arrowUp.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
});

// feat : Navbar Toggle btn click
const navbarToggle = document.querySelector(".header__toggle");
const navbarMenu = document.querySelector(".header_menu");
navbarToggle.addEventListener("click", () => {
  navbarMenu.classList.toggle("open");
});

navbarMenu.addEventListener("click", () => {
  navbarMenu.classList.remove("open");
});
