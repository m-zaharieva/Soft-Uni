import { renderPage } from "../../helpers/renderHtml.js";
import { getUserData } from "../../services/authService.js";
import { deleteRequest, memeRequest } from "../../services/memesService.js";
import { memeDetailsTemplate } from "./memeDetailsTemplate.js";


async function getView(context) {
    let id = context.params.id;
    let userId = getUserData() !== null ? getUserData()._id : undefined;
    
    memeRequest(id)
        .then(meme => {
            let templateResult = memeDetailsTemplate(meme, userId, (e) => deleteHandler(context, e));
            renderPage(templateResult);
    });
}

function deleteHandler(context, e) {
    let id = context.params.id;
    deleteRequest(id)
        .then(res => {
            if(res.ok) {
                context.page.redirect('/all-memes');
            }
        })
}

export default {
    getView,
}