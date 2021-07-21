import addMoviePage from "./pages/addMoviePage.js";
import homePage from "./pages/homePage.js"
import loginPage from "./pages/loginPage.js"
import movieDetailsPage from "./pages/movieDetailsPage.js";
import registerPage from "./pages/registerPage.js"
import editMovie from "./pages/editMoviePage.js"

let views = {
    'home': async () => await homePage.getView(),
    'login': async () => await loginPage.getView(),
    'register': async () => await registerPage.getView(),
    'addMovie': async () => await addMoviePage.getView(),
    'movieDetails': async () => await movieDetailsPage.getView(),
    'editMovie': async () => await editMovie.getView()
}

function initialize(links) {
    links.forEach(link => {
        link.addEventListener('click', changeView);
    });
}

async function changeView(e) {
    e.preventDefault();
    let route = e.target.getAttribute('data-route');
    let movieId = e.target.getAttribute('movie-id');
    if (movieId !== null && movieId !== undefined) {
        localStorage.setItem('movie-id', movieId);
    }
    navigateTo(route);
}

async function navigateTo(route) {
    if (views.hasOwnProperty(route)) {
        let view = await views[route]();
        document.querySelectorAll('.view').forEach(v => v.remove());
        document.querySelector('main').appendChild(view);
    }
}

export default {
    changeView,
    initialize,
    navigateTo
}