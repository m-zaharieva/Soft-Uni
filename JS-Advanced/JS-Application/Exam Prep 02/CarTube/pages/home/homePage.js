import { homeTemplate } from "./homeTemplate.js";

let _router = undefined;
let _renderer = undefined;

function initialize(router, renderer) {
    _router = router;
    _renderer = renderer;
}

function getView(context) {
    let templateResult = homeTemplate();
    _renderer(templateResult);
}

export default {
    getView,
    initialize
}
