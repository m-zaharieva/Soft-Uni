function attachEvents() {
    let postsUrl = 'http://localhost:3030/jsonstore/blog/posts';
    let commentsUrl = 'http://localhost:3030/jsonstore/blog/comments';

    let loadPostsButton = document.getElementById('btnLoadPosts');
    loadPostsButton.addEventListener('click', loadPosts);

    let viewButton = document.getElementById('btnViewPost');
    viewButton.addEventListener('click', viewDetails);

    
    async function viewDetails(e) {
        // clear elements 
        let postBody = document.getElementById('post-body');
        postBody.textContent = '';

        let commentsList = document.getElementById('post-comments');
        let listItems = commentsList.querySelectorAll('li');
        Array.from(listItems).forEach(li => li.remove());

        // select elements
        let selectElement = e.target.previousElementSibling;
        let titleId = selectElement.value;
        let selectedOption = selectElement.querySelector(`option[value="${titleId}"]`);
        let postTitle = selectedOption.textContent;
        
        let h1Title = document.getElementById('post-title');
        h1Title.textContent = postTitle;

        // GET request for current post
        let postResponse = await fetch(`${postsUrl}/${titleId}`);
        let postContent = await postResponse.json();

        // GET request for all comments
        let commentsResponse = await fetch(commentsUrl);
        let comments = await commentsResponse.json();   

        try{
            await Promise.all([postContent, comments]); 
        } catch(error) {
            h1Title.textContent = 'Error';
        }

        
        postBody.textContent = postContent.body;
        Object.keys(comments)
            .filter(commentId => comments[commentId].postId == titleId)
            .forEach(elId => {
                console.log(elId);
                let liElement = document.createElement('li');
                liElement.id = elId;
                liElement.textContent = comments[elId].text;
                commentsList.appendChild(liElement);
            });
    }
    
    async function loadPosts(e) {
        // let button = e.currentTarget;
        let postsResponse = await fetch(postsUrl);
        let posts = await postsResponse.json();

        // clear previous session
        let selectElement = document.getElementById('posts');
        let options = selectElement.querySelectorAll('option');
        Array.from(options).forEach(option => option.remove());


        Object.keys(posts).forEach(postId => {
            let postTitle = posts[postId].title;
            let newOption = createOption(postId, postTitle);
            selectElement.appendChild(newOption);
        })
        
    }

    function createOption(id, content) {
        let newOptionElement = document.createElement('option');
        newOptionElement.value = id;
        newOptionElement.textContent = content;

        return newOptionElement;
    }
}

attachEvents();