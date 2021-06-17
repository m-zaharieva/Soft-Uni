function getArticleGenerator(articles) {
    return () => {
        let container = document.getElementById('content');
        let articleContainer = document.createElement('article');
        articleContainer.textContent = articles.shift();
        if (articleContainer.textContent !== '') {
            container.appendChild(articleContainer);
        }
    }
}
