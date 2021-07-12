function solution() {
    let url = 'http://localhost:3030/jsonstore/advanced/articles/list';
    let mainSection = document.getElementById('main');

    (async () => {
        let response = await fetch(url);
        let articles = await response.json();

        articles.forEach(title => {
            let newArticle = createAccordion(title);
            mainSection.appendChild(newArticle);
            console.log(newArticle);
        });
    })();

    function createAccordion(article) {
        let accordionDiv = document.createElement('div');
        accordionDiv.classList.add('accordion');

        let headDiv = document.createElement('div');
        headDiv.classList.add('head');

        let titleSpan = document.createElement('span');
        titleSpan.textContent = article.title; // **

        let showMoreButton = document.createElement('button');
        showMoreButton.classList.add('button');
        showMoreButton.textContent = 'MORE';
        showMoreButton.setAttribute('id', `${article._id}`); // **
        showMoreButton.addEventListener('click', toggleArticle);
        
        headDiv.appendChild(titleSpan);
        headDiv.appendChild(showMoreButton);
        accordionDiv.appendChild(headDiv);

        (async () => {
            let contentResponse = await fetch(`http://localhost:3030/jsonstore/advanced/articles/details/${article._id}`);
            let currentArticle = await contentResponse.json();
            console.log(currentArticle);

            let extraDiv = document.createElement('div');
            extraDiv.classList.add('extra');

            let textParagraph = document.createElement('p');
            textParagraph.textContent = currentArticle.content;

            extraDiv.appendChild(textParagraph);
            accordionDiv.appendChild(extraDiv);
        })()
        return accordionDiv;
    }

    function toggleArticle(e) {
        let button = e.currentTarget;
        let articleWrapper = e.currentTarget.parentElement.parentElement;
        let hiddenDiv = articleWrapper.querySelector('.extra');

        hiddenDiv.style.display = hiddenDiv.style.display == 'block' ? 'none' : 'block';
        button.textContent = button.textContent == 'MORE' ? 'LESS' : 'MORE';
    }
}

solution();

