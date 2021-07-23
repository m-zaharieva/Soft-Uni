import home from "../pages/home-page.js";
import nav from "../pages/nav.js";

let views = {
    'home': (async () => await home.getView()),
    'nav': (async () => await nav.getView()),
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
}

async function changeView(view, parent) {
    if (view != undefined) {
        let pageSection = await views[view]();
        parent.append(pageSection);
    }
}

let viewsHandler = {
    changeView,
    initialize
}

export default viewsHandler;