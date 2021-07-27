import { render } from "../node_modules/lit-html/lit-html.js";
import { cats } from "./catSeeder.js";
import templates from "./templates.js";


function setUp(cats) {
    let allLiEl = [];
    cats.forEach(cat => {
        let liElement = templates.cardTemplate(cat);
        allLiEl.push(liElement);
    });
    let result = templates.ulTemplate(allLiEl);
    let parentElement = document.querySelector('#allCats');
    render(result, parentElement);
}

setUp(cats);

