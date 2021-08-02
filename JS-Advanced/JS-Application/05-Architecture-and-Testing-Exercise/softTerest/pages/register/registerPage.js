import { renderPage } from "./../../services/renderService.js";
import { registerTemplate } from "./registerTemplate.js";

let parentEl = undefined;

function initialize(wrapper) {
    parentEl = wrapper;
}
 
function getView(context){
    let templateResult = registerTemplate();
    renderPage(templateResult);
}

export default {
    initialize,
    getView
}