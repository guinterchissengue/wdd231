// Import attractions data
import { attractions } from "../data/discover.mjs";

// Container for cards
const container = document.querySelector("#attractions-container");

// Visitor message
const visitorMessage = document.querySelector("#visitor-message");

// Display visitor message based on localStorage
function showVisitorMessage() {
    const now = Date.now();
    const lastVisit = localStorage.getItem("lastVisit");
    let message = "";

    if (!lastVisit) {
        message = "Welcome! Let us know if you have any questions.";
    } else {
        const diffDays = Math.floor((now - lastVisit) / (1000 * 60 * 60 * 24));
        if (diffDays < 1) {
            message = "Back so soon! Awesome!";
        } else {
            message = `You last visited ${diffDays} ${diffDays === 1 ? "day" : "days"} ago.`;
        }
    }

    visitorMessage.textContent = message;

    // Update localStorage
    localStorage.setItem("lastVisit", now);
}

// Display attractions cards
function displayAttractions() {
    container.innerHTML = "";

    attractions.forEach(attraction => {
        const card = document.createElement("article");
        card.classList.add("card");

        card.innerHTML = `
            <img src="images/${attraction.image}" 
                 alt="${attraction.name}" 
                 loading="lazy" 
                 width="300" 
                 height="200">
            <h2>${attraction.name}</h2>
            <address>${attraction.address}</address>
            <p>${attraction.description}</p>
            <button>Learn More</button>
        `;

        container.appendChild(card);
    });
}

// Footer info
document.querySelector("#year").textContent = new Date().getFullYear();
document.querySelector("#lastModified").textContent = document.lastModified;

// Initialize page
showVisitorMessage();
displayAttractions();