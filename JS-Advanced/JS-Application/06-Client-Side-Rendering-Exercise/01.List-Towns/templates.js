import { html } from '../node_modules/lit-html/lit-html.js';

let townsTemplate = (array) => {
    let result = [];
    array.forEach(town => {
        result.push(html`
            <li>${town}</li>
        `);
    });
    return result;
}

let ulTemplate = (body) => {
    let parentUl =
        html`
        <ul>${body}</ul>
    `
    return parentUl;
}

let templates = {
    townsTemplate,
    ulTemplate,
}
export default templates;