let baseUrl = 'http://localhost:3030/jsonstore/collections/books';
let loadButton = document.getElementById('loadBooks');
loadButton.addEventListener('click', loadBooksHandler);

// clear table content
let tableBody = document.querySelector('#book-table tbody');
tableBody.querySelectorAll('tr').forEach(tr => tr.remove());

// add event to the form
let bookForm = document.getElementById('book-form');
bookForm.addEventListener('submit', formSubmitHandler);
bookForm.dataset.isEdit = false;


// load book into the table
function loadBooksHandler(e) {
    tableBody.querySelectorAll('tr').forEach(tr => tr.remove());  // clear table content

    fetch(baseUrl)
        .then(res => res.json())
        .then(books => {
            console.log(books);
            Object.keys(books).forEach(key => {
                let currentBook = books[key];
                let title = currentBook.title;
                let author = currentBook.author;

                let tableRow = createRow(author, title, key);
                tableBody.appendChild(tableRow);
            })
        })
}

// form submit handler
function formSubmitHandler(e) {
    e.preventDefault();
    let form = e.currentTarget;
    let formData = new FormData(form);
    let isEdit = form.dataset.isEdit;

    if (isEdit === 'true') {
        let id = form.getAttribute('data-entry-id');
        editBook(formData, id);
    } else {
        createBookHandler(formData);
    }
}

// create new book
function createBookHandler(formData) {
    let title = formData.get('title');
    let author = formData.get('author');

    if (title.trim() == '' || author.trim() == '') {
        return alert('Both fields are required!');
    }

    fetch(baseUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ author, title })
    })
        .then(response => response.json())
        .then(data => {
            let id = data._id;
            let newRow = createRow(author, title, id);
            tableBody.appendChild(newRow);
        })
        .catch(error => {
            return alert('Couldn\'t send your request');
        })

    let titleInput = bookForm.querySelector('input[name="title"]');
    let authorInput = bookForm.querySelector('input[name="author"]');

    titleInput.value = '';
    authorInput.value = '';
}

// modify form to edit book info
function editHandler(e) {
    let currentBookRow = e.currentTarget.closest('.book');
    let title = currentBookRow.querySelector('.title').textContent;
    let author = currentBookRow.querySelector('.author').textContent;
    let id = currentBookRow.getAttribute('data-entry-id')

    bookForm.dataset.entryId = id;
    bookForm.dataset.isEdit = true;

    let titleInput = bookForm.querySelector('input[name="title"]');
    titleInput.value = title;

    let authorInput = bookForm.querySelector('input[name="author"]');
    authorInput.value = author;

    let formHeading = bookForm.querySelector('h3');
    formHeading.textContent = 'Edit FORM';

    let formButton = bookForm.querySelector('button');
    formButton.textContent = 'Save';
}

// submit new data for listed book
function editBook(formData, id) {
    let title = formData.get('title');
    let author = formData.get('author');

    let editBook = {
        author,
        title
    }

    fetch(`${baseUrl}/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(editBook)
    })
        .then(response => response.json())
        .then(data => {
            let currentBook = document.querySelector(`tr[data-entry-id="${id}"]`);
            currentBook.querySelector('.title').textContent = title;
            currentBook.querySelector('.author').textContent = author;
        })
        .catch(error => alert('Error'))

    bookForm.querySelector('h3').textContent = 'FORM';
    bookForm.querySelector('button').textContent = 'Submit';
    bookForm.querySelector('input[name="title"]').value = '';
    bookForm.querySelector('input[name="author"]').value = '';
    bookForm.dataset.isEdit = false;
}

// delete listed book
function deleteBookHandler(e) {
    let currentBook = e.currentTarget.closest('.book');
    let id = currentBook.dataset.entryId;
    fetch(`${baseUrl}/${id}`, {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' }
    })
        .then(res => {
            if (res.status === 200) {
                currentBook.remove();
            }
        })
}

// create table row with book info
function createRow(author, title, id) {
    let tableRow = document.createElement('tr');
    tableRow.classList.add('book');
    tableRow.dataset.entryId = id;

    let titleTd = document.createElement('td');
    titleTd.classList.add('title');
    titleTd.textContent = title;

    let authorTd = document.createElement('td');
    authorTd.classList.add('author');
    authorTd.textContent = author;

    let buttonsTd = document.createElement('td');

    let editButton = document.createElement('button');
    editButton.textContent = 'Edit';
    editButton.addEventListener('click', editHandler)

    let deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.addEventListener('click', deleteBookHandler)

    buttonsTd.appendChild(editButton);
    buttonsTd.appendChild(deleteButton);
    tableRow.appendChild(titleTd);
    tableRow.appendChild(authorTd);
    tableRow.appendChild(buttonsTd);

    return tableRow;
}















// // edit existing book
// function editBookFormHandler(e) {
//     let table = e.currentTarget.parentElement.parentElement.parentElement.parentElement;
//     let form = table.nextElementSibling;
//     form.addEventListener('submit', editBookHandler);
//     let formH3 = form.querySelector('h3');
//     formH3.textContent = 'Edit FORM';
//     let formButton = form.querySelector('button');
//     formButton.textContent = 'Save';

// }

// // delete book from table
// function deleteBookHandler(e) {
//     console.log('TODO... ');
// }

