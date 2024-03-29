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
});