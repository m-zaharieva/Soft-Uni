import { html } from '../node_modules/lit-html/lit-html.js';
import events from './events.js';

let cardTemplate = (cat) => {
    return html`
    <li>
        <img src="./images/${cat.imageLocation}.jpg" width="250" height="250" alt="Card image cap">
        <div class="info">
            <button class="showBtn" @click=${events.showCodeHandler}>Show status code</button>
            <div class="status" style="display: none" id="${cat.id}">
                <h4>Status Code: ${cat.statusCode}</h4>
                <p>${cat.statusMessage}</p>
            </div>
        </div>
    </li>
    `
}

let ulTemplate = (el) => {
    return html`
    <ul>${el}</ul>
    `
}

let templates = {
    cardTemplate,
    ulTemplate
}

export default templates;