const menuButton = document.querySelector("#menuButton");
const nav = document.querySelector("#mainNav");

if (menuButton) {

    menuButton.addEventListener("click", () => {

        nav.classList.toggle("open");

    });
}

const container =
document.querySelector("#resourceContainer");

const modal =
document.querySelector("#resourceModal");

const modalTitle =
document.querySelector("#modalTitle");

const modalText =
document.querySelector("#modalText");

const closeModal =
document.querySelector("#closeModal");

async function displayResources() {

    try {

        const response =
        await fetch("./data/resources.json");

        const data =
        await response.json();

        container.innerHTML = "";

        data.forEach(resource => {

            const card =
            document.createElement("article");

            card.classList.add("resource-card");

            card.innerHTML = `
                <h2>${resource.title}</h2>
                <p><strong>Category:</strong> ${resource.category}</p>
                <p><strong>Difficulty:</strong> ${resource.difficulty}</p>
                <p><strong>Benefit:</strong> ${resource.benefit}</p>
                <button class="button">
                    View Details
                </button>
            `;

            const button =
            card.querySelector("button");

            button.addEventListener("click", () => {

                modalTitle.textContent =
                resource.title;

                modalText.textContent =
                resource.description;

                modal.showModal();

            });

            container.appendChild(card);

        });

    } catch (error) {

        container.innerHTML = `
            <p>
                Unable to load resources.
            </p>
        `;

        console.error(error);
    }
}

if (closeModal) {

    closeModal.addEventListener("click", () => {

        modal.close();

    });
}

displayResources();