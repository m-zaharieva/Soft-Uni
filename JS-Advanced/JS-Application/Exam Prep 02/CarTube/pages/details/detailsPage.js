import { detailsTemplate } from "./detailsTemplate.js";

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
        .then(carData => {
            let modelView = {
                car: carData, 
                deleteHandler: (e) => deleteHandler(context, e),
                userId, 
            }
            let templateResult = detailsTemplate(modelView);
            _renderer(templateResult);
        })
}

function deleteHandler(context, e) {
    let userData = JSON.parse(_authService.getUserData());
    let token = userData.accessToken;
    let id = context.params.id;
    
    _crudService.deleteItem(id, token)
        .then(res => {
            if(res.ok) {
                _router.redirect('/all-listings');
            } else {
                alert('error')
            }
        })
}

export default {
    getView,
    initialize
}
