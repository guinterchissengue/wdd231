// Read form values from URL query string and display a submission summary.
import { setupMenu } from "./menu.js";

const summaryList = document.querySelector(`#summaryList`);

// Shared navigation again.
setupMenu();

// Grab everything that came through in the URL.
const params = new URLSearchParams(window.location.search);

// Array of label-field pairs used to generate the form summary dynamically.
const fields = [
  { key: `name`, label: `Name` },
  { key: `email`, label: `Email` },
  { key: `subject`, label: `Favorite Subject` },
  { key: `message`, label: `Study Goal` },
];

if (summaryList) {
// Build a definition list from only the fields the user completed.
  const rows = fields
    .filter((field) => params.get(field.key))
    .map(
      (field) => `
        <dt>${field.label}</dt>
        <dd>${params.get(field.key)}</dd>
      `
    )
    .join(``);

// Show a note if no form data was submitted to avoid an empty box.
  summaryList.innerHTML = rows
    ? rows
    : `<dd>No form data was found in the link.</dd>`;
}
