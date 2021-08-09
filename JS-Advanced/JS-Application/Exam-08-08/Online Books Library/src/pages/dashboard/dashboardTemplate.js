import { html } from './../../../node_modules/lit-html/lit-html.js';

export let dashboardTemplate = (books) => html`
    <!-- Dashboard Page ( for Guests and Users ) -->
    <section id="dashboard-page" class="dashboard">
        <h1>Dashboard</h1>

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