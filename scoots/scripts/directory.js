const gridbutton = document.querySelector("#grid");
const listbutton = document.querySelector("#list");
const display = document.querySelector("article");

gridbutton.addEventListener("click", () => {
	display.classList.add("grid");
	display.classList.remove("list");
});

listbutton.addEventListener("click", showList);

function showList() {
	display.classList.add("list");
	display.classList.remove("grid");
}

// -----------------------------------------------------------------------

// img.setAttribute('loading', 'lazy');
//         img.setAttribute('width', '340');
//         img.setAttribute('height', '440');

//         card.appendChild(name);
//         card.appendChild(website);
//         card.appendChild(address);
//         card.appendChild(number);
//         card.appendChild(img);

//         cards.appendChild(card);
//     });
// };



const url = "data/members.json";
const cards = document.querySelector('#cards');

async function getCompaniesData(url) {
    const response = await fetch(url);
    const data = await response.json();
    displayCompanies(data.companies);
}
  
getCompaniesData(url);

const displayCompanies = (companies) => {
    companies.forEach((company) => {
        const card = document.createElement("section");
        const name = document.createElement("h3");
		const website = document.createElement("h5");
        const address = document.createElement("h5");
        const number = document.createElement("h5");
        const img = document.createElement("img");

        name.textContent = `${company.name}`;
        address.textContent = `${company.address.street}, ${company.address.city}`;
        number.textContent = `${company.phone}`;
		website.textContent = `${company.website}`;
        img.setAttribute('src', company.image);
        img.setAttribute('alt', `Image of ${company.name} Logo`);
        img.setAttribute('loading', 'lazy');
        img.setAttribute('width', '340');
        img.setAttribute('height', '440');

        card.appendChild(name);
		card.appendChild(website);
        card.appendChild(address);
        card.appendChild(number);
        card.appendChild(img);

        cards.appendChild(card);
    });
};