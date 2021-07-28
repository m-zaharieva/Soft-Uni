import { html, render } from '../node_modules/lit-html/lit-html.js';
import { messageTemplate, townsTemplate } from './templates.js';
import { towns } from './towns.js';

let townsDiv = document.getElementById('towns');
let baseTowns = towns.map(t => ({ name: t }));
render(townsTemplate(baseTowns), townsDiv);

let searchButton = document.getElementById('search-btn');
searchButton.addEventListener('click', search);


function search(e) {
   let input = document.getElementById('searchText');
   let searchText = input.value.toLowerCase();

   let allTowns = towns.map(t => ({ name: t }));
   let matchedTowns = allTowns.filter(t => t.name.toLowerCase().includes(searchText));
   matchedTowns.forEach(t => t.class = 'active');

   render(townsTemplate(allTowns), townsDiv);

   let matches = matchedTowns.length;
   let resultDiv = document.getElementById('result');
   render(messageTemplate(matches), resultDiv);
}




