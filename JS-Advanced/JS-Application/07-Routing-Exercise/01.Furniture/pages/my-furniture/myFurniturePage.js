import { getMyFurnitures } from "../../services/furnitures.js";
import { myFurnitureTemplate } from "./myFurnitureTemplate.js";


async function getView(context) {
    console.log(context);
    let furnitures = await getMyFurnitures();
    let viewHtml = await myFurnitureTemplate(furnitures);
    context.renderView(viewHtml);
}

let myFurnitures = {
    getView,
}

export default myFurnitures;