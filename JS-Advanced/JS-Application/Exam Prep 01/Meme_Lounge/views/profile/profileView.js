import { encodeUrl } from "../../helpers/encodeUrlQuery.js";
import { renderPage } from "../../helpers/renderHtml.js";
import { getUserData } from "../../services/authService.js";
import { profileRequest } from "../../services/memesService.js";
import { profileTemplate } from "./profileTemplate.js";


async function getView(context) {
    let userData = getUserData();
    let userId = userData._id;

    let queryObj = {
        where: `_ownerId="${userId}"`,
        sortBy: `_createdOn desc`
    }
    let encodedQuery = encodeUrl(queryObj);

    profileRequest(encodedQuery)
        .then(memes => {
            console.log(memes);
            let templateResult = profileTemplate(userData, memes);
            renderPage(templateResult);
        });
}

export default {
    getView,
}