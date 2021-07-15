const viewBtn = document.getElementById('btnViewPost');

function attachEvents() {
    document.getElementById('btnLoadPosts').addEventListener('click', getPosts);
    viewBtn.addEventListener('click', displayPost);
    viewBtn.disabled = true;
}

attachEvents();

async function getPosts() {
    const url = `http://localhost:3030/jsonstore/blog/posts`;

    const response = await fetch(url);
    const data = await response.json();

    const select = document.getElementById('posts');
    select.innerHTML = '';

     Object.values(data).map(createOption)
        .forEach(post => select.appendChild(post));

    viewBtn.disabled = false;

}

function createOption(post) {
    const result = document.createElement('option');
    result.textContent = post.title;
    result.value = post.id;

    return result;
};

function displayPost() {
    const postID = document.getElementById('posts').value;

    getCommentsByPostId(postID);
}

async function getCommentsByPostId(postid) {
    const commentsUl = document.getElementById('post-comments');
    commentsUl.innerHTML = '';

    const postUrl = `http://localhost:3030/jsonstore/blog/posts/` + postid;
    const commentsUrl = `http://localhost:3030/jsonstore/blog/comments`;

    const [postResponse, commentsReponse] = await Promise.all([
        fetch(postUrl),
        fetch(commentsUrl)
    ]);

    const postData = await postResponse.json();

    document.getElementById('post-title').textContent = postData.title;
    document.getElementById('post-body').textContent = postData.body;

    const commentsData = await commentsReponse.json();

    const comments = Object.values(commentsData).filter(comment => comment.postId == postid);


    comments.map(createComment).forEach(comment => commentsUl.appendChild(comment));

}

function createComment(comment) {
    const result = document.createElement('li');
    result.textContent = comment.text;
    result.id = comment.id;

    return result;
}