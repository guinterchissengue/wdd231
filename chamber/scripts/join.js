// Current year in footer
document.querySelector("#year").textContent =
new Date().getFullYear();

// Last modified date
document.querySelector("#lastModified").textContent =
document.lastModified;

// Mobile navigation
const menuBtn = document.querySelector("#menuBtn");

const navMenu = document.querySelector("#navMenu");

menuBtn.addEventListener("click", () => {

    navMenu.classList.toggle("open");

});

// Hidden timestamp field
const timestamp = document.querySelector("#timestamp");

// Save current date and time
timestamp.value = new Date().toISOString();