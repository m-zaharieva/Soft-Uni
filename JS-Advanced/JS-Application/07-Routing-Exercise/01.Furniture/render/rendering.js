import {render} from './../node_modules/lit-html/lit-html.js';

let viewContainer = undefined;
let navContainer = undefined;

function initialize(viewContainerDomEl, navContainerDomEl) {
    viewContainer = viewContainerDomEl;
    navContainer = navContainerDomEl;
}
async function renderingPageView(viewTemplate) {
    render(viewTemplate, viewContainer);
}

async function renderNavigationBar(navTemplate) {
    render(navTemplate, navContainer);
}

function decorateContext(context, next) {
    context.renderView = renderingPageView;
    context.renderNav = renderNavigationBar;
    next();
}

let renderFuncs = {
    initialize,
    renderingPageView,
    renderNavigationBar,
    decorateContext,
}

export default renderFuncs;