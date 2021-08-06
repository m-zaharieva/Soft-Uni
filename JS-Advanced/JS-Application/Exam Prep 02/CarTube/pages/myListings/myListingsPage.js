import { myListingsTemplate } from "./myListingsTemplate.js";

let _router = undefined;
let _renderer = undefined;
let _authService = undefined;
let _crudService = undefined;

function initialize(router, renderer, authService, crudService) {
    _router = router;
    _renderer = renderer;
    _authService = authService;
    _crudService = crudService;
}

function getView(context) {
    let userData = JSON.parse(_authService.getUserData());
    let userId = userData._id;
    
    _crudService.myItems(userId)
        .then(res => res.json())
        .then(cars => {
            let modelView = {
                cars: cars,
            }
            
            let templateResult = myListingsTemplate(modelView);
            _renderer(templateResult);
        });

}

export default {
    getView,
    initialize
}
