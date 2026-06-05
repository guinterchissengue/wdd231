// This file controls the study tips page menu and weekly plan dialog.
const menuButton = document.querySelector(`#menuButton`);
const mainNav = document.querySelector(`#mainNav`);
const openButton = document.querySelector(`#openModal`);
const closeButton = document.querySelector(`#closeStudyModal`);
const modal = document.querySelector(`#studyModal`);

function toggleMenu() {
  mainNav.classList.toggle(`open`);

  const isOpen = mainNav.classList.contains(`open`);
  menuButton.setAttribute(`aria-expanded`, `${isOpen}`);
}

function openStudyPlan() {
  modal.showModal();
}

function closeStudyPlan() {
  modal.close();
}

if (menuButton && mainNav) {
  menuButton.addEventListener(`click`, toggleMenu);
}

if (openButton && modal) {
  openButton.addEventListener(`click`, openStudyPlan);
}

if (closeButton && modal) {
  closeButton.addEventListener(`click`, closeStudyPlan);
}