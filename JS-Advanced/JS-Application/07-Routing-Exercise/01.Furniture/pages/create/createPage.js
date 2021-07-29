import { createFurniture } from "../../services/furnitures.js";
import { createTemplate } from "./createTemplate.js";

let form = undefined;
async function createFormHandler(context, e) {
    e.preventDefault();
    let formData = new FormData(e.target);
    let make = formData.get('make');
    let model = formData.get('model');
    let year = Number(formData.get('year'));
    let description = formData.get('description');
    let price = Number(formData.get('price'));
    let img = formData.get('img');
    let material = formData.get('material');

    form.invalidFields = {}

    if (make.length < 4) {
        form.invalidFields.make = true;
    }

    if (model.length < 4) {
        form.invalidFields.model = true;
    }

    if (!(year >= 1950 && year <= 2050)) {
        form.invalidFields.year = true;
    }

    if (description.length < 10) {
        form.invalidFields.description = true;
    }

    if (!(price > 0)) {
        form.invalidFields.price = true;
    }

    if (img.trim() == '') {
        form.invalidFields.img = true;
    }

    if (Object.keys(form.invalidFields).length > 0) {
        let viewTemplate = createTemplate(form);
        return context.renderView(viewTemplate);
    }

    let body = {
        make, model, year, description, price, img, material
    }

    let furnitureInfo = createFurniture(body);
    context.page.redirect('/dashboard');
}

async function getView(context) {
    let boundSubmitHandler = createFormHandler.bind(null, context);
    form = {
        createFormHandler: boundSubmitHandler,
        invalidFields: {
            make: true,
            model: true,
            year: true,
            description: true,
            price: true,
            img: true,
        }
    }

    let viewTemplate = await createTemplate(form);
    context.renderView(viewTemplate);
}

let create = {
    getView,
}

export default create;