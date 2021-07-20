import createHtml from "./createHtmlPost.js";

let postsForm = document.getElementById('create-post');
postsForm.addEventListener('submit', createNewPost);
let topicsContainerDiv = document.querySelector('.topic-container');

function createNewPost(e) {
    e.preventDefault();
    let form = new FormData(postsForm);
    let body = {
        title: form.get('topicName'),
        username: form.get('username'),
        text: form.get('postText'),
        date: new Date
    }
    if (body.title.trim() == '' || body.username.trim() == '' || body.text.trim == '') {
        return alert('All fields are required!');
    }
    fetch('http://localhost:3030/jsonstore/collections/myboard/posts', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body)
    })
        .then(response => response.json())
        .then(data => topicsContainerDiv.prepend(createHtml.createHtmlPost(data)))
        .catch(error => alert('We couldn\'t send your request. Please try again'))
}


export default createNewPost;