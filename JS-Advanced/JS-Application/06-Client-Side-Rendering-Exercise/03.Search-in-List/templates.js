import {html} from '../node_modules/lit-html/lit-html.js';

let listItems = (town) => {
    return html ` 
        <li>${town}</li>
        `
}

let ul = (body) => {
    return html `
        <ul>${body}</ul>
    `
}

let templates = {
    listItems,
    ul
}

export default templates;