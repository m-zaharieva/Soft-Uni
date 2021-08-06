import { createTemplate } from "./createTemplate.js";

let _router = undefined;
let _renderer = undefined;
let _crudService = undefined;
let _authService = undefined;

function initialize(router, renderer, crudService, authService) {
    _router = router;
    _renderer = renderer;
    _crudService = crudService;
    _authService = authService;
}

function getView(context) {
    let modelView = {
        submitHandler,
    }
    let templateResult = createTemplate(modelView);
    _renderer(templateResult);
}

function submitHandler(e) {
    e.preventDefault();

    let form = e.currentTarget;
    let formData = new FormData(form);

    let brand = formData.get('brand');
    let model = formData.get('model');
    let description = formData.get('description');
    let year = formData.get('year');
    year = Number(year);
    let imageUrl = formData.get('imageUrl');
    let price = formData.get('price');
    price = Number(price);

    if (brand.trim() == '' ||
        model.trim() == '' ||
        description.trim() == '' ||
        year == '' ||
        imageUrl.trim() == '' ||
        price == '' ) {
        alert('All fields are required!');
        return;
    }

    if (year <= 0 || price <= 0 ) {
        alert('Price And Year must be greater than 0');
        return;
    }

    let carData = {
        brand,
        model,
        description,
        year,
        imageUrl,
        price
    }

    let userData = JSON.parse(_authService.getUserData());
    let token = userData.accessToken;
    _crudService.create(carData, token)
        .then(res => res.json())
        .then(data => {
            if (data.hasOwnProperty('code')) {
                alert(data.message);
                return;
            }

            _router.redirect('/all-listings');
        })
        .catch(error => {
            alert(error);
        })
}

export default {
    getView,
    initialize
}
