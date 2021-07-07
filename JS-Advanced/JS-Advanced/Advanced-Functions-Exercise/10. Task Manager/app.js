function solve() {
    // 1. Select the ADD button
    let addButtonElement = document.querySelector('#add');
    // 1a. Add event listener to ADD button
    addButtonElement.addEventListener('click', addTask);

    // select the "Add Task" inputs
    let taskInputElement = document.querySelector('#task');
    let descriptionInputElement = document.querySelector('#description');
    let dateInputElement = document.querySelector('#date');

    // select the section elements
    let mainDivWrapper = document.querySelector('.wrapper');
    let openSectionDivContainer = mainDivWrapper.querySelector('section:nth-child(2) div:last-child');
    let progressSectionDivContainer = mainDivWrapper.querySelector('section:nth-child(3) #in-progress');
    let completeSectionDivContainer = mainDivWrapper.querySelector('section:nth-child(4) div:last-child');
    
    // implement functionality to the ADD button
    function addTask(e) {
        e.preventDefault();

        // extract "Add Task" inputs' values
        let taskValue = taskInputElement.value;
        let descriptionValue = descriptionInputElement.value;
        let dateValue = dateInputElement.value;

        // set date validation pattern
        let pattern = /[\d]{4}\.[\d]{2}\.[\d]{2}/g;

        // validate inputs
        if (taskValue.trim() !== '' &&
            descriptionValue.trim() !== '' &&
            dateValue.trim() !== '' &&
            pattern.test(dateValue)) {

            // create article element, which to add to the OPEN section
            let article = document.createElement('article');

            let h3 = document.createElement('h3');
            h3.textContent = taskValue;

            let descriptionParagraph = document.createElement('p');
            descriptionParagraph.textContent = `Description: ${descriptionValue}`;

            let dateParagraph = document.createElement('p');
            dateParagraph.textContent = `Due Date: ${dateValue}`;

            let div = document.createElement('div');
            div.setAttribute('class', 'flex');

            let startButton = document.createElement('button');
            startButton.addEventListener('click', startTask);
            startButton.setAttribute('class', 'green');
            startButton.textContent = 'Start';

            let deleteButton = document.createElement('button');
            deleteButton.addEventListener('click', deleteTask);
            deleteButton.setAttribute('class', 'red');
            deleteButton.textContent = 'Delete';

            // chain HTML elements
            div.appendChild(startButton);
            div.appendChild(deleteButton);

            article.appendChild(h3);
            article.appendChild(descriptionParagraph);
            article.appendChild(dateParagraph)
            article.appendChild(div);

            openSectionDivContainer.appendChild(article);
        }
    }

    function startTask(e) {
        let currentArticle = e.target.parentElement.parentElement;
        let currentArticleDiv = currentArticle.querySelector('div');
        currentArticleDiv.remove();

        let progressDiv = document.createElement('div');
        progressDiv.setAttribute('class', 'flex');

        let progressDeleteButton = document.createElement('button');
        progressDeleteButton.addEventListener('click', progressDelete);
        progressDeleteButton.setAttribute('class', 'red');
        progressDeleteButton.textContent = 'Delete';

        let progressFinishButton = document.createElement('button');
        progressFinishButton.addEventListener('click', finishTask);
        progressFinishButton.setAttribute('class', 'orange');
        progressFinishButton.textContent = 'Finish';

        progressDiv.appendChild(progressDeleteButton);    
        progressDiv.appendChild(progressFinishButton);
        currentArticle.appendChild(progressDiv);

        progressSectionDivContainer.appendChild(currentArticle);
    }

    function deleteTask(e) {
        let currentArticle = e.target.parentElement.parentElement;
        currentArticle.remove();
    }

    function progressDelete(e) {
        let currentArticle = e.target.parentElement.parentElement;
        currentArticle.remove();
    }

    function finishTask(e) {
        let currentArticle = e.target.parentElement.parentElement;
        let currentArticleDiv = currentArticle.querySelector('div');
        currentArticleDiv.remove();
        completeSectionDivContainer.appendChild(currentArticle);

    }
}