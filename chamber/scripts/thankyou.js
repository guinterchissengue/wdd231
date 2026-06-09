// Footer configuration rules
document.querySelector("#year").textContent = new Date().getFullYear();
document.querySelector("#lastModified").textContent = document.lastModified;

// Extract submission values from URL parameters
const params = new URLSearchParams(window.location.search);
const results = document.querySelector("#results");

if (results) {
    results.innerHTML = `
        <p><strong>First Name:</strong> ${params.get("firstname") || 'N/A'}</p>
        <p><strong>Last Name:</strong> ${params.get("lastname") || 'N/A'}</p>
        <p><strong>Email:</strong> ${params.get("email") || 'N/A'}</p>
        <p><strong>Phone Number:</strong> ${params.get("phone") || 'N/A'}</p>
        <p><strong>Business Name:</strong> ${params.get("organization") || 'N/A'}</p>
        <p><strong>Application Date:</strong> ${params.get("timestamp") || 'N/A'}</p>
    `;
}