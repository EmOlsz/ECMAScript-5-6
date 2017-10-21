const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';

const cities = [];

fetch(endpoint)
    .then(data => data.json())
.then(items => cities.push(...items));

console.log(cities);

function findMatches(wordToMatch, cities) {
    return cities.filter(place => {
            const regexp = new RegExp(wordToMatch, 'gi');
    return place.city.match(regexp) || place.state.match(regexp);
});
}

function displayMatches() {
    const matchArray = findMatches(this.value, cities);
    const newElement = matchArray.map(match => {
            const regex = new RegExp(this.value, 'gi');
    const cityName = match.city.replace(regex, `<span class="hl">${this.value}</span>`);
    const stateName = match.state.replace(regex, `<span class="hl">${this.value}</span>`);
    return `<li><span>${cityName}</span><span>${stateName}</span><span>${match.population}</span></li>`;
}).join('');
    list.innerHTML = newElement;

}

const input = document.querySelector('.search');
const list = document.querySelector('.suggestions');

input.addEventListener('keyup', displayMatches);