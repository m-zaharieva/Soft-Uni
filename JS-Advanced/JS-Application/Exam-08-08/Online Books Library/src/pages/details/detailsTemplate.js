import { html } from './../../../node_modules/lit-html/lit-html.js';

export let detailsTemplate = (book, userData, likesCount, currentUserLikes, deleteHandler, likesHandler) => html`
    <!-- Details Page ( for Guests and Users ) -->
    <section id="details-page" class="details">
        <div class="book-information">
            <h3>${book.title}</h3>
            <p class="type">Type: ${book.type}</p>
            <p class="img"><img src=${book.imageUrl}></p>
            <div class="actions">
                
                ${userData 
                    ? usersTemplate(book._ownerId, userData._id, book._id, currentUserLikes, deleteHandler, likesHandler)
                    : ''}
    
                <!-- ( for Guests and Users )  -->
                <div class="likes">
                    <img class="hearts" src="/images/heart.png">
                    <span id="total-likes">Likes: ${likesCount}</span>
                </div>
                <!-- Bonus -->
            </div>
        </div>
        <div class="book-description">
            <h3>Description:</h3>
            <p>${book.description}</p>
        </div>
    </section>
`;


let usersTemplate = (bookOwnerId, userId, bookId, currentUserLikes, deleteHandler, likesHandler) => html`
    ${bookOwnerId == userId 
        ? html`
            <!-- Edit/Delete buttons ( Only for creator of this book )  -->
            <a class="button" href="/books/edit/${bookId}">Edit</a>
            <a class="button" href="javascript:void(0)" @click=${deleteHandler}>Delete</a>`
        : html`
            ${currentUserLikes == 0
            ? html`<a class="button" href="javascript:void(0)" @click=${likesHandler}>Like</a>` 
            : '' }
            `}    
        `;