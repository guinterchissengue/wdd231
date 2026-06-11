// Shared hamburger menu logic as an ES module; imported by other page scripts to avoid duplication.
export function setupMenu() {
  const menuButton = document.querySelector(`#menuButton`);
  const mainNav = document.querySelector(`#mainNav`);

 // Exit silently if header is missing to avoid console errors.
  if (!menuButton || !mainNav) {
    return;
  }

  menuButton.addEventListener(`click`, () => {
    mainNav.classList.toggle(`open`);

    // Sync button ARIA state with menu visibility for screen readers.
    const isOpen = mainNav.classList.contains(`open`);
    menuButton.setAttribute(`aria-expanded`, `${isOpen}`);
  });
}
