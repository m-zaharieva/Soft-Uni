import { searchTemplate } from "./searchTemplate.js";

let _router = undefined;
let _renderer = undefined;

function initialize(router, renderer) {
    _router = router;
    _renderer = renderer;
}

function getView(context) {
    let modelView = {
        searchHandler,
    }
    let templateResult = searchTemplate(modelView);
    _renderer(templateResult);
}

function searchHandler() {
    //TODO
}

export default {
    getView,
    initialize
}
