import { render, html} from  "./node_modules/lit-html/lit-html.js";
import { formTemplate } from "./templates/formTemplate.js";
import { btnTemplate } from "./templates/loadButtonTemplate.js";
import { initialView } from "./templates/startViewTemplate.js";
import { tableBody, tableRows } from "./templates/tableTemplates.js";


const body = document.querySelector('body');

init();

const tBody = document.querySelector('table>tbody');
const loadBtn = document.querySelector('#loadBooks');
const submitForm = document.querySelector('#add-form');
const submitFormBtn = submitForm.querySelector('input[type="submit"]');


loadBtn.addEventListener('click', loadBooks);
tBody.addEventListener('click',tableButtonsHandler);
submitFormBtn.addEventListener('click', formSubmitHandler);

function init(){
    render(initialView(),body);
}
function tableButtonsHandler(e){
    if(e.target.type !== 'submit'){ 
        return;
    }
    if(e.target.classList.contains('edit')){ 
    }
    if(e.target.classList.contains('delete')){
        deleteBook(e);
    }
}

function showEditBookDialog(e){
    let tr = e.target.closest('tr')
    let bookId = tr.dataset.id;
    let author = tr.querySelector('.author').textContent;
    let title = tr.querySelector('.title').textContent;
    submitForm.querySelector('h3').textContent = 'Edit FORM';
    //Doesn't work with FormData.set() so went old school
    submitForm.querySelector('input[name=title]').value = title.trim();
    submitForm.querySelector('input[name=author]').value = author.trim();
    submitFormBtn.value = 'Save';
    submitFormBtn.id = bookId;
    submitFormBtn.classList.add('edit-form');
}

function hideEditBookDialog(){
    submitForm.querySelector('h3').textContent = 'FORM';
    submitFormBtn.textContent = 'Submit';
    submitFormBtn.id = '';
    submitFormBtn.classList.remove('edit-form');
}

function deleteBook(e){
    let tr = e.target.closest('tr')
    let bookId = tr.dataset.id;
    let deleteURL = `http://localhost:3030/jsonstore/collections/books/${bookId}`;
    fetch(deleteURL,{
        method: 'Delete',
        headers: {'Content-Type':'application/json'},
        body: null // no body needed
    })
    .then(() => loadBooks())
    .catch(err => console.log(err));
}
async function loadBooks(){
   try{
       let res = await fetch(`http://localhost:3030/jsonstore/collections/books`);
       let data = await res.json();
       let modifiedData = Object.keys(data).map(x => {
           let obj = Object.assign({},data[x]);
           obj.id = x;
           return obj;
       });
      render(tableRows(modifiedData), tBody);
   } catch (e){
       console.error(e);
   }
}
function formSubmitHandler(e){
    e.preventDefault();

    let formData = new FormData(submitForm);
    let serverURL = 'http://localhost:3030/jsonstore/collections/books';
    let author = formData.get('author');
    let title = formData.get('title');
    let book = {author, title};
    let fetchObject = {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(book)
    };

    if (e.target.classList.contains('edit-form')){
        let bookId = e.target.id;
        serverURL += `/${bookId}`;
        fetchObject.method = 'PUT';
        hideEditBookDialog();
    }
    postBookToServer(serverURL,fetchObject);  
    submitForm.reset();
}
function postBookToServer(fetchUrl,fetchObject){
    fetch(fetchUrl,fetchObject)
    .then(() => loadBooks())
    .catch(err => console.log(err));
}