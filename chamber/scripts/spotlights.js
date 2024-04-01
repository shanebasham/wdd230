fetch("data/members.json")
.then(response => response.json())
.then(data => {
    const filteredcompanies = data.companies.filter(company => company.membershipLevel === "gold");
    const shuffle = shuffleArray(filteredcompanies);
    const selectedcompanies = shuffle.slice(0, Math.floor(Math.random() * 2) + 2);

    const spotlightElement = document.querySelector('#spotlights');
    selectedcompanies.forEach(company => {
      const companyElement = document.createElement('div');
      companyElement.classList.add('company');
      companyElement.innerHTML = `
      <img src="${company.image}" alt="${company.name} logo">
        <h2>${company.name}</h2>
        <p>${company.phone}</p>
        <a href="${company.website}">${company.website}</a>`;
      spotlightElement.appendChild(companyElement);
    });
})

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}