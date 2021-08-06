import { render } from './../node_modules/lit-html/lit-html.js';

let pageHolder = undefined;
let navHolder = undefined;
let notificationHolder = undefined;

function initialize(pageWrapper, navWrapper, notificationWrapper) {
    pageHolder = pageWrapper;
    navHolder = navWrapper;
    notificationHolder = notificationWrapper;
}

export function renderPage(view) {
    render(view, pageHolder);
}

export async function renderNav(view) {
    render(view, navHolder);
}

export async function renderNotification(view) {
    render(view, notificationHolder);
}

export default {
    initialize,
}