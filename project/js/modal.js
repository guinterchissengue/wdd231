const menuButton = document.querySelector("#menuButton");
const nav = document.querySelector("#mainNav");

if (menuButton) {

    menuButton.addEventListener("click", () => {

        nav.classList.toggle("open");

    });
}

const openButton = document.querySelector("#openModal");
const closeButton = document.querySelector("#closeStudyModal");

const modal = document.querySelector("#studyModal");

if (openButton) {

    openButton.addEventListener("click", () => {

        modal.showModal();

    });
}

if (closeButton) {

    closeButton.addEventListener("click", () => {

        modal.close();

    });
}