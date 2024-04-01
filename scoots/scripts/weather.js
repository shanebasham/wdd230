<<<<<<< HEAD
// Fetch weather data from openweathermap.org
fetch('https://api.openweathermap.org/data/2.5/weather?q=island&appid=e3c029f95267a6d1e77de21834a8f433&units=metric')
.then(response => response.json())
.then(data => {
  document.getElementById('weather-data').innerHTML = `
    <p>Current Temperature: ${data.main.temp}°C</p>
    <p>Current Humidity: ${data.main.humidity}%</p>
    <p>Next Day's Forecasted Temperature at 3:00pm: ${data.main.temp}°C</p>
    <p>Weather: ${data.weather[0].main}</p>
    <p>Description: ${data.weather[0].description}</p>
    <img src="http://openweathermap.org/img/wn/${data.weather[0].icon}.png" alt="Weather Icon">
  `;
});
=======
const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');
const url = 'https://api.openweathermap.org/data/2.5/forecast?lat=41.323&lon=19.81&appid={d91ac30e3a23c4e0472f163688920ba0}';

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
        console.log(error);
    }
  }
  
  apiFetch();

  
function displayResults(data) {
    currentTemp.innerHTML = `${data._____}&deg;F`;
    const iconsrc = `https://openweathermap.org/img/w/${______}.___`;
    let desc = data.weather[0].______;
    weatherIcon.setAttribute('___', _____);
    weatherIcon.setAttribute('___', _____);
    captionDesc.textContent = `${desc}`;
  }
>>>>>>> 3602172e894db010dbd557f10b898f854c44d006
