import { html } from './../../../node_modules/lit-html/lit-html.js';

export let modalTemplate = () => html`
<div class="overlay">
    <div class="modal">
        <p>Overlay message</p>
        <a href="#" class="action">Action</a>
    </div>
</div>`;