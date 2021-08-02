import catalog from "./views/catalog.js";
import create from "./views/create.js";
import del from "./views/del.js";
import details from "./views/details.js";
import edit from "./views/edit.js";
import login from "./views/login.js";
import navigation, { setUpNavigation } from "./views/navigation.js";
import register from "./views/register.js";

let mainWrapper = document.querySelector('main');
let headerElement = document.querySelector('header');

let catalogSectionElement = document.getElementById('catalog');
let loginSectionElement = document.getElementById('login');
let registerSectionElement = document.getElementById('register');
let createSectionElement = document.getElementById('create');
let editSectionElement = document.getElementById('edit');
let navigationElement = document.getElementById('navigation');
let detailsSectionElement = document.getElementById('details');


login.initialize(loginSectionElement, mainWrapper);
navigation.initialize(navigationElement);
catalog.initialize(catalogSectionElement, mainWrapper);
register.initialize(registerSectionElement, mainWrapper);
create.initialize(createSectionElement, mainWrapper);
edit.initialize(editSectionElement, mainWrapper);
details.initialize(detailsSectionElement, mainWrapper);
del.initialize(detailsSectionElement, mainWrapper);

headerElement.append(navigation.showView());
setUpNavigation()
catalog.showView();















// // load all recipes 
// async function getRecipes() {
//     const response = await fetch('http://localhost:3030/data/recipes?select=_id%2Cname%2Cimg');
//     const recipes = await response.json();

//     return Object.values(recipes);
// }

// // get ingredients for the current reciepe
// async function getRecipeById(id) {
//     const response = await fetch('http://localhost:3030/data/recipes/' + id);
//     const recipe = await response.json();

//     return recipe;
// }



// // function that executes when all page resourses are load
// window.addEventListener('load', async () => {
//     const main = document.querySelector('main');

//     const recipes = await getRecipes();
//     const cards = recipes.map(createRecipePreview);

//     main.innerHTML = '';
//     cards.forEach(c => main.appendChild(c));

//     const guestHeader = document.getElementById('guest');
//     const logedUsersHeader = document.getElementById('user');
//     showHeaderButtons(guestHeader, logedUsersHeader);

// });



// function showHeaderButtons(guestHeader, logedUsersHeader) {
//     const token = sessionStorage.getItem('userToken');
//     if (token !== null) {
//         logedUsersHeader.style.display = 'inline-block';
//         guestHeader.style.display = 'none';
//         document.getElementById('logoutBtn').addEventListener('click', logout);
//     } else {
//         guestHeader.style.display = 'inline-block';
//         logedUsersHeader.style.display = 'none';
//     }
// }

