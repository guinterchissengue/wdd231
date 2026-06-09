const container = document.querySelector("#members-container");
const gridButton = document.querySelector("#gridBtn");
const listButton = document.querySelector("#listBtn");
let members = [];

// Responsive mobile navigation menu toggle
const menuBtn = document.querySelector('#menuBtn');
const navMenu = document.querySelector('#navMenu');

if (menuBtn && navMenu) {
    menuBtn.addEventListener('click', () => {
        navMenu.classList.toggle('open');
    });
}

// Load member data from JSON file
async function getMembers() {
    try {
        const response = await fetch("data/members.json");
        if (!response.ok) throw new Error("Unable to load member data.");
        members = await response.json();
        displayMembers("grid");
    } catch (error) {
        console.error(error);
        if (container) {
            container.innerHTML = `
                <p class="error-message">
                    Sorry, member information could not be loaded.
                </p>
            `;
        }
    }
}

// Display members grid or list view dynamically
function displayMembers(view) {
    if (!container) return;
    container.innerHTML = "";

    members.forEach(member => {
        const card = document.createElement("article");

        if (view === "list") {
            card.classList.add("list-view");
            card.innerHTML = `
                <h2>${member.name}</h2>
                <p><strong>Address:</strong> ${member.address}</p>
                <p><strong>Phone:</strong> ${member.phone}</p>
            `;
        } else {
            card.classList.add("card");
            card.innerHTML = `
                <img src="images/${member.image}" alt="${member.name}" loading="lazy" width="300" height="200">
                <h2>${member.name}</h2>
                <p><strong>Address:</strong> ${member.address}</p>
                <p><strong>Phone:</strong> ${member.phone}</p>
                ${member.website ? `<a href="${member.website}" target="_blank" rel="noopener noreferrer">Visit Website</a>` : `<p>No website available</p>`}
            `;
        }
        container.appendChild(card);
    });
}

// Layout Switcher Events
if (gridButton && listButton) {
    gridButton.addEventListener("click", () => displayMembers("grid"));
    listButton.addEventListener("click", () => displayMembers("list"));
}

// Footer details
document.querySelector("#year").textContent = new Date().getFullYear();
document.querySelector("#lastModified").textContent = document.lastModified;

getMembers();
