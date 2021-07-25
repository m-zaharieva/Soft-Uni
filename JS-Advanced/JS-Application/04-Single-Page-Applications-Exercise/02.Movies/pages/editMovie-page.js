let section = undefined;

function initialize(domElement) {
    section = domElement;
}

function getView() {
    return section;
}

let editMovie = {
    initialize,
    getView
}

export default editMovie;