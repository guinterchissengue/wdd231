// Footer year
document.querySelector("#year").textContent =
new Date().getFullYear();

// Last modified date
document.querySelector("#lastModified").textContent =
document.lastModified;

// Get submitted data
const params =
new URLSearchParams(window.location.search);

// Results container
const results =
document.querySelector("#results");

// Display submitted information
results.innerHTML = `
<p><strong>First Name:</strong> ${params.get("firstname")}</p>

<p><strong>Last Name:</strong> ${params.get("lastname")}</p>

<p><strong>Email:</strong> ${params.get("email")}</p>

<p><strong>Phone Number:</strong> ${params.get("phone")}</p>

<p><strong>Business Name:</strong> ${params.get("organization")}</p>

<p><strong>Application Date:</strong> ${params.get("timestamp")}</p>
`;