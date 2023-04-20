const form = document.querySelector("form");
const weatherInfo = document.querySelector(".weather-info");
const tempToggle = document.querySelector(".temp-toggle");
const hamburgerMenu = document.querySelector(".hamburger-menu");
const navUl = document.querySelector("nav ul");

let tempUnit = 'C';

hamburgerMenu.addEventListener("click", function () {
    hamburgerMenu.classList.toggle('open');
    if (navUl.style.display === "none" || navUl.style.display === "") {
        navUl.style.display = "flex";
    } else {
        navUl.style.display = "none";
    }
});

if (weatherInfo) {
    form.addEventListener("submit", async (e) => {
        e.preventDefault();
        const city = form.city.value;
        const weatherData = await fetchWeatherData(city);
        updateWeatherInfo(weatherData);
    });

    tempToggle.addEventListener("click", () => {
        const newTempUnit = tempUnit === 'C' ? 'F' : 'C';
        tempUnit = newTempUnit;
        const city = form.city.value;
        fetchWeatherData(city).then(updateWeatherInfo);
    });
}

async function fetchWeatherData(city) {
    const response = await fetch(`/get-weather?city=${city}`);
    const data = await response.json();
    return data;
}

function celsiusToFahrenheit(celsius) {
    return (celsius * 9 / 5) + 32;
}

function updateWeatherInfo(weatherData) {
    if (weatherData) {
        const temperature = weatherData.temperature;
        const unit = tempUnit === 'C' ? '°C' : '°F';
        const tempValue = tempUnit === 'C' ? temperature : celsiusToFahrenheit(temperature);
        weatherInfo.style.display = "block";
        weatherInfo.innerHTML = `
            <h2>${weatherData.city}</h2>
            <p>${tempValue.toFixed(2)}${unit}</p>
            <p>${weatherData.description}</p>
            <p>Humidity: ${weatherData.humidity}%</p>
            <p>Wind Speed: ${weatherData.wind_speed} m/s</p>
            <p>Pressure: ${weatherData.pressure} hPa</p>
            <p>Sunrise: ${weatherData.sunrise}</p>
            <p>Sunset: ${weatherData.sunset}</p>
        `;
        tempToggle.style.display = "block";
    } else {
        weatherInfo.innerHTML = "<p>Failed to fetch weather data. Please try again.</p>";
        tempToggle.style.display = "none";
    }
}
