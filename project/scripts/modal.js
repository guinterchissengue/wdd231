// Study Tips page: handles the menu plus the "Weekly Study Plan" dialog.
import { setupMenu } from "./menu.js";

const openButton = document.querySelector(`#openModal`);
const closeButton = document.querySelector(`#closeStudyModal`);
const modal = document.querySelector(`#studyModal`);

// Shared navigation, same as everywhere else.
setupMenu();

// Pop the weekly plan open when the user asks for it.
if (openButton && modal) {
  openButton.addEventListener(`click`, () => {
    modal.showModal();
  });
}

// Let them close it again.
if (closeButton && modal) {
  closeButton.addEventListener(`click`, () => {
    modal.close();
  });
}
