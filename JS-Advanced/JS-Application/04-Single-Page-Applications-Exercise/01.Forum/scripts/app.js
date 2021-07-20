import createNewPost from "./createNewPosts.js";
import createHtml from "./createHtmlPost.js"

let message = document.getElementById('message');
message.style.display = 'none';

let topicsContainerDiv = document.querySelector('.topic-container');
topicsContainerDiv.addEventListener('click', loadPostDetails);

(function getAllPosts() {
    let postContainer = document.querySelector('.topic-container');
    fetch('http://localhost:3030/jsonstore/collections/myboard/posts')
        .then(response => response.json())
        .then(data => {
            console.log(data);
            Object.values(data).forEach(post => {
                topicsContainerDiv.prepend(createHtml.createHtmlPost(post));
            })
        })
})();

function loadPostDetails(e) {
    let wrapper = e.target.closest('.topic-name-wrapper');
    let id = wrapper.dataset.postId;
    sessionStorage.setItem('post_id', id);
    window.location.pathname = '/01.Forum/theme-content.html';
}


