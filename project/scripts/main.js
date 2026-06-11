// Home page logic: wire up the menu and keep a little "welcome back" counter.
import { setupMenu } from "./menu.js";

const visitMessage = document.querySelector(`#visitMessage`);

// Hook up the responsive navigation (shared across every page).
setupMenu();

// Count site visits using localStorage for persistent tracking.
function updateVisitCount() {
  // Pull the previous value (or start at 0 the very first time around).
  const visitCount = Number(localStorage.getItem(`visitCount`)) || 0;
  const newVisitCount = visitCount + 1;

  // Save the new total back so the next visit picks up where we left off.
  localStorage.setItem(`visitCount`, `${newVisitCount}`);

  // Only the home page actually shows this message, hence the safety check.
  if (visitMessage) {
    visitMessage.textContent = `You have visited this website ${newVisitCount} time(s) on this browser.`;
  }
}

updateVisitCount();
