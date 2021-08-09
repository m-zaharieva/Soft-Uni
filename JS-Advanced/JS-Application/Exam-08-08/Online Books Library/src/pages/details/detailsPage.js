import { getOneBook } from "../../services/bookService.js";
import { detailsTemplate } from "./detailsTemplate.js";

let _router = undefined;
let _render = undefined;
let _authService = undefined;
let _bookService = undefined;
let _likesService = undefined;

function initialize(router, render, authService, bookService, likesService) {
    _router = router;
    _render = render;
    _authService = authService;
    _bookService = bookService;
    _likesService = likesService;
}

function getView(ctx) {
    let bookId = ctx.params.id;
    let userData = _authService.getUserData();
    let userId = userData ? userData._id : undefined;
    getOneBook(bookId) 
        .then(data => console.log(data));
    Promise.all([getOneBook(bookId), _likesService.likesCount(bookId), _likesService.currentUserLikeSpecificBook(bookId, userId)])
        .then(([book, likesCount, currentUserLikes]) => {
            let templateResult = detailsTemplate(book, userData, likesCount, currentUserLikes, (e) => deleteHandler(bookId, e), (e) => likesHandler(bookId, e));
            _render(templateResult);
        })
}

function deleteHandler(bookId, e) {
    let confirmation = window.confirm('Are you sure you want to delete this book?');
    
    if (confirmation) {
        _bookService.deleteBook(bookId)
            .then(() => {
                _router.redirect('/dashboard');
            })
    }
}

function likesHandler(bookId, e) {
    _likesService.addLikes({bookId: bookId})
        .then(data => {
            _router.redirect(`/details/${bookId}`)
        });
}

export default {
    initialize,
    getView,
}