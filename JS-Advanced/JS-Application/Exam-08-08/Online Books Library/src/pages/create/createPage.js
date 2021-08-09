import { createTemplate } from "./createTemplate.js";

let _router = undefined;
let _render = undefined;
let _bookService = undefined;

function initialize(router, render, bookService) {
    _router = router;
    _render = render;
    _bookService = bookService;
}

function getView(ctx) {
    let templateResult = createTemplate(submitHandler);
    _render(templateResult);

}

function submitHandler(e) {
    e.preventDefault();

    let formData = Object.fromEntries(new FormData(e.currentTarget));
    console.log(formData);

    if (formData.title.trim() == '' || formData.description.trim() == '' || formData.imageUrl.trim() == '') {
        return alert('All fileds are required!');
    }

    _bookService.createBook(formData)
        .then(data => {
            _router.redirect('/dashboard');
        })

}

export default {
    initialize,
    getView,
}