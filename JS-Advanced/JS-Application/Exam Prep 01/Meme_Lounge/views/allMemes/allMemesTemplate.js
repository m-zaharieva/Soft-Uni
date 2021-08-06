import { html } from './../../node_modules/lit-html/lit-html.js';

let memeTemplate = (meme) => html`
<div class="meme" data-id="${meme._id}" data-owner-id="${meme._ownerId}">
    <div class="card">
        <div class="info">
            <p class="meme-title">${meme.title}</p>
            <img class="meme-image" alt="meme-img" src="${meme.imageUrl}">
        </div>
        <div id="data-buttons">
            <a class="button" href="/details/${meme._id}">Details</a>
        </div>
    </div>
</div>
`;

let noMemeMessage = () => html`
<p class="no-memes">No memes in database.</p>`;


export let AllMemesTemplate = (allMemes) => html`
<!-- All Memes Page ( for Guests and Users )-->
<section id="meme-feed">
    <h1>All Memes</h1>
    <div id="memes">
       ${allMemes.length > 0 ? allMemes.map(meme => memeTemplate(meme)) : noMemeMessage()}
    </div>
</section>`;