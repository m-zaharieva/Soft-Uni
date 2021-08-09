import { editTemplate } from "./editTemplate.js";

let _router = undefined;
let _render = undefined;
let _bookService = undefined;

function initialize(router, render, bookService) {
    _router = router;
    _render = render;
    _bookService = bookService;
}

function getView(ctx) {
    let id = ctx.params.id;
    _bookService.getOneBook(id)
        .then(book => {
            console.log(book);
            let templateResult = editTemplate(book, (e) => submitHandler(id, e));
            _render(templateResult);

        })
}

function submitHandler(id, e) {
    e.preventDefault();

    let formData = Object.fromEntries(new FormData(e.currentTarget));

    if (formData.title.trim() == '' || formData.description.trim() == '' || formData.imageUrl.trim() == '') {
        return alert('All fields are required!');
    }

    _bookService.editBook(id, formData)
        .then(data => {
            _router.redirect(`/details/${id}`)
        })

}

export default {
    initialize,
    getView,
}