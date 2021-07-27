import { html, render } from '../node_modules/lit-html/lit-html.js';
import { addform, editform, loadBooks, bookEventHandler } from './app.js';


export let createABook = (book) => html`
<tr class="book" data-id="${book.id}">
    <td>${book.title}</td>
    <td>${book.author}</td>
    <td>
        <button class="edit">Edit</button>
        <button class="delete">Delete</button>
    </td>
</tr>
`;

export let tableTemplate = () => html`
<table>
    <thead>
        <tr>
            <th>Title</th>
            <th>Author</th>
            <th>Action</th>
        </tr>
    </thead>
    <tbody @click=${bookEventHandler}>
    </tbody>
</table>
` ;

let formTemplate = (form) => html`
<form id="${form.id}" @submit=${form.eventHandler}>
    ${form.id == 'edit-form' ? html`<input type="hidden" name="id">` : ''}
    <h3>${form.title}</h3>
    <label>TITLE</label>
    <input type="text" name="title" placeholder="Title...">
    <label>AUTHOR</label>
    <input type="text" name="author" placeholder="Author...">
    <input type="submit" value="${form.id == 'edit-form' ? 'Save' : 'Submit'}">
</form>
`

export let fullPageTemplate = () => html`
    <button id="loadBooks" @click=${loadBooks}>LOAD ALL BOOKS</button>
    ${tableTemplate()}
    ${formTemplate(addform)}
    ${formTemplate(editform)}
`