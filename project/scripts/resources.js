// Load study tips from JSON and display each as a card; click opens dialog with details.
import { setupMenu } from "./menu.js";

const container = document.querySelector(`#resourceContainer`);
const modal = document.querySelector(`#resourceModal`);
const modalTitle = document.querySelector(`#modalTitle`);
const modalText = document.querySelector(`#modalText`);
const closeModal = document.querySelector(`#closeModal`);

// Same shared menu behaviour as the rest of the site.
setupMenu();
// Creates a resource card using a template literal for cleaner, readable markup.
function buildResourceCard(resource) {
  const card = document.createElement(`article`);
  card.classList.add(`resource-card`);

  card.innerHTML = `
    <h2>${resource.title}</h2>
    <p><strong>Category:</strong> ${resource.category}</p>
    <p><strong>Difficulty:</strong> ${resource.difficulty}</p>
    <p><strong>Benefit:</strong> ${resource.benefit}</p>
    <button class="button" type="button">View Details</button>
  `;

 // Insert full description into reusable modal and display when a card is clicked.
  const button = card.querySelector(`button`);
  button.addEventListener(`click`, () => {
    modalTitle.textContent = `${resource.title}`;
    modalText.textContent = `${resource.description}`;
    modal.showModal();
  });

  return card;
}

// Fetch and render data asynchronously; errors are handled with try/catch and a friendly message.
async function displayResources() {
  try {
    const response = await fetch(`data/resources.json`);
    const resources = await response.json();

    // Clear the "Loading..." placeholder before we add the real cards.
    container.innerHTML = ``;

    // Skip any half-finished entries, then append a card for each valid one.
    resources
      .filter((resource) => resource.title && resource.description)
      .forEach((resource) => {
        container.appendChild(buildResourceCard(resource));
      });
  } catch (error) {
    container.innerHTML = `
      <p>Unable to load resources. Please try again later.</p>
    `;
    console.error(error);
  }
}

// Let the user close the dialog with the button inside it.
if (closeModal) {
  closeModal.addEventListener(`click`, () => {
    modal.close();
  });
}

displayResources();
