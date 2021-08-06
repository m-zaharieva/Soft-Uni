import { editTemplate } from "./editTemplate.js";

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
    let carId = context.params.id;

    let userData = _authService.getUserData();
    let isLogedIn = userData ? true : false;
    let userId = isLogedIn ? JSON.parse(userData)._id : '';

    _crudService.getDetails(carId)
        .then(res => res.json())
        .then(data => {
            let modelView = {
                car: data,
                submitHandler,
            }

            let templateResult = editTemplate(modelView);
            _renderer(templateResult);
        })

}

function submitHandler(carId, e) {
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
        price == '') {
        alert('All fields are required!');
        return;
    }

    let carData = {
        brand,
        model,
        description,
        year,
        imageUrl,
        price
    };

    let userData = JSON.parse(_authService.getUserData());
    let token = userData.accessToken;

    _crudService.updateItem(carId, token, carData)
        .then(res => res.json())
        .then(data => {
            _router.redirect(`/details/${carId}`);
        });
}

export default {
    getView,
    initialize
}
