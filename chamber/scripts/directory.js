const container = document.querySelector("#members-container");

const gridButton = document.querySelector("#gridBtn");
const listButton = document.querySelector("#listBtn");

let members = [];

async function getMembers() {

    try {

        const response = await fetch("data/members.json");

        if (!response.ok) {
            throw new Error("Unable to load members data.");
        }

        members = await response.json();

        displayMembers("grid");

    } catch (error) {

        console.error("Error:", error);

        container.innerHTML = `
            <p class="error-message">
                Sorry, the directory could not be loaded.
            </p>
        `;
    }
}

function displayMembers(view) {

    container.innerHTML = "";

    members.forEach((member) => {

        const card = document.createElement("article");

        if (view === "list") {

            card.classList.add("list-view");

            card.innerHTML = `
                <h2>${member.name}</h2>
                <p>${member.address}</p>
                <p>${member.phone || "Phone not available"}</p>
            `;

        } else {

            card.classList.add("card");

            card.innerHTML = `
                <img
                    src="images/${member.image}"
                    alt="${member.name}"
                    loading="lazy"
                >

                <h2>${member.name}</h2>

                <p>${member.address}</p>

                <p>${member.phone || "Phone not available"}</p>

                <a href="${member.website}" target="_blank">
                    Visit Website
                </a>
            `;
        }

        container.appendChild(card);
    });
}

gridButton.addEventListener("click", () => {
    displayMembers("grid");
});

listButton.addEventListener("click", () => {
    displayMembers("list");
});

document.querySelector("#year").textContent =
    new Date().getFullYear();

document.querySelector("#lastModified").textContent =
    document.lastModified;

getMembers();