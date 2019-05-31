const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';

var cities = [];
var searchInput = document.querySelector('.search');
var suggestions = document.querySelector('.suggestions');

fetch(endpoint)
  .then(response => response.json())
  .then(data => {
    cities.push(...data);

    searchInput.addEventListener('input', displayMatches);
  });

function findMatches(wordToMatch, cities) {
  var regex = new RegExp(wordToMatch, 'gi');
  
  return cities.filter(place => {
    var { city, state } = place;

    return city.match(regex) || state.match(regex);
  });
}

function displayMatches() {
  var matchArray = findMatches(event.target.value, cities);

  var html = matchArray.map(({ city, state, population }) => {
    var regex = new RegExp(this.value, 'gi');
    const cityName = city.replace(regex, `<span class="hl">${this.value}</span>`);
    const stateName = state.replace(regex, `<span class="hl">${this.value}</span>`);

    return `
      <li>
        <span class="name">${cityName}, ${stateName}</span>
        <span class="population">${numberWithCommas(population)}</span>
      </li>
    `;
  }).join('');

  suggestions.innerHTML = html;
}

function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}
