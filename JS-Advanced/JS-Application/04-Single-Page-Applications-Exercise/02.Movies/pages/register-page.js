import eventHandler from "../services/eventHandler.js";

let section = undefined;

function initialize(domElement) {
    section = domElement;
    let form = section.querySelector('#register-form');
    form.addEventListener('submit', eventHandler.registerHandler);
}

function getView() {
    return section;
}

let register = {
    initialize,
    getView,
}

export default register;