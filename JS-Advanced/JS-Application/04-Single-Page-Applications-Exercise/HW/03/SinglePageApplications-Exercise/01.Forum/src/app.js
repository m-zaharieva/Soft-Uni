let cancelButton = document.querySelector('.new-topic-buttons .cancel');
let publicButton = document.querySelector('.new-topic-buttons .public');

cancelButton.addEventListener('click', clearForm);

function clearForm(e) {
    e.preventDefault();
    let form = e.target.parentNode.parentNode;
    form.reset();
}

publicButton.addEventListener('submit', createTopic);
async function createTopic(e) {
    e.preventDefault();

    let form = e.target.parentNode.parentNode;
    let data = new FormData(form);

    let topicName = data.get('topicName');
    let username = data.get('username');
    let postText = data.get('postText');

    if (topicName === '' || username === '' || postText=== '') {
        alert("Empty fields!");
        return;
    }
    var today = new Date();
    var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    var dateTime = date + ' ' + time;
    let newPost = {
        topicName,
        username,
        postText,
        dateTime
    }

    let createTopicRequest = await fetch('http://localhost:3030/jsonstore/collections/myboard/posts', {
        method: 'POST',
        headers: { 'Content-type': 'application/json' },
        body: JSON.stringify(newPost)
    });
    let createTopicResult = await createTopicRequest.json();
    createHtmlPost(topicName, username, dateTime, createTopicResult._id);
    form.reset();
}

async function loadTopics() {
    let topicRequest = await fetch('http://localhost:3030/jsonstore/collections/myboard/posts');
    let topicResult = await topicRequest.json();

    Object.values(topicResult).forEach(topic => {
        createHtmlPost(topic.topicName, topic.username, topic.dateTime, topic._id);
    })
}

loadTopics();

function createHtmlPost(topicName, username, dateTime, id) {
    let template = document.querySelector('.topic-container .hidden');
    let newHtmlPost = template.cloneNode(true);
    newHtmlPost.classList.remove('hidden');
    newHtmlPost.querySelector('h2').textContent = topicName;
    newHtmlPost.querySelector('.nick-name p span').textContent = username;

    newHtmlPost.querySelector('p time').textContent = dateTime;
    newHtmlPost.setAttribute('post-id', id);

    let aLink = newHtmlPost.querySelector('.topic-name a');
    aLink.addEventListener('click', (e)=>{
        e.preventDefault();
        localStorage.setItem('curr-post-id', newHtmlPost.getAttribute('post-id'));
        window.location.replace('theme-content.html')
    });

    document.querySelector('.topic-container').appendChild(newHtmlPost);
}