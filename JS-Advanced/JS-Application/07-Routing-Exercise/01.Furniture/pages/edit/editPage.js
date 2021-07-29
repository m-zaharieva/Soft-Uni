import { editFurniture, getFurniture } from "../../services/furnitures.js";
import { editTemplate } from "./editTemplate.js";

let form = undefined;
async function editFormHandler(context, e) {
    e.preventDefault();
    let id = context.params.id;
    let formData = new FormData(e.target);
    let make = formData.get('make');
    let model = formData.get('model');
    let year = formData.get('year');
    let description = formData.get('description');
    let price = formData.get('price');
    let img = formData.get('img');
    let material = formData.get('material');

    form.validFields = {
        make: true,
        model: true,
        year: true,
        description: true,
        price: true,
        img: true
    }
    
    if (make.length < 4) {
        form.validFields.make = false;
    }

    if (model.length < 4) {
        form.validFields.model = false;
    }

    if (!(year >= 1950 && year <= 2050)) {
        form.validFields.year = false;
    }

    if (description.length < 10) {
        form.validFields.description = false;
    }

    if (!(price > 0)) {
        form.validFields.price = false;
    }

    if (img.trim() == '') {
        form.validFields.img = false;
    }

    if (Object.values(form.validFields).includes(false)) {
        let editDetails = await getFurniture(id);
        let viewHtml = editTemplate(editDetails, form);
        return context.renderView(viewHtml);
    }

    let body = {
        make, model, year, description, price, img, material
    }

    let furnitureInfo = editFurniture(id, body);
    context.page.redirect(`/details/${id}`);
}

async function getView(context) {
    let id = context.params.id;
    let boundEditFormHandler = editFormHandler.bind(null, context);
    form = {
        editFormHandler: boundEditFormHandler,
        validFields: {
            make: true,
            model: true,
            year: true,
            description: true,
            price: true,
            img: true
        }
    }
    let editDetails = await getFurniture(id);
    let viewHtml = editTemplate(editDetails, form);
    context.renderView(viewHtml);

}

let edit = {
    getView,
}

export default edit;