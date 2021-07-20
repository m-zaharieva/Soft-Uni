function createHtmlPost(data) {
    let nameWrapper = document.createElement('div');
    nameWrapper.classList.add('topic-name-wrapper');
    nameWrapper.dataset.postId = data._id;

    let topicNameDiv = document.createElement('div');
    topicNameDiv.classList.add('topic-name')

    let anchor = document.createElement('a');
    anchor.classList.add('normal');
    anchor.setAttribute('href', '#');
    let heading2 = document.createElement('h2');
    heading2.textContent = data.title;
    anchor.appendChild(heading2);

    let columnsDiv = document.createElement('div');
    columnsDiv.classList.add('columns');

    let containerDiv = document.createElement('div');

    let dateParagraph = document.createElement('p');
    dateParagraph.textContent = 'Date:';
    let timeElement = document.createElement('time');
    timeElement.textContent = data.date;
    dateParagraph.appendChild(timeElement);

    let nickNameDiv = document.createElement('div');
    nickNameDiv.classList.add('nick-name');
    let nameParagraph = document.createElement('p');
    nameParagraph.textContent = 'Username:';
    let nameSpan = document.createElement('span');
    nameSpan.textContent = data.username;
    nameParagraph.appendChild(nameSpan);
    nickNameDiv.appendChild(nameParagraph)

    containerDiv.appendChild(dateParagraph);
    containerDiv.appendChild(nickNameDiv);
    columnsDiv.appendChild(containerDiv);
    topicNameDiv.appendChild(anchor);
    topicNameDiv.appendChild(columnsDiv);
    nameWrapper.appendChild(topicNameDiv);

    return nameWrapper;
}

function loadHtmlPost(data) {
    let fragment = document.createDocumentFragment();

    let headerDiv = document.createElement('div');
    headerDiv.classList.add('header');

    let image = document.createElement('img');
    image.src = './static/profile.png';
    image.alt = 'avatar';

    let dateParagraph = document.createElement('p');
    dateParagraph.textContent = 'posted on';

    let nameSpan = document.createElement('span');
    nameSpan.textContent = data.username;

    let timeElement = document.createElement('time');
    timeElement.textContent = data.date;

    dateParagraph.prepend(nameSpan);
    dateParagraph.append(timeElement);

    let contentElement = document.createElement('p');
    contentElement.textContent = data.text;
    contentElement.classList.add('post-content');

    headerDiv.append(image);
    headerDiv.append(dateParagraph);
    headerDiv.append(contentElement);
    fragment.append(headerDiv);

    return fragment;
}

function createHhtmlComment(data) {
    let userCommentDiv = document.createElement('div');
    userCommentDiv.id = 'user-comment';

    let topicNameWrapperDiv = document.createElement('div');
    topicNameWrapperDiv.classList.add('topic-name-wrapper');

    let topicNameDiv = document.createElement('div');
    topicNameDiv.classList.add('topic-name');

    let basicInfoParagraph = document.createElement('p');
    basicInfoParagraph.textContent = ' commented on ';

    let nameStrongElement = document.createElement('strong');
    nameStrongElement.textContent = data.username;

    let timeElement = document.createElement('time');
    timeElement.textContent = data.date;

    let postContentDiv = document.createElement('div');
    postContentDiv.classList.add('post-content');

    let postText = document.createElement('p');
    postText.textContent = data.comment;

    postContentDiv.append(postText);
    basicInfoParagraph.prepend(nameStrongElement);
    basicInfoParagraph.append(timeElement);
    topicNameDiv.append(basicInfoParagraph);
    topicNameDiv.append(postContentDiv);
    topicNameWrapperDiv.append(topicNameDiv);
    userCommentDiv.append(topicNameWrapperDiv);

    return userCommentDiv;
}

export default { 
    createHtmlPost,
    loadHtmlPost,
    createHhtmlComment
};