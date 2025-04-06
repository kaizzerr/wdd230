const currentTemp = document.querySelector('#current-temp');
const weatherDesc = document.querySelector('#weather-desc');
const weatherIcon = document.querySelector('#weather-icon');
const cityLocation = document.querySelector('#location'); 

const url = 'https://api.openweathermap.org/data/2.5/weather?lat=51.04615596342734&lon=-114.09611798114804&units=metric&appid=b73f6933314bb18a4903b05abd559ed4';

async function apiFetch() {
    try {
        const response = await fetch(url);
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

apiFetch();