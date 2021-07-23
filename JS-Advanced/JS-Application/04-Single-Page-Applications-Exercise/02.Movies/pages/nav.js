let section = undefined;

function initialize(domElement) {
    section = domElement;
}

function getView() {
    return section;
}

let nav = {
    initialize,
    getView,
}

export default nav;