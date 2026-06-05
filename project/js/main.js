const menuButton = document.querySelector("#menuButton");
const mainNav = document.querySelector("#mainNav");

if (menuButton) {

    menuButton.addEventListener("click", () => {

        mainNav.classList.toggle("open");

    });
}

const visitCount = Number(localStorage.getItem("visitCount")) || 0;

localStorage.setItem(
    "visitCount",
    visitCount + 1
);