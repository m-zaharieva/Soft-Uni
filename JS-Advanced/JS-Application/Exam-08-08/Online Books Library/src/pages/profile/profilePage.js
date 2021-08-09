import { profileTemplate } from "./profileTemplate.js";

let _router = undefined;
let _render = undefined;
let _authService = undefined;
let _bookService = undefined;

function initialize(router, render, authService, bookService) {
    _router = router;
    _render = render;
    _authService = authService;
    _bookService = bookService;
}

function getView(ctx) {
    let userData = _authService.getUserData();
    _bookService.getOwnBooks(userData._id)
        .then(books => {
            let templateResult = profileTemplate(books);
            _render(templateResult);

        })
}

export default {
    initialize,
    getView,
}