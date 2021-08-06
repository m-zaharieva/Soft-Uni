import { render } from './../node_modules/lit-html/lit-html.js';

let parentEl = undefined;
let navWrapper = undefined;

async function initialize(wrapper, header) {
    parentEl = wrapper;
    navWrapper = header;
}
export async function renderPage(view) {
        render(view, parentEl);
}

export async function renderNav(view) {
        render(view, navWrapper);
}

export default {
    initialize,
}