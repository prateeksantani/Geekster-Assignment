const pokeTypeUrl =  `http://pokeapi.co/api/v2/type/`;  //base Url for fetching the type

const typeParams = new URLSearchParams (window.location.search) //gives the ?queryString

// URL Search Parsms Search " built in JS objecs that makes it easy"

const typeSearch = typeParams.get('type');



const pokedex = document.getElementById('pokedex')

const pokemonSearchForm = document.querySelector('pokemon-search-form')

const pokemonTypeFilter = document.querySelector('pokemon-type-filter')

let uniqueTypes = new Set();  // set is unique

//API fetch()

const fetchPokemon = () => {
  const promises = [];

  for(let i = 1; i <= 151; i++) {
  const pokemonUrl = `http://pokeapi.co/api/v2/pokemon/${i}`;
   promises.push( fetch(pokemonUrl).then(response => response.json()));
  }
}