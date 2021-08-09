import { html } from './../../../node_modules/lit-html/lit-html.js';

export let navTemplate = (userData, logoutHandler) => html`
<!-- Navigation -->
<nav class="navbar">
    <section class="navbar-dashboard">
        <a href="/dashboard">Dashboard</a>

        ${userData 
        ? privateButtons(userData.email, logoutHandler) 
        : guestButtons()}

    </section>
</nav>
`;

let guestButtons = () => html`
<!-- Guest users -->
<div id="guest">
    <a class="button" href="/login">Login</a>
    <a class="button" href="/register">Register</a>
</div>
`;

let privateButtons = (email, logoutHandler) => html`
<!-- Logged-in users -->
<div id="user">
    <span>Welcome, ${email}</span>
    <a class="button" href="/profile">My Books</a>
    <a class="button" href="/books/create">Add Book</a>
    <a class="button" href="javascript:void(0)" @click=${logoutHandler}>Logout</a>
</div>
`;