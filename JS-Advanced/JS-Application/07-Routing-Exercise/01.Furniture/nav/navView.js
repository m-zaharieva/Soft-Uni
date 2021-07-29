import auth from "../services/auth.js";
import { navigationHtml } from "./nav.js";


async function getView(context, next) {
    let navInfo = {
        isLoged: auth.isLoggedIn(),
        currentPage: context.pathname,
    }
    let viewHtml = navigationHtml(navInfo);
    context.renderNav(viewHtml);
    next();
}

let navigation = {
    getView,
}

export default navigation;