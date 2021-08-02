import { e } from "../helpers/domCreator.js";

let section = undefined;
let main = undefined;

function initialize(domElement, mainElement) {
    section = domElement;
    main = mainElement;
}

function showView() {
    [...main.children].forEach(x => x.remove());
    [...section.children].forEach(x => x.remove());
    section.append(deleteHtml());
    main.append(section)
}

export default {
    initialize,
    showView,
}


// create recipe extended card
export function deleteHtml() {
    const result = e('article', {},
        e('h2', {}, 'Recipe Deleted'));
    return result;
}
