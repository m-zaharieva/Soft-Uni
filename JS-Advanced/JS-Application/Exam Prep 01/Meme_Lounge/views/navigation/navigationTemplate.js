import { html } from './../../node_modules/lit-html/lit-html.js';

export let navTemplate = (navInfo, logoutHandler) => html`
    <a href="/all-memes">All Memes</a>
    ${navInfo.userData !== null 
    ? html`
    <!-- Logged users -->
    <div class="user">
        <a href="/create-meme">Create Meme</a>
        <div class="profile">
            <span>Welcome, ${navInfo.userData.email}</span>
            <a href="/my-profile">My Profile</a>
            <a href="javascript:void(0)" @click=${logoutHandler}>Logout</a>
        </div>
    </div>` 
    : html`
    <!-- Guest users -->
    <div class="guest">
        <div class="profile">
            <a href="/login">Login</a>
            <a href="/register">Register</a>
        </div>
        <a class="active" href="/home">Home Page</a>
    </div>`
    } 
`;