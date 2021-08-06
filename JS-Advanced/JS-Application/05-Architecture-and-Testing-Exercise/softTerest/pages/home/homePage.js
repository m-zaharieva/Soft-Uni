import { renderPage } from "./../../services/renderService.js";
import { homeTemplate } from "./homeTemplate.js";

 
async function getView(context){
    let templateResult = homeTemplate();
    renderPage(templateResult);
}

export default {
    getView
}