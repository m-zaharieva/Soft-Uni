function solve() {
   // select elements 
   let createButton = document.querySelector('.create');
   createButton.addEventListener('click', createArticle);

   function createArticle(e) {
      e.preventDefault();
      let postsWrapperElement = e.currentTarget.parentElement.parentElement.parentElement.parentElement;
      let postsHolder = postsWrapperElement.querySelector('main section');
      // submit form 
      let authorElement = postsWrapperElement.querySelector('#creator');
      let authorName = authorElement.value;

      let titleElement = postsWrapperElement.querySelector('#title');
      let title = titleElement.value;

      let categoryElement = postsWrapperElement.querySelector('#category');
      let category = categoryElement.value;

      let contentElement = postsWrapperElement.querySelector('#content');
      let content = contentElement.value;

      // create new post 
      let articleElement = document.createElement('article');

      let headingOneTitle = document.createElement('h1');
      headingOneTitle.textContent = title;
      articleElement.appendChild(headingOneTitle);

      let categoryParagraph = document.createElement('p');
      categoryParagraph.textContent = 'Category:'
      let categoryStrong = document.createElement('strong');
      categoryStrong.textContent = category;
      categoryParagraph.appendChild(categoryStrong);
      articleElement.appendChild(categoryParagraph);

      let creatorParagraph = document.createElement('p');
      creatorParagraph.textContent = 'Creator:'
      let creatorStrong = document.createElement('strong');
      creatorStrong.textContent = authorName;
      creatorParagraph.appendChild(creatorStrong);
      articleElement.appendChild(creatorParagraph);

      let contentParagraph = document.createElement('p');
      contentParagraph.textContent = content;
      articleElement.appendChild(contentParagraph);

      let buttonHolder = document.createElement('div');
      buttonHolder.className = 'buttons';

      let deleteButton = document.createElement('button');
      deleteButton.className = 'btn delete';
      deleteButton.textContent = 'Delete';
      buttonHolder.appendChild(deleteButton);

      let archiveButton = document.createElement('button');
      archiveButton.className = 'btn archive';
      archiveButton.textContent = 'Archive';
      buttonHolder.appendChild(archiveButton);

      articleElement.appendChild(buttonHolder);

      postsHolder.appendChild(articleElement);

      deleteButton.addEventListener('click', deletePost);
      archiveButton.addEventListener('click', archivePost);

      authorElement.value = '';
      titleElement.value = '';
      categoryElement.value = '';
      contentElement.value = '';

   }

   function deletePost(e) {
      let articleElement = e.target.parentElement.parentElement;
      articleElement.remove();
   }

   function archivePost(e) {
      let articleElement = e.target.parentElement.parentElement;
      let titleElement = articleElement.querySelector('h1');

      let parrentElement = e.target.parentElement.parentElement.parentElement.parentElement.parentElement;
      let archiveSection = parrentElement.querySelector('.archive-section');
      let orderedList = archiveSection.querySelector('ol');

      let listItem = document.createElement('li');
      listItem.textContent = titleElement.textContent;
      orderedList.appendChild(listItem);

      orderedList = Array.from(orderedList.querySelectorAll('li'))
         .sort((a, b) => (a.textContent).localeCompare(b.textContent))
         .forEach(li => orderedList.appendChild(li));

      articleElement.remove();
   }

}

