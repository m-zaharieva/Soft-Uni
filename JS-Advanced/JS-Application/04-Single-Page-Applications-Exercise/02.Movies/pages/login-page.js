import eventHandler from "../services/eventHandler.js";

let section = undefined;

function initialize(domElement) {
    section = domElement;
    let form = section.querySelector('#login');
    form.addEventListener('submit', eventHandler.loginHandler);
}

function getView() {
    return section;
}

let login = {
    initialize,
    getView,
}

export default login;