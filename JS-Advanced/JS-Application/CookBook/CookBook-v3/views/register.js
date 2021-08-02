let section = undefined;
let main = undefined;

function initialize(domElement, mainElement) {
    section = domElement;
    main = mainElement;
}

function showView() {
    [...main.children].forEach(x => x.remove());
    main.append(section)
}

export default {
    initialize,
    showView,
}