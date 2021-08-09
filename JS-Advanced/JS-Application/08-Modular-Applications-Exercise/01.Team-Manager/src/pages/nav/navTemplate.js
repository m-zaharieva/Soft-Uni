import { getUserData } from '../../services/authService.js';
import { html } from './../../../node_modules/lit-html/lit-html.js';


export let navTemplate = (logoutHandler) => html`
    <a href="/home" class="site-logo">Team Manager</a>
    <nav>
        <a href="/catalog" class="action">Browse Teams</a>
        ${ getUserData() 
            ? priveteBuuttons(logoutHandler)
            : guestButtons()}
    </nav>
`;

let guestButtons = () => html`
    <a href="/login" class="action">Login</a>
    <a href="/register" class="action">Register</a>
`;

let priveteBuuttons = (logoutHandler) => html`
    <a href="/profile" class="action">My Teams</a>
    <a href="javascript:void(0)" class="action" @click=${logoutHandler}>Logout</a>
`;