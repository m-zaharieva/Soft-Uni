import { html, render } from '../node_modules/lit-html/lit-html.js';

let tableRow = (data) => {
    return html`
        <tr class="">
            <td>${data.firstName} ${data.lastName}</td>
            <td>${data.email}</td>
            <td>${data.course}</td>
        </tr>
    `
}

let templates = {
    tableRow,
}

export default templates;