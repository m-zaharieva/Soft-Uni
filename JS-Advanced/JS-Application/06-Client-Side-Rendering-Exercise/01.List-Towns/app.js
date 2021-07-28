import templates from "./templates.js";
import { render } from '../node_modules/lit-html/lit-html.js';

let form = document.querySelector('form');
form.addEventListener('submit', renderCitiesHandler);

function renderCitiesHandler(e) {
    e.preventDefault();
    let form = e.target;
    let formData = new FormData(form);
    let towns = formData.get('towns');
    let townsArr = towns.split(', ');
    let ulElement = templates.ulTemplate(townsArr);
    
    render(ulElement, document.querySelector('#root'));
}

