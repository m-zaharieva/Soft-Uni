import navigation from "./src/navigation.js";
import addMoviePage from "./src/pages/addMoviePage.js";
import editMoviePage from "./src/pages/editMoviePage.js";
import homePage from "./src/pages/homePage.js";
import loginPage from "./src/pages/loginPage.js";
import moviePage from "./src/pages/moviePage.js";
import registerPage from "./src/pages/registerPage.js";
import auth from "./src/services/authService.js";
import viewFinder from "./src/viewFinder.js";


let appElement = undefined;

setupApp();

function setupApp() {
    let appSelector = '#app';
    
    auth.clearStorage();
    appElement = document.querySelector(appSelector);
    homePage.initialize(document.querySelector('#home-page'));
    registerPage.initialize(document.querySelector('#form-sign-up'));
    loginPage.initialize(document.querySelector('#form-login'));
    addMoviePage.initialize(document.querySelector('#add-movie'));
    moviePage.initialize(document.querySelector('#movie-example'), 'link');
    editMoviePage.initialize(document.querySelector('#edit-movie'));
    navigation.initialize(document.querySelector('nav'));
    viewFinder.initialize(document.querySelectorAll('.link'), '.link', changeView);

    viewFinder.navigateTo('home');
}

async function changeView(viewPromise) {
    let view = await viewPromise;
    [...appElement.children].forEach(el => el.remove());
    appElement.appendChild(view);
}