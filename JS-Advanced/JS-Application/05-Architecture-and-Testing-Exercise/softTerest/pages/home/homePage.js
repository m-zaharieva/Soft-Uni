import { renderPage } from "./../../services/renderService.js";
import { homeTemplate } from "./homeTemplate.js";

let parentEl = undefined;

function initialize(wrapper) {
    parentEl = wrapper;
}
 
async function getView(context){
    let templateResult = homeTemplate();
    renderPage(templateResult);
}

export default {
    initialize,
    getView
}