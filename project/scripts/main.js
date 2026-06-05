// This file controls the home page menu and the visit message.
const menuButton = document.querySelector(`#menuButton`);
const mainNav = document.querySelector(`#mainNav`);
const visitMessage = document.querySelector(`#visitMessage`);

function toggleMenu() {
  mainNav.classList.toggle(`open`);

  const isOpen = mainNav.classList.contains(`open`);
  menuButton.setAttribute(`aria-expanded`, `${isOpen}`);
}

function updateVisitCount() {
  const visitCount = Number(localStorage.getItem(`visitCount`)) || 0;
  const newVisitCount = visitCount + 1;

  localStorage.setItem(`visitCount`, `${newVisitCount}`);

  if (visitMessage) {
    visitMessage.textContent = `You have visited this website ${newVisitCount} time(s) on this browser.`;
  }
}

if (menuButton && mainNav) {
  menuButton.addEventListener(`click`, toggleMenu);
}

updateVisitCount();