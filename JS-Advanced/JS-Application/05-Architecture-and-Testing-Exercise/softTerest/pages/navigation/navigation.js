import { renderNav } from "./../../services/renderService.js";
import { navTemplate } from "./navTemplate.js";
 
async function getView(context, next){
    let templateResult = await navTemplate();
    renderNav(templateResult);
    next;
}

export default {
    getView
}