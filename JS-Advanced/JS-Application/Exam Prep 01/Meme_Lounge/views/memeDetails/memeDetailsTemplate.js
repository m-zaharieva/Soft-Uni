import { html } from './../../node_modules/lit-html/lit-html.js';

export let memeDetailsTemplate = (meme, userId, deleteHandler) => html`
<!-- Details Meme Page (for guests and logged users) -->
<section id="meme-details">
    <h1>Meme Title: ${meme.title} </h1>
    <div class="meme-details">
        <div class="meme-img">
            <img alt="meme-alt" src="${meme.imageUrl}">
        </div>
        <div class="meme-description">
            <h2>Meme Description</h2>
            <p>${meme.description}</p>

            ${meme._ownerId === userId 
            ? html`
            <!-- Buttons Edit/Delete should be displayed only for creator of this meme  -->
            <a class="button warning" href="/edit-meme/${meme._id}">Edit</a>
            <button class="button danger" @click=${deleteHandler}>Delete</button>`
            : ''
            }
        </div>
    </div>
</section>`;