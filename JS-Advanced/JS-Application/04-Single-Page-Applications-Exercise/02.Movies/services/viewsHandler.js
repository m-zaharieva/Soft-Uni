import addMovie from "../pages/addMovie-page.js";
import editMovie from "../pages/editMovie-page.js";
import home from "../pages/home-page.js";
import login from "../pages/login-page.js";
import movieDetails from "../pages/movieDetails-page.js";
import nav from "../pages/nav.js";
import register from "../pages/register-page.js";

let mainWrapper = document.getElementById('main');
let views = {
    'home': (async () => await home.getView()),
    'nav': (async () => await nav.getView()),
    'login': (async () => await login.getView()),
    'register': (async () => await register.getView()),
    'add-movie': (async () => await addMovie.getView()),
    'logout': (async () => await login.getView()),
    'movieDetails': (async () => await movieDetails.getView()),
    'edit-movie': (async () => await editMovie.getView()),
}

async function initialize(linkElements) {
    linkElements.forEach(el => {
       el.addEventListener('click', linksHandler); 
    });
}

function linksHandler(e) {
    let element;
    if (e.target.matches('.link')) {
        element = e.target;
    } else if (!e.target.matches('.link')) {
        element = e.target.closest('.link');
    }
    let route = element.dataset.route;
    console.log(route)
    changeView(route);
}

async function changeView(view, domElement, parentClass) {
    if (view != undefined) {
        let pageSection = await views[view]();
        if (domElement !== undefined && parentClass !== undefined) {
            let parent = pageSection.querySelector(`.${parentClass}`);
            [...parent.children].forEach(el => el.remove());
            parent.append(domElement)
        }
        [...mainWrapper.children].forEach(el => el.remove());
        mainWrapper.append(pageSection);
    }
}


let viewsHandler = {
    changeView,
    initialize
}

export default viewsHandler;