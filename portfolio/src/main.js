//Header에 페이지 아래로 스크롤시 다크 스타일링 적용
function scrollHeader() {
  const header = document.querySelector(".header");
  const headerHeight = header.getBoundingClientRect().height;
  if (window.scrollY > headerHeight) {
    header.classList.add("header--dark");
  } else {
    header.classList.remove("header--dark");
  }
  header.style.backgoundColor = `green`;
}

document.addEventListener("scroll", scrollHeader);
