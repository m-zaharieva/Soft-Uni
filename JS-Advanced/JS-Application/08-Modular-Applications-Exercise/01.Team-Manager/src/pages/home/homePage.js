import { homeTemplate } from "./homeTemplate.js";

let _router = undefined;
let _render = undefined;

function initialize(router, render) {
    _router = router;
    _render = render;
}

function getView(ctx) {
    let templateResult = homeTemplate();
    _render(templateResult);
}

export default {
    initialize,
    getView,
}