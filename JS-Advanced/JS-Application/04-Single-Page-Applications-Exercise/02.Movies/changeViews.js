let main = document.getElementById('main');
let navigationElement = document.getElementById('navigation');
// home view 
let homePage = document.getElementById('home-page');
let titleMovie = homePage.nextElementSibling;
let addMovieButton = document.getElementById('add-movie-button');
let movieSection = document.getElementById('movie');

let addMovie = document.getElementById('add-movie');
let movieExample = document.getElementById('movie-example');
let editMovie = document.getElementById('edit-movie');
let loginForm = document.getElementById('form-login');
let registracionForm = document.getElementById('form-sign-up');

function clearMainElemment() {
    Array.from(main.children).forEach(el => el.remove());
}

function showHomePage() {
    clearMainElemment() 
    main.appendChild(homePage);
    main.appendChild(titleMovie);
    if (localStorage.getItem('userToken') !== null) {
        main.appendChild(addMovieButton);
    }
    main.appendChild(movieSection);
}

function showLoginPage() {
    clearMainElemment() 
    main.appendChild(loginForm);
}

function showRegisterPage() {
    clearMainElemment() 
    main.appendChild(registracionForm);
}

function showMovieDescription() {
    clearMainElemment() 
    main.appendChild(movieExample);
}

function showAddMovie() {
    clearMainElemment() 
    main.appendChild(addMovie);
}

export default {
    showHomePage,
    showLoginPage,
    showRegisterPage,
    showMovieDescription,
    showAddMovie,
}