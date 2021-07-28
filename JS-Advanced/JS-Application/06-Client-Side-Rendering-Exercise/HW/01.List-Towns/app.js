import {html, render} from "./node_modules/lit-html/lit-html.js"

let button = document.querySelector('#btnLoadTowns').addEventListener('click',getTowns);

function getTowns(e){

 e.preventDefault();

let form = new FormData(document.querySelector('.content'));

let formTowns = form.get('towns');

   
let towns = Array.from(formTowns).join("");

towns = towns.split(', ');
    
let townsDiv = document.getElementById('root');

const template = (t) =>html `
<ul>
    ${t.map((town) => html`
        <li>${town} </li>
    `)}
</ul>
`

render(template(towns),townsDiv);
}






