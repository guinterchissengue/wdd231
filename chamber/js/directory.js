const container = document.querySelector("#members-container");
const gridBtn = document.querySelector("#gridBtn");
const listBtn = document.querySelector("#listBtn");

// store the JSON 
let membersData = [];

// fetch members 
async function getMembers() {
  try {
    const response = await fetch("data/members.json");

    // check in 
    if (!response.ok) {
      throw new Error("Failed to load members data");
    }

    membersData = await response.json();

    // default 
    displayMembers("grid");

  } catch (error) {
    console.error("Error loading members:", error);
  }
}

// render 
function displayMembers(view) {
  container.innerHTML = "";

  membersData.forEach((member) => {

    const card = document.createElement("div");

    // switch 
    if (view === "list") {
      card.className = "list";

      card.innerHTML = `
        <h3>${member.name}</h3>
        <p>${member.phone}</p>
        <p>${member.address}</p>
      `;

    } else {
      card.className = "card";

      card.innerHTML = `
        <img src="images/${member.image}" alt="${member.name}" loading="lazy">
        <h3>${member.name}</h3>
        <p>${member.address}</p>
        <p>${member.phone}</p>
        <a href="${member.website}" target="_blank">Visit website</a>
      `;
    }

    container.appendChild(card);
  });
}

// event for view switching
gridBtn.addEventListener("click", () => displayMembers("grid"));
listBtn.addEventListener("click", () => displayMembers("list"));

// footer 
document.querySelector("#year").textContent = new Date().getFullYear();
document.querySelector("#lastModified").textContent = document.lastModified;

// start the app
getMembers();