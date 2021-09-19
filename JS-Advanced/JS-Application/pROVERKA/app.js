function solve() {
    let [...sectionComplete] = document.querySelector('section .green').parentNode.parentNode.children;
    let inProgress = document.getElementById('in-progress');
    let [...sectionOpen] = document.querySelector('section .orange').parentNode.parentNode.children;

    function ce(type, content, className){
        const result = document.createElement(type);
        result.textContent = content;
        if(className){
            result.className = className;
        }
        return result;
    }

    let task = document.querySelector('input[name=task]');
    let description = document.getElementById('description');
    let date = document.querySelector('input[name=date]');
    document.getElementById('add').addEventListener('click', (e) => {
        e.preventDefault();
   
        if(task.value != '' && task.value !== 'undefined' && description.value != ''
        && description.value !== 'undefined' && date.value != '' && date.value !== 'undefined'){
            creater(task, description, date);
        }

        function creater(task, description, date){
            let articleEl = ce('article');
            let title = ce('h3', task.value);
            let pElemDesc = ce('p', `Description: ${description.value}`);
            let pElemDate = ce('p', `Due Date: ${date.value}`);
            let div = ce('div', '', 'flex');
            let buttonStart = ce('button', 'Start', 'green');

            let buttonDelete = ce('button', 'Delete', 'red');

            div.appendChild(buttonStart);
            div.appendChild(buttonDelete);
            articleEl.appendChild(title);
            articleEl.appendChild(pElemDesc);
            articleEl.appendChild(pElemDate);
            articleEl.appendChild(div);
            sectionOpen[1].appendChild(articleEl);
            
            buttonStart.addEventListener('click', () => {
                start(task, description, date);
                articleEl.remove();
            });
            buttonDelete.addEventListener('click', () => {
                articleEl.remove();
            });
        }

        function start(task, description, date){
            let articleEl = ce('article');
            let title = ce('h3', task.value);
            let pElemDesc = ce('p', `Description: ${description.value}`);
            let pElemDate = ce('p', `Due Date: ${date.value}`);
            let div = ce('div', '', 'flex');
            let buttonDelete = ce('button', 'Delete', 'red');
        
            let buttonFinish = ce('button', 'Finish', 'orange');
            div.appendChild(buttonDelete);
            div.appendChild(buttonFinish);
            articleEl.appendChild(title);
            articleEl.appendChild(pElemDesc);
            articleEl.appendChild(pElemDate);
            articleEl.appendChild(div);
            inProgress.appendChild(articleEl);

            buttonFinish.addEventListener('click', () => {
                startFinish(task, description, date);
                articleEl.remove();
            });
            
            buttonDelete.addEventListener('click', () => {
                articleEl.remove();
            });
        }

        function startFinish(task, description, date){
            let article = ce('article');
            let title = ce('h3', task.value);
            let pElemDesc = ce('p', `Description: ${description.value}`);
            let pElemDate = ce('p', `Due Date: ${date.value}`);
            article.appendChild(title);
            article.appendChild(pElemDesc);
            article.appendChild(pElemDate);
            
            sectionComplete[1].appendChild(article);
        }

    })

}
