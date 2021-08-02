import { renderNav } from "./../../services/renderService.js";
import { navTemplate } from "./navTemplate.js";

let parentWrapper = undefined;

function initialize(wrapper) {
    parentEl = wrapper;
}
 
async function getView(context, next){
    let templateResult = navTemplate();
    renderNav(templateResult);
    next;
}

export default {
    initialize,
    getView
}