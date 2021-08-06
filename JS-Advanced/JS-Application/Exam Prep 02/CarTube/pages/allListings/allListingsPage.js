import { allListingsTemplate } from "./allListingsTemplate.js";

let _router = undefined;
let _renderer = undefined;
let _crudService = undefined;

function initialize(router, renderer, crudService) {
    _router = router;
    _renderer = renderer;
    _crudService = crudService;
}

function getView(context) {
    _crudService.getAll()
        .then(res => res.json())
        .then(cars => {
            let modelView = {
                cars: cars,
            }
            let templateResult = allListingsTemplate(modelView);
            _renderer(templateResult);
        })
}

export default {
    getView,
    initialize
}
