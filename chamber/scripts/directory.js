// Main container for all member cards
const container = document.querySelector("#members-container");

// Buttons used to switch layouts
const gridButton = document.querySelector("#gridBtn");
const listButton = document.querySelector("#listBtn");

// Empty array that will receive JSON data
let members = [];


// ======================================================
// Load member data from JSON file
// ======================================================

async function getMembers() {

    try {

        // Fetch data from members.json
        const response = await fetch("data/members.json");

        // Verify if request was successful
        if (!response.ok) {

            throw new Error("Unable to load member data.");

        }

        // Convert JSON into JavaScript objects
        members = await response.json();

        // Display members automatically
        displayMembers("grid");

    }

    catch (error) {

        console.error(error);

        container.innerHTML = `
            <p class="error-message">
                Sorry, member information could not be loaded.
            </p>
        `;
    }
}


// ======================================================
// Display members
// ======================================================

function displayMembers(view) {

    // Clear container before displaying data
    container.innerHTML = "";

    // Loop through all members
    members.forEach(member => {

        // Create article element
        const card = document.createElement("article");


        // ==================================================
        // LIST VIEW
        // ==================================================

        if (view === "list") {

            card.classList.add("list-view");

            card.innerHTML = `

                <h2>${member.name}</h2>

                <p>
                    <strong>Address:</strong>
                    ${member.address}
                </p>

                <p>
                    <strong>Phone:</strong>
                    ${member.phone}
                </p>
            `;
        }


        // ==================================================
        // GRID VIEW
        // ==================================================

        else {

            card.classList.add("card");

            card.innerHTML = `

                <img
                    src="images/${member.image}"
                    alt="${member.name}"
                    loading="lazy"
                    width="300"
                    height="200"
                >

                <h2>${member.name}</h2>

                <p>
                    <strong>Address:</strong>
                    ${member.address}
                </p>

                <p>
                    <strong>Phone:</strong>
                    ${member.phone}
                </p>

                ${
                    member.website

                    ? `
                        <a
                            href="${member.website}"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Visit Website
                        </a>
                    `

                    : `
                        <p>No website available</p>
                    `
                }
            `;
        }

        // Add card to page
        container.appendChild(card);

    });
}


// ======================================================
// Button Events
// ======================================================

// Grid view button
gridButton.addEventListener("click", () => {

    displayMembers("grid");

});


// List view button
listButton.addEventListener("click", () => {

    displayMembers("list");

});


// ======================================================
// Footer Information
// ======================================================

// Current year
document.querySelector("#year").textContent =
    new Date().getFullYear();


// Last modified date
document.querySelector("#lastModified").textContent =
    document.lastModified;


// ======================================================
// Start application
// ======================================================

getMembers();