import { render } from "../node_modules/lit-html/lit-html.js";
import requests from "./httpRequests.js";
import { createABook, fullPageTemplate, tableTemplate } from "./templates.js";


export let addform = {
    id: 'add-form',
    title: 'Add BOOK',
    eventHandler: addMovieHandler,
}
export let editform = {
    id: 'edit-form',
    title: 'Edit BOOK',
    eventHandler: editMovieHandler,
}


let body = document.querySelector('body');
render(fullPageTemplate(), body);
let result = [];

let tbody = document.querySelector('tbody');
export async function loadBooks(e) {
    let data = await requests.getAllBooks();
    Object.entries(data).map(kvp => {
        let key = kvp[0];
        let val = kvp[1];
        val.id = key;
        return val;
    });
    
    result = [];

    Object.values(data).forEach(el => {
        let book = createABook(el);
        result.push(book);
    });


    render(result, tbody);
}


async function addMovieHandler(e) {
    e.preventDefault();
    let form = e.target;
    let formData = new FormData(form);

    let title = formData.get('title');
    let author = formData.get('author');

    let body = {
        title, author
    }

    let response = await fetch('http://localhost:3030/jsonstore/collections/books/', {
        method: 'POST',
        headers: {
            'Content-type': 'application/json',
        },
        body: JSON.stringify(body),
    });

    let data = await response.json();
    console.log(data);

    let titleInput = form.querySelector('input[name="title"]');
    titleInput.value = '';
    let authorInput = form.querySelector('input[name="author"]');
    authorInput.value = '';

    let newBook = createABook(body);
    result.push(newBook);
    render(result, tbody);
}

export async function bookEventHandler(e) {
    if (e.target.tagName === 'BUTTON' && e.target.textContent == 'Edit') {
        let currentBook = e.target.closest('.book');
        let bookId = currentBook.dataset.id;
        let bookTds = currentBook.querySelectorAll('td');
        let title = bookTds[0].textContent;
        let author = bookTds[1].textContent;

        let addForm = document.querySelector('#add-form');
        let editForm = document.querySelector('#edit-form');
        let titleInput = editForm.querySelector('input[name="title"]');
        titleInput.value = title;
        let authorInput = editForm.querySelector('input[name="author"]')
        authorInput.value = author;
        let idInput = editForm.querySelector('input[name="id"]')
        idInput.value = bookId;

        editForm.style.display = 'block';
        addForm.style.display = 'none';
    } else if (e.target.tagName === 'BUTTON' && e.target.textContent == 'Delete') {
        let currentBook = e.target.closest('.book');
        let bookId = currentBook.dataset.id;
        let response = await fetch(`http://localhost:3030/jsonstore/collections/books/${bookId}`, {
            method: 'DELETE', 
            headers: { 'Content-Type': 'application/json' },
        });

        currentBook.remove();
    }
}

export async function editMovieHandler(e) {
    e.preventDefault();
    let form = e.target;
    let formData = new FormData(form);
    let title = formData.get('title');
    let author = formData.get('author');
    let id = formData.get('id');

    let response = await fetch(`http://localhost:3030/jsonstore/collections/books/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({title, author}),
    });
    let data = await response.json();

    let currentRow = document.querySelector(`tr[data-id=${id}]`);
    let titleTd = currentRow.querySelector('td:nth-child(1)');
    titleTd.textContent = title;
    let authorTd = currentRow.querySelector('td:nth-child(2)');
    authorTd.textContent = author;

    form.reset();

    form.style.display = 'none';
    let addForm = document.querySelector('#add-form');
    addForm.style.display = 'block';
}