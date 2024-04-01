// Close banner
const banner = document.getElementById('banner');
const bannerCloseButton = document.getElementById('banner-close-button');

bannerCloseButton.addEventListener('click', () => {
    banner.style.display = 'none';
});

// Display today's high temperature in the message
fetch('https://api.openweathermap.org/data/2.5/forecast?q=island&appid=e3c029f95267a6d1e77de21834a8f433&units=metric')
.then(response => response.json())
.then(data => {
  document.getElementById('high-temp').innerText = data.list[0].main.temp_max;
});