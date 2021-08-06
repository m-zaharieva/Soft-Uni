import {html} from './../../node_modules/lit-html/lit-html.js';

export let notificationsTemplate = (message) => html`
<!-- Notifications -->
    <div id="errorBox" class="notification">
        <span>${message}</span>
    </div>`;