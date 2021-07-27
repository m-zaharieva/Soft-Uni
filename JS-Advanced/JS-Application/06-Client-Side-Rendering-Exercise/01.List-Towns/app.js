import templates from "./templates.js";
import {html, render} from '../node_modules/lit-html/lit-html.js';

let form = document.querySelector('form');
form.addEventListener('submit', renderCitiesHandler);

function renderCitiesHandler(e) {
    e.preventDefault();

    let form = e.target;
    let formData = new FormData(form);
    let towns = formData.get('towns');
    let townsArray = towns.split(', ');
    let liElements = templates.townsTemplate(townsArray);
    let ulElement = templates.ulTemplate(liElements);
    render(ulElement, document.querySelector('#root'));
}

