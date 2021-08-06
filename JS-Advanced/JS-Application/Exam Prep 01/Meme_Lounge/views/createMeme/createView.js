import { renderPage } from "../../helpers/renderHtml.js";
import { getUserData } from "../../services/authService.js";
import { createRequest } from "../../services/memesService.js";
import notificationsView from "../notifications/notificationsView.js";
import { createMemeTemplate } from "./createMemeTemplate.js";


async function getView(context) {
    let templateResult = await createMemeTemplate((e) => createHandler(context, e));
    renderPage(templateResult);
}

function createHandler(context, e) {
    e.preventDefault();

    let form = e.currentTarget;
    let formData = new FormData(form);
    let title = formData.get('title');
    let description = formData.get('description');
    let imageUrl = formData.get('imageUrl');

    if (title.trim() === '' || description.trim() === '' || imageUrl.trim() === '') {
        notificationsView.getView('All fields are required!');
        return;
    }

    let body = { title, description, imageUrl };
    let token = getUserData().accessToken;
    createRequest(body, token)
        .then(res => res.json())
        .then(data => {
            if (data.hasOwnProperty('code')) {
                notificationsView.getView(data.message);
            } else {
                context.page.redirect('/all-memes')
            }
        })
        .catch(error => {
            notificationsView.getView(error);
        })
}

export default {
    getView,
}