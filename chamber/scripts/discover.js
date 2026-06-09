const container = document.querySelector("#attractions-container");
const visitorMessage = document.querySelector("#visitor-message");

// Responsive mobile navigation menu toggle
const menuBtn = document.querySelector('#menuBtn');
const navMenu = document.querySelector('#navMenu');

if (menuBtn && navMenu) {
    menuBtn.addEventListener('click', () => {
        navMenu.classList.toggle('open');
    });
}

// Display customized visual visitor message via localStorage tracking
function showVisitorMessage() {
    if (!visitorMessage) return;
    const now = Date.now();
    const lastVisit = localStorage.getItem("lastVisit");
    let message = "";

    if (!lastVisit) {
        message = "Welcome! Let us know if you have any questions.";
    } else {
        const diffDays = Math.floor((now - parseInt(lastVisit)) / (1000 * 60 * 60 * 24));
        if (diffDays < 1) {
            message = "Back so soon! Awesome!";
        } else {
            message = `You last visited ${diffDays} ${diffDays === 1 ? "day" : "days"} ago.`;
        }
    }
    visitorMessage.textContent = message;
    localStorage.setItem("lastVisit", now.toString());
}

// Fetch exactly 8 cards from the generated attractions JSON
async function loadAttractions() {
    if (!container) return;
    try {
        const response = await fetch("data/attractions.json");
        if (!response.ok) throw new Error("Failed to fetch attractions data");
        const attractions = await response.json();

        container.innerHTML = "";

        attractions.forEach((attraction, index) => {
            const card = document.createElement("article");
            card.classList.add("card");
            
            // Explicitly map dynamic elements to CSS Named Grid Areas (card1, card2, etc.)
            card.style.gridArea = `card${index + 1}`;

            card.innerHTML = `
                <img src="images/${attraction.image}" alt="${attraction.name}" loading="lazy" width="300" height="200">
                <h2>${attraction.name}</h2>
                <address>${attraction.address}</address>
                <p>${attraction.description}</p>
                <button class="learn-more-btn">Learn More</button>
            `;
            container.appendChild(card);
        });
    } catch (error) {
        console.error(error);
        container.innerHTML = "<p>Unable to load dynamic cards layout.</p>";
    }
}

// Footer items
document.querySelector("#year").textContent = new Date().getFullYear();
document.querySelector("#lastModified").textContent = document.lastModified;

// Initialize components
showVisitorMessage();
loadAttractions();