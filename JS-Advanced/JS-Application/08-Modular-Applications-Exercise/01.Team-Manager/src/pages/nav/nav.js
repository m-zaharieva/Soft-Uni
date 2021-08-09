import { logoutHandler } from "../logout/logout.js";
import { navTemplate } from "./navTemplate.js";

let _router = undefined;
let _render = undefined;

function initialize(router, render) {
    _router = router;
    _render = render;
}

function getView(ctx, next) {
    let templateResult = navTemplate((e) => logoutHandler(ctx, e));
    _render(templateResult);
    next();
}



export default {
    initialize,
    getView,
}