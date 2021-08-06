import { renderPage } from "../../helpers/renderHtml.js";
import { allMemesRequest } from "../../services/memesService.js";
import { AllMemesTemplate } from "./allMemesTemplate.js";


async function getView(context) {
    allMemesRequest().then(memes => {
        let templateResult = AllMemesTemplate(memes);
        renderPage(templateResult);
    })
}

export default {
    getView,
}