import { html } from './../../node_modules/lit-html/lit-html.js';

export let profileTemplate = (user, memes) => html`
<!-- Profile Page ( Only for logged users ) -->
<section id="user-profile-page" class="user-profile">
    <article class="user-info">
        <img id="user-avatar-url" alt="user-profile" src="/images/${user.gender == 'female' ? 'female' : 'male'}.png">
        <div class="user-content">
            <p>Username: ${user.username}</p>
            <p>Email: ${user.email}</p>
            <p>My memes count: ${memes.length}</p>
        </div>
    </article>
    <h1 id="user-listings-title">User Memes</h1>
    <div class="user-meme-listings">
        ${memes.length > 0 
        ? html`
        <!-- Display : All created memes by this user (If any) -->
        ${memes.map(x => memeTemplate(x))}
        `
        : html`<!-- Display : If user doesn't have own memes  -->
        <p class="no-memes">No memes in database.</p>` 
        }       
    </div>
</section>`;

let memeTemplate = (meme) => html`
<div class="user-meme">
    <p class="user-meme-title">${meme.title}</p>
    <img class="userProfileImage" alt="meme-img" src="${meme.imageUrl}">
    <a class="button" href="/details/${meme._id}">Details</a>
</div>`;