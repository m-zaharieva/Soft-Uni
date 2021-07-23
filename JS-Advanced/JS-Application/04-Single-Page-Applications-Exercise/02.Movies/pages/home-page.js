let section = undefined;

function initialize(domElement) {
    section = domElement;
}

function getView() {
    return section;
}

let home = {
    initialize,
    getView,
}

export default home;