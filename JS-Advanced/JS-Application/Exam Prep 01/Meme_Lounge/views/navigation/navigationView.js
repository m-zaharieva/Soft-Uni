import { navTemplate } from "./navigationTemplate.js"
import { renderNav } from "../../helpers/renderHtml.js";
import { getUserData, isSignedIn, logoutRequest } from "../../services/authService.js";


async function getView(context, next) {
    let userData = getUserData();
    let navInfo = {
        userData,
    }
    let templateResult = await navTemplate(navInfo, (e) => logoutHandler(context, e));
    renderNav(templateResult);
    next();
}

function logoutHandler(context, e) {
    let userData = getUserData();
    let token = userData.accessToken;
    console.log(token);
    logoutRequest(token).then(x => context.page.redirect('/home'));
}

export default {
    getView,
}