import { render } from "../node_modules/lit-html/lit-html.js";
import { cats } from "./catSeeder.js";
import { showCodeHandler } from "./events.js";
import { ulTemplate } from "./templates.js";


let parentElement = document.querySelector('#allCats');
render(ulTemplate(cats, showCodeHandler), parentElement);

