<<<<<<< HEAD
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
=======
const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const today = new Date();
const dayOfWeek = daysOfWeek[today.getDay()];
const banner = document.getElementById('chamber-banner');

// Only display the banner on Monday, Tuesday, or Wednesday
if (dayOfWeek === 'Monday' || dayOfWeek === 'Tuesday' || dayOfWeek === 'Wednesday') {
    banner.style.display = 'block';
}

// Add a click event listener to the close button to hide the banner
const bannerCloseButton = document.getElementById('banner-close-button');
bannerCloseButton.addEventListener('click', () => {
    banner.style.display = 'none';
>>>>>>> 3602172e894db010dbd557f10b898f854c44d006
});