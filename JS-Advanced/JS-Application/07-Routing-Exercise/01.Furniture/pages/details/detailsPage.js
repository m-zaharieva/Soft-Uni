import { deleteFurniture, getFurniture } from "../../services/furnitures.js";
import { detailsTemplate } from "./detailsTemplate.js";

async function deleteHandler(context, id, e) {
    let confirmed = confirm('Are you sure you want to delete this item?');
    if (confirmed) {
        let data = await deleteFurniture(id);
        context.page.redirect('/dashboard');
    }
}

async function getView(context) {
    let id = context.params.id;
    let boundDeleteHandler = deleteHandler.bind(null, context, id);
    let furnitureDetails = await getFurniture(id);
    console.log(furnitureDetails);
    let viewHtml = detailsTemplate(furnitureDetails, boundDeleteHandler);
    context.renderView(viewHtml);
}

let details = {
    getView,
}

export default details;