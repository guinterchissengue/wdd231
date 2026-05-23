// Selecting important elements from the HTML page
// ------------------------------------------------------
const container = document.querySelector("#members-container");

// Buttons used to switch between Grid and List view
const gridButton = document.querySelector("#gridBtn");
const listButton = document.querySelector("#listBtn");


// ------------------------------------------------------
// Local business/member data
// ------------------------------------------------------

// To avoid that issue and allow the project to run
// offline without Live Server, the data is now stored
// directly inside JavaScript.

const members = [

    {
        name: "Mercado Municipal de Maxixe",
        address: "Maxixe, Inhambane",
        phone: "+258 84 000 0001",
        website: "",
        image: "mercado.jpg",
        membership: 2
    },

    {
        name: "Terminal de Ferry de Maxixe",
        address: "Baía de Inhambane",
        phone: "+258 84 000 0002",
        website: "",
        image: "ferry.jpg",
        membership: 1
    },

    {
        name: "Hospital da Maxixe",
        address: "Maxixe, Inhambane",
        phone: "+258 84 000 0003",
        website: "",
        image: "chicuque.jpg",
        membership: 2
    },

    {
        name: "Catedral de Inhambane",
        address: "Cidade de Inhambane",
        phone: "+258 84 000 0004",
        website: "",
        image: "catedral.jpg",
        membership: 3
    },

    {
        name: "Mercado Central de Inhambane",
        address: "Cidade de Inhambane",
        phone: "+258 84 000 0005",
        website: "",
        image: "m-central-inhambane.jpg",
        membership: 2
    },

    {
        name: "Aeroporto de Inhambane",
        address: "Cidade de Inhambane",
        phone: "+258 84 000 0006",
        website: "",
        image: "aeroporto.jpg",
        membership: 1
    },

    {
        name: "Praia do Tofo",
        address: "Tofo, Inhambane",
        phone: "+258 84 000 0007",
        website: "",
        image: "beach.jpg",
        membership: 3
    }

];


// ------------------------------------------------------
// Function responsible for displaying the members
// ------------------------------------------------------

// This function receives a parameter called "view"

function displayMembers(view) {

    // Before displaying new content,
    // clear everything already inside the container
    container.innerHTML = "";

    // Go through each member one by one
    members.forEach(member => {

        // Create a new article element for every member
        const card = document.createElement("article");


        // --------------------------------------------------
        // LIST VIEW
        // --------------------------------------------------

        if (view === "list") {

            // Add the CSS class used for list styling
            card.classList.add("list-view");

            // Insert member information into the article
            card.innerHTML = `
                <h2>${member.name}</h2>

                <p>
                    <strong>Address:</strong>
                    ${member.address}
                </p>

                <p>
                    <strong>Phone:</strong>
                    ${member.phone || "Phone not available"}
                </p>
            `;
        }


        // --------------------------------------------------
        // GRID VIEW
        // --------------------------------------------------

        else {

            card.classList.add("card");
            card.innerHTML = `

                <img
                    src="images/${member.image}"
                    alt="${member.name}"
                    loading="lazy"
                >

                <h2>${member.name}</h2>

                <p>
                    <strong>Address:</strong>
                    ${member.address}
                </p>

                <p>
                    <strong>Phone:</strong>
                    ${member.phone || "Phone not available"}
                </p>

                ${
                    member.website

                    // If the business has a website,
                    // display the link
                    ? `
                        <a
                            href="${member.website}"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Visit Website
                        </a>
                    `

                    // Otherwise show a simple message
                    : `
                        <p>No website available</p>
                    `
                }
            `;
        }

        // Add the finished card/list item to the page
        container.appendChild(card);

    });
}


// ------------------------------------------------------
// Button interactions
// ------------------------------------------------------

gridButton.addEventListener("click", () => {

    displayMembers("grid");

});


listButton.addEventListener("click", () => {

    displayMembers("list");

});


// ------------------------------------------------------
// Footer information
// ------------------------------------------------------

document.querySelector("#year").textContent =
    new Date().getFullYear();


// Display the last modification date of the document
document.querySelector("#lastModified").textContent =
    document.lastModified;


// ------------------------------------------------------
// Initial page load
// ------------------------------------------------------
displayMembers("grid");