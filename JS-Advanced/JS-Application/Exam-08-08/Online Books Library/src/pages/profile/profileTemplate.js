import { html } from './../../../node_modules/lit-html/lit-html.js';

export let profileTemplate = (books) => html`
    <!-- My Books Page ( Only for logged-in users ) -->
    <section id="my-books-page" class="my-books">
        <h1>My Books</h1>
        
        ${books.length > 0 
        ? allBooksTemplate(books)
        : noBooksTemplate()}

    </section>
`;

let allBooksTemplate = (books) => html`
    <!-- Display ul: with list-items for All books (If any) -->
    <ul class="other-books-list">
        ${books.map(b => bookTemplate(b))}
    </ul>
`;

let bookTemplate = (book) => html`
    <li class="otherBooks">
        <h3>${book.title}</h3>
        <p>Type: ${book.type}</p>
        <p class="img"><img src=${book.imageUrl}></p>
        <a class="button" href="/details/${book._id}">Details</a>
    </li>
`;

let noBooksTemplate = () => html`
    <!-- Display paragraph: If there are no books in the database -->
    <p class="no-books">No books in database!</p>
`;