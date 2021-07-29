import { html } from './../node_modules/lit-html/lit-html.js';
import {ifDefined} from './../node_modules/lit-html/directives/if-defined.js';

export let navigationHtml = (navInfo) => html`
    <h1><a href="/">Furniture Store</a></h1>
    <nav>
        <a id="catalogLink" href="/dashboard" class="${ifDefined(navInfo.currentPage == '/dashboard' ? 'active' : undefined)}">Dashboard</a>
        ${navInfo.isLoged 
            ? html`
                <div id="user">
                    <a id="createLink" href="/create" class="${ifDefined(navInfo.currentPage == '/create' ? 'active' : undefined)}">Create Furniture</a>
                    <a id="profileLink" href="/my-furniture" class="${ifDefined(navInfo.currentPage == '/my-furniture' ? 'active' : undefined)}">My Publications</a>
                    <a id="logoutBtn" href="/logout">Logout</a>
                </div>
                ` 
            : html`
                <div id="guest">
                    <a id="loginLink" href="/login" class="${ifDefined(navInfo.currentPage == '/login' ? 'active' : undefined)}">Login</a>
                    <a id="registerLink" href="/register" class="${ifDefined(navInfo.currentPage == '/register' ? 'active' : undefined)}">Register</a>
                </div>
        `}
    </nav>
`;
