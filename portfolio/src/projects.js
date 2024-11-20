"use strict";

//프로젝트 필터링
const projectsContainer = document.querySelector(".projects");
const categories = document.querySelector(".categories");
const projects = document.querySelectorAll(".project");
categories.addEventListener("click", (event) => {
  const fillter = event.target.dataset.category;
  if (fillter == null) {
    return;
  }

  handleActiveSelection(event.target);
  filterProjects(fillter);
});

function handleActiveSelection(target) {
  const active = document.querySelector(".category--selected");
  active.classList.remove("category--selected");
  target.classList.add("category--selected");
}

function filterProjects(fillter) {
  projectsContainer.classList.add("anim-out");
  projects.forEach((project) => {
    if (fillter === "all" || fillter === project.dataset.type) {
      project.style.display = "block";
    } else {
      project.style.display = "none";
    }
  });
  setTimeout(() => {
    projectsContainer.classList.remove("anim-out");
  }, 250);
}
