import { html } from '../node_modules/lit-html/lit-html.js';

let townTemplate = (town) => html`
            <li>${town}</li>
        `;

let ulTemplate = (towns) => html`
        <ul>
            ${towns.map(t => townTemplate(t))}
        </ul>
    `;

let templates = {
    ulTemplate,
}
export default templates;