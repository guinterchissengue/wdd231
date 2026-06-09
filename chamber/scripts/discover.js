// ===== Discover page logic =====
// Element references
const container = document.querySelector("#attractions-container");
const visitorMessage = document.querySelector("#visitor-message");

// ----- Responsive mobile navigation menu toggle (wayfinding) -----
const menuBtn = document.querySelector("#menuBtn");
const navMenu = document.querySelector("#navMenu");

if (menuBtn && navMenu) {
    menuBtn.addEventListener("click", () => {
        const isOpen = navMenu.classList.toggle("open");
        // Keep the button's accessibility state in sync for screen readers
        menuBtn.setAttribute("aria-expanded", isOpen ? "true" : "false");
    });
}

// ----- Custom visitor message using localStorage -----
// Stores the date of the last visit and shows an appropriate message.
function showVisitorMessage() {
    if (!visitorMessage) return;

    const now = Date.now();
    const lastVisit = localStorage.getItem("lastVisit");
    let message = "";

    if (!lastVisit) {
        // First-ever visit
        message = "Welcome! Let us know if you have any questions.";
    } else {
        // Difference between now and the last stored visit, in whole days
        const diffDays = Math.floor((now - Number(lastVisit)) / (1000 * 60 * 60 * 24));

        if (diffDays < 1) {
            message = "Back so soon! Awesome!";
        } else {
            message = `You last visited ${diffDays} ${diffDays === 1 ? "day" : "days"} ago.`;
        }
    }

    visitorMessage.textContent = message;
    // Save the current visit date for the next time the page loads
    localStorage.setItem("lastVisit", now.toString());
}

// ----- Build the 8 cards from the JSON data file -----
async function loadAttractions() {
    if (!container) return;

    try {
        // The JSON data file lives in the data folder
        const response = await fetch("data/discover.json");
        if (!response.ok) throw new Error("Failed to fetch attractions data");

        const attractions = await response.json();

        container.innerHTML = "";

        attractions.forEach((attraction, index) => {
            const card = document.createElement("article");
            card.classList.add("card");

            // Map each card to a CSS named grid area (card1, card2, ... card8)
            card.style.gridArea = `card${index + 1}`;

            // Each card has a title, address, description, photo and a "Learn More" button.
            // The image uses loading="lazy" to defer offscreen images.
            card.innerHTML = `
                <img
                    src="images/${attraction.image}"
                    alt="${attraction.name}"
                    loading="lazy"
                    width="300"
                    height="200">
                <h2>${attraction.name}</h2>
                <address>${attraction.address}</address>
                <p>${attraction.description}</p>
                <button class="learn-more-btn">Learn More</button>
            `;

            container.appendChild(card);
        });
    } catch (error) {
        console.error(error);
        container.innerHTML = "<p>Unable to load attractions.</p>";
    }
}

// ----- Footer dynamic content -----
const yearSpan = document.querySelector("#year");
const modifiedSpan = document.querySelector("#lastModified");
if (yearSpan) yearSpan.textContent = new Date().getFullYear();
if (modifiedSpan) modifiedSpan.textContent = document.lastModified;

// ----- Initialize components -----
showVisitorMessage();
loadAttractions();
