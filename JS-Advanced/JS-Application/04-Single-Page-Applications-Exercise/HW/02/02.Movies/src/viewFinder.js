import addMoviePage from "./pages/addMoviePage.js";
import editMoviePage from "./pages/editMoviePage.js";
import homePage from "./pages/homePage.js";
import loginPage from "./pages/loginPage.js";
import moviePage from "./pages/moviePage.js";
import registerPage from "./pages/registerPage.js";
import auth from "./services/authService.js";

let section = {
    'home': async () => await homePage.getView(),
    'login': async () => await loginPage.getView(),
    'register': async () => await registerPage.getView(),
    'add-movie': async () => await addMoviePage.getView(),
    'edit': async (id) => await editMoviePage.getView(id),
    'like': async (id) => await moviePage.likesMovie(id),
    'delete': async (id) => await moviePage.deleteMovie(id),
    'details': async (id) => await moviePage.getView(id),
    'logout': async () => await auth.logout(),

}

let getViewCallback = undefined;
let linkRoutSelector = undefined;

export function initialize(linkElements, linkSelector, callback) {
    linkRoutSelector = linkSelector;
    linkElements.forEach(element => element.addEventListener('click', navigationHandler));
    getViewCallback = callback;
}

export function navigationHandler(e) {

    let element = e.target.matches(linkRoutSelector) ? e.target : e.currentTarget.closest(linkRoutSelector);

    if (element.dataset.route !== undefined) {
        let [route, id] = element.dataset.route.split('/');
        navigateTo(route, id);
    }

}

export function redirectTo(route, id) {
    if (section[route] !== undefined) {
        let viewPromise = section[route](id);
        location.hash = `/${route}${id !== undefined ? `/${id}` : ''}`;
        return viewPromise
    }
}

export function navigateTo(route, id) {
    if (section[route] !== undefined) {
        let viewPromise = section[route](id);
        getViewCallback(viewPromise);
    }
}

let viewFinder = {
    navigateTo,
    redirectTo,
    navigationHandler,
    initialize
}

export default viewFinder;