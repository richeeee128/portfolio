//Header에 페이지 아래로 스크롤시 다크 스타일링 적용
document.addEventListener("scroll", () => {
  const header = document.querySelector(".header");
  const headerHeight = header.getBoundingClientRect().height;
  const scrollY = window.scrollY;
  if (scrollY > headerHeight) {
    header.classList.add("header--dark");
  } else {
    header.classList.remove("header--dark");
  }
});

//스크롤 시 Home 섹션을 투명하게 처리함
document.addEventListener("scroll", () => {
  const home = document.querySelector(".home__container");
  const homeRect = home.getBoundingClientRect();
  const homeHeight = homeRect.height;
  home.style.opacity = 1 - window.scrollY / homeHeight;
});
