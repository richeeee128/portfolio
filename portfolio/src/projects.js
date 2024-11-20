"use strict";

//프로젝트 필터링
const categories = document.querySelector(".categories");
const projects = document.querySelectorAll(".project");
categories.addEventListener("click", (event) => {
  const fillter = event.target.dataset.category;
  if (fillter == null) {
    return;
  }

  projects.forEach((project) => {
    if (fillter === "all" || fillter === project.dataset.type) {
      project.style.display = "block";
    } else {
      project.style.display = "none";
    }
  });
});
