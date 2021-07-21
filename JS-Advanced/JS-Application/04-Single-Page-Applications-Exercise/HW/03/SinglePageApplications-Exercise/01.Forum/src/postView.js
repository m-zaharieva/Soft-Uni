let postElement = document.querySelector('.comment .header');
let baseUrl = 'http://localhost:3030/jsonstore/collections/myboard/posts/';

async function loadPostInfo() {
    let postRequest = await fetch(baseUrl + localStorage.getItem('curr-post-id'));
    let postResult = await postRequest.json();

    document.querySelector('.header p span').textContent = postResult.username;
    document.querySelector('.header p time').textContent = postResult.dateTime;
    document.querySelector('.header .post-content').textContent = postResult.postText;
    document.querySelector('.theme-name h2').textContent = postResult.topicName;
}

loadPostInfo();

let postCommentButton = document.querySelector('.answer-comment button');
postCommentButton.addEventListener('click', createComment);

async function createComment(e) {
    e.preventDefault();

    let form = document.querySelector('.answer-comment .answer form');
    let data = new FormData(form);

    let postText = data.get('postText');
    let username = data.get('username');

    var today = new Date();
    var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    var dateTime = date + ' ' + time;

    let newComment = {
        postText,
        username,
        dateTime,
        postId: localStorage.getItem('curr-post-id')
    }
    try {
        let createCommentRequest = await fetch('http://localhost:3030/jsonstore/collections/myboard/comments', {
            method: 'POST',
            headers: { 'Content-type': 'application/json' },
            body: JSON.stringify(newComment)
        });
        let createCommentResult = await createCommentRequest.json();

        createHtmlComment(createCommentResult.username, createCommentResult.postText, createCommentResult.dateTime);
    } catch (err) {
        console.error(err);
    }

    form.reset();
}

async function loadComments() {
    try {
        let commentsRequest = await fetch('http://localhost:3030/jsonstore/collections/myboard/comments');
        let commentsResult = await commentsRequest.json();

        Object.values(commentsResult).forEach(comment => {
            if (comment.postId === localStorage.getItem('curr-post-id')) {
                createHtmlComment(comment.username, comment.postText, comment.dateTime);
            }
        });
    } catch (err) {
        console.error(err);
    }

}
loadComments();

function createHtmlComment(username, postText, dateTime) {
    let template = document.getElementById('user-comment');

    let htmlComment = template.cloneNode(true);
    htmlComment.removeAttribute('id');
    htmlComment.classList.remove('hidden');
    htmlComment.querySelector('.topic-name p strong').textContent = username;
    htmlComment.querySelector('.topic-name p time').textContent = dateTime;
    htmlComment.querySelector('.topic-name .post-content p').textContent = postText;

    document.querySelector('.comment').appendChild(htmlComment);
}