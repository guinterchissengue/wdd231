const menuBtn = document.getElementById("menuBtn");

const mainNav = document.getElementById("mainNav");

menuBtn.addEventListener("click", () => {

    mainNav.classList.toggle("open");

    const isOpen = mainNav.classList.contains("open");

    menuBtn.setAttribute("aria-expanded", isOpen);
});