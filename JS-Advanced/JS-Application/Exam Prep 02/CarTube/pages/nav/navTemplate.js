import { html } from './../../node_modules/lit-html/lit-html.js';

export let navTemplate = (nav) => html`
<nav>
    <a class="active" href="/home">Home</a>
    <a href="/all-listings">All Listings</a>
    <a href="/search">By Year</a>
    ${nav.isLogedIn 
        ? html`
        <div id="profile">
            <a>Welcome ${nav.username}</a>
            <a href="/my-listings">My Listings</a>
            <a href="/create">Create Listing</a>
            <a href="javascript:void(0)" @click=${nav.logout}>Logout</a>
        </div>` 
        : html`
        <div id="guest">
            <a href="/login">Login</a>
            <a href="/register">Register</a>
        </div>`}
</nav>`;

// let guestUserButtons = () => html`
// <div id="guest">
//     <a href="/login">Login</a>
//     <a href="/register">Register</a>
// </div>`;

// let privateUserButtons = () => html`
// <div id="profile">
//     <a>Welcome username</a>
//     <a href="/my-listings">My Listings</a>
//     <a href="/create">Create Listing</a>
//     <a href="javascript:void(0)" @click=${nav.logoutHandler}>Logout</a>
// </div>`;