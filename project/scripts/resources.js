// This page loads study resources from a JSON file and displays them as cards.
const menuButton = document.querySelector(`#menuButton`);
const mainNav = document.querySelector(`#mainNav`);
const container = document.querySelector(`#resourceContainer`);
const modal = document.querySelector(`#resourceModal`);
const modalTitle = document.querySelector(`#modalTitle`);
const modalText = document.querySelector(`#modalText`);
const closeModal = document.querySelector(`#closeModal`);

function toggleMenu() {
  mainNav.classList.toggle(`open`);

  const isOpen = mainNav.classList.contains(`open`);
  menuButton.setAttribute(`aria-expanded`, `${isOpen}`);
}

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

  const button = card.querySelector(`button`);

  button.addEventListener(`click`, () => {
    modalTitle.textContent = `${resource.title}`;
    modalText.textContent = `${resource.description}`;
    modal.showModal();
  });

  return card;
}

async function displayResources() {
  try {
    const response = await fetch(`data/resources.json`);
    const resources = await response.json();

    container.innerHTML = ``;

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

if (menuButton && mainNav) {
  menuButton.addEventListener(`click`, toggleMenu);
}

if (closeModal) {
  closeModal.addEventListener(`click`, () => {
    modal.close();
  });
}

displayResources();