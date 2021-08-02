import { render } from './../node_modules/lit-html/lit-html.js';

let parentEl = undefined;
let navWrapper = undefined;

function initialize(wrapper, header) {
    parentEl = wrapper;
    navWrapper = header;
}
export function renderPage(view) {
    if (view !== undefined) {
        render(view, parentEl);
    }
}

export function renderNav(view) {
    if (view !== undefined) {
        render(view, navWrapper);
    }
}

export default {
    initialize,
}