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