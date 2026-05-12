// Current Year

const today = new Date();

document.getElementById("year").textContent =
    today.getFullYear();

// Last Modified Date

document.getElementById("modified").textContent =
    `Last Updated: ${document.lastModified}`;