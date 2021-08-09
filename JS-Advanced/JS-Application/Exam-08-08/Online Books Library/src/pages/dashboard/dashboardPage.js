import { getAllBooks } from "../../services/bookService.js";
import { dashboardTemplate } from "./dashboardTemplate.js";


let _router = undefined;
let _render = undefined;

function initialize(router, render) {
    _router = router;
    _render = render;
}

function getView(ctx) {

    getAllBooks()
        .then(books => {
            let templateResult = dashboardTemplate(books);
            _render(templateResult);

        });

}

export default {
    initialize,
    getView,
}