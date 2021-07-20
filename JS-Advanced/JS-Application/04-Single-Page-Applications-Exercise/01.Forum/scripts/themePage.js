import createHtml from "./createHtmlPost.js";

let themeDivWrapper = document.querySelector('.theme-content');
let commentDivElement = document.querySelector('.comment');

let homeButton = document.querySelector('nav a');
homeButton.addEventListener('click', (e) => {
    window.location.pathname = '/01.Forum/index.html';
})

function loadCurrentTheme() {

    let id = sessionStorage.getItem('post_id');

    fetch(`http://localhost:3030/jsonstore/collections/myboard/posts/${id}`)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            let themeName = document.querySelector('.theme-name h2');
            themeName.textContent = data.title;
            let currentTitle = createHtml.loadHtmlPost(data);
            commentDivElement.append(currentTitle);
        })

    fetch('http://localhost:3030/jsonstore/collections/myboard/comments')
        .then(response => response.json())
        .then(data => {
            Object.values(data)
                .filter(comment => comment.commentTo == id)
                .forEach(el => {
                    commentDivElement.append(createHtml.createHhtmlComment(el))
                })
        })
}

loadCurrentTheme();


let commentsForm = document.getElementById('comments-form');
commentsForm.addEventListener('submit', uploadComment);

function uploadComment(e) {
    e.preventDefault();
    let form = new FormData(e.currentTarget);
    let id = sessionStorage.getItem('post_id');
    let body = {
        username: form.get('username'),
        comment: form.get('postText'),
        commentTo: id,
        date: new Date,
    };

    if (body.username.trim() == '') {
        return alert('Username is required!')
    }

    fetch('http://localhost:3030/jsonstore/collections/myboard/comments', {
        method: 'POST', 
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(body)
    })
        .then(response => response.json())
        .then(data => {
            console.log(data);
            let currentComment = createHtml.createHhtmlComment(data);
            commentDivElement.append(currentComment);
        })

}