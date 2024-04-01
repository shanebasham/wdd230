const baseURL = "https://yourgithubusername.github.io/wdd230/";
const linksURL = "https://yourgithubusername.github.io/wdd230/data/links.json";
const links = document.querySelector('#links');

async function getLinks(linksURL) {
    const response = await fetch(linksURL);
    const data = await response.json();
    console.log(data);
    displayLinks(data);
}
  
getLinks(linksURL);

const displayLinks = (weeks) => {
    weeks.forEach((week) => {
        const lesson = document.createElement("p");
        const link = document.createElement("p");

        lesson.textContent = `${lesson}`;
        link.textContent = `${links.url}`;

        link.appendChild(lesson);
        link.appendChild(link);

        week.appendChild(link);
    });
};


const displayProphets = (prophets) => {
    prophets.forEach((prophet) => {
        const card = document.createElement("section");
        const dob = document.createElement("h5");
        const pob = document.createElement("h5");

        dob.textContent = `Date of Birth: ${prophet.birthdate}`;
        pob.textContent = `Place of Birth: ${prophet.birthplace}`;

        card.appendChild(dob);
        card.appendChild(pob);

        cards.appendChild(card);
    });
};