const url = "data/rentals.json";
const cards = document.querySelector('#cards');

async function getPricingData(url) {
    const response = await fetch(url);
    const data = await response.json();
    displayPricing(data.pricing);
}
  
getPricingData(url);

const displayPricing = (pricing) => {
    pricing.forEach((price) => {
        const card = document.createElement("section");
        const name = document.createElement("h3");
        const reservation = document.createElement("h5");
        const walkin = document.createElement("h5");
        const max = document.createElement("h5");
        const img = document.createElement("img");

        name.textContent = `${price.name}`;
        reservation.textContent = `RESERVATION Half Day(3 hrs): $${price.reservation.half}
        Full Day: $${price.reservation.full}`;
        walkin.textContent = `WALK-IN Half Day(3 hrs): $${price.walkin.half}
        Full Day: $${price.walkin.full}`;
        max.textContent = `Max Persons: ${price.max}`;
        img.setAttribute('src', price.image);
        img.setAttribute('alt', `Image of ${price.name}`);
        img.setAttribute('loading', 'lazy');
        img.setAttribute('width', '340');
        img.setAttribute('height', '440');

        card.appendChild(name);
        card.appendChild(reservation);
        card.appendChild(walkin);
        card.appendChild(max);
        card.appendChild(img);

        cards.appendChild(card);
    });
};