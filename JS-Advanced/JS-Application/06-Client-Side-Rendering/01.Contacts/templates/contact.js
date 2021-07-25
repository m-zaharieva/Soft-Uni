import { html } from '../node_modules/lit-html/lit-html.js';
import events from '../events/showDetailsHandler.js'

let contactTemplate = (contact) => {
    return html`
    <div class="contact card" data-id="${contact.id}">
        <div>
            <i class="far fa-user-circle gravatar"></i>
        </div>
        <div class="info">
            <h2>Name: ${contact.name}</h2>
            <button class="detailsBtn" @click=${events.showDetailsHandler}>Details</button>
            <div class="details" id="1">
                <p>Phone number: ${contact.phoneNumber}</p>
                <p>Email: ${contact.email}</p>
            </div>
        </div>
    </div>
    `
}

export default {
    contactTemplate,
}