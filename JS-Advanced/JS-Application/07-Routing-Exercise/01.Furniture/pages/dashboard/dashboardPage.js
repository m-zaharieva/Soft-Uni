import { getAllFurnitures } from "../../services/furnitures.js";
import { dashboardHtml } from "./dashboardTemplates.js";


async function getView(context) {
    console.log(context);
    let furnitures = await getAllFurnitures();
    let viewHtml = await dashboardHtml(furnitures);
    context.renderView(viewHtml);
}

let dashboard = {
    getView,
}

export default dashboard;