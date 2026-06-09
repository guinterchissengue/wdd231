// Footer information
document.querySelector("#year").textContent = new Date().getFullYear();
document.querySelector("#lastModified").textContent = document.lastModified;

// Responsive mobile navigation menu toggle
const menuBtn = document.querySelector('#menuBtn');
const navMenu = document.querySelector('#navMenu');

if (menuBtn && navMenu) {
    menuBtn.addEventListener('click', () => {
        navMenu.classList.toggle('open');
    });
}

// ================= WEATHER =================
const apiKey = "YOUR_API_KEY";
const lat = -23.86;
const lon = 35.38;

const tempEl = document.querySelector("#temp");
const descEl = document.querySelector("#desc");
const forecastEl = document.querySelector("#forecast");

function showLoadingWeather() {
    tempEl.textContent = "Loading weather...";
    descEl.textContent = "";
}

async function loadWeather() {
    showLoadingWeather();
    try {
        const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`;
        const response = await fetch(url);
        if (!response.ok) throw new Error("Weather API failed");
        const data = await response.json();

        tempEl.textContent = `${Math.round(data.main.temp)}°C`;
        descEl.textContent = data.weather[0].description;
    } catch (error) {
        console.error(error);
        tempEl.textContent = "N/A";
        descEl.textContent = "Weather unavailable";
    }
}

async function loadForecast() {
    if (!forecastEl) return;
    forecastEl.innerHTML = "<p>Loading forecast...</p>";
    try {
        const url = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`;
        const response = await fetch(url);
        if (!response.ok) throw new Error("Forecast API failed");
        const data = await response.json();

        forecastEl.innerHTML = "";
        // Get 3-day forecast data at 24-hour intervals
        for (let i = 8; i < 32; i += 8) {
            const item = data.list[i];
            const card = document.createElement("div");
            card.classList.add("forecast-card");
            card.innerHTML = `
                <p class="day">${new Date(item.dt_txt).toDateString()}</p>
                <p class="temp">${Math.round(item.main.temp)}°C</p>
            `;
            forecastEl.appendChild(card);
        }
    } catch (error) {
        console.error(error);
        forecastEl.innerHTML = "<p>Forecast unavailable</p>";
    }
}

async function loadSpotlights() {
    const container = document.querySelector("#spotlights");
    if (!container) return;
    container.innerHTML = "<p>Loading featured members...</p>";

    try {
        const response = await fetch("data/members.json");
        if (!response.ok) throw new Error("Members file not found");
        const members = await response.json();

        // Exclude Gold and Silver membership types from the results
        const eligible = members.filter(m => m.membership >= 2);
        const shuffled = eligible.sort(() => Math.random() - 0.5);
        const selected = shuffled.slice(0, 3);

        container.innerHTML = "";
        selected.forEach(member => {
            const card = document.createElement("div");
            card.classList.add("card", "spotlight-card");
            card.innerHTML = `
                <h2>${member.name}</h2>
                <p>${member.address}</p>
                <p>${member.phone}</p>
                <span class="badge">
                    ${member.membership === 3 ? "Gold Member" : "Silver Member"}
                </span>
            `;
            container.appendChild(card);
        });
    } catch (error) {
        console.error(error);
        container.innerHTML = "<p>Spotlights unavailable</p>";
    }
}

// Initialize components
loadWeather();
loadForecast();
loadSpotlights();
