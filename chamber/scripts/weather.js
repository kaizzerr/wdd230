const currentTemp = document.querySelector('#current-temp');
const weatherDesc = document.querySelector('#weather-desc');
const weatherIcon = document.querySelector('#weather-icon');
const cityLocation = document.querySelector('#location');
const weatherForecast = document.getElementById('forecast');

const currentWeatherUrl = 'https://api.openweathermap.org/data/2.5/weather?lat=51.0447&lon=-114.0719&units=metric&appid=b73f6933314bb18a4903b05abd559ed4';
const weatherForecastUrl = 'https://api.openweathermap.org/data/2.5/forecast?lat=51.0447&lon=-114.0719&units=metric&cnt=9&appid=b73f6933314bb18a4903b05abd559ed4';

async function apiFetch() {
    try {
        const response = await fetch(currentWeatherUrl);
        if (response.ok) {
            const data = await response.json();
            displayResults(data);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.error(error);
    }
}

function displayResults(data) {
    const temp = data.main.temp;
    const description = data.weather[0].description;
    const iconCode = data.weather[0].icon;
    const city = data.name;

    currentTemp.innerHTML = `${temp}&deg;C`;
    weatherDesc.textContent = description.charAt(0).toUpperCase() + description.slice(1);
    cityLocation.textContent = city;

    const iconUrl = `https://openweathermap.org/img/w/${iconCode}.png`;

    weatherIcon.setAttribute('src', iconUrl);
    weatherIcon.setAttribute('alt', description);
}

async function fetchWeatherForecast() {
    try {
        const response = await fetch(weatherForecastUrl);
        if (response.ok) {
            const data = await response.json();
            displayWeatherForecast(data);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.error("Error fetching forecast", error);
    }
}

function displayWeatherForecast(data) {
    const forecast = data.list;

    if (forecast && forecast.length > 0) {
        weatherForecast.innerHTML = forecast.slice(0, 9).map((timeSlot) => {
            const date = new Date(timeSlot.dt * 1000);
            const time = date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
            const temp = timeSlot.main.temp;
            const description = timeSlot.weather[0].description;
            const iconCode = timeSlot.weather[0].icon;
            const iconUrl = `https://openweathermap.org/img/w/${iconCode}.png`;

            return `
                    <div class="forecast-section">
                        <p>${time}</p>
                        <img src="${iconUrl}" alt="${description}">
                        <p>${temp}&deg;C</p>
                        <p>${description.charAt(0).toUpperCase() + description.slice(1)}</p>
                    </div>
                `;
        }).join('');
    } else {
        console.error("No forecast data available");
    }
}

apiFetch();
fetchWeatherForecast();