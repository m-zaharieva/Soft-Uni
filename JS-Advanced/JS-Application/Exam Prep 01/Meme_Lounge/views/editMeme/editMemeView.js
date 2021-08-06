import { renderPage } from "../../helpers/renderHtml.js";
import { getUserData } from "../../services/authService.js";
import { editRequest, memeRequest } from "../../services/memesService.js";
import notificationsView from "../notifications/notificationsView.js";
import { editMemeTemplate } from "./editMemeTemplate.js";


async function getView(context) {
    let id = context.params.id;

    memeRequest(id).then(data => {
        let templateResult = editMemeTemplate(data, (e) => editMemeHandler(context, e));
        renderPage(templateResult);
    })
}

function editMemeHandler(context, e) {
    e.preventDefault();
    let form = e.currentTarget;
    let formData = new FormData(form);
    let title = formData.get('title');
    let description = formData.get('description');
    let imageUrl = formData.get('imageUrl');
    let token = getUserData().accessToken;

    if (title.trim() === '' || description.trim() === '' || imageUrl.trim() === '') {
        notificationsView.getView('All fields are required!');
        return;
    }
    
    let body = { title, description, imageUrl };
    let id = context.params.id;
    
    editRequest(body, id, token)
        .then(res => res.json())
        .then(data => {
            if (data.hasOwnProperty('code')) {
                notificationsView.getView(data.message);
            } else {
                context.page.redirect(`/details/${id}`)
            }
        })
        .catch(error => {
            notificationsView.getView(error);
        });



}

export default {
    getView,
}