window.addEventListener('load', function() {
    let urlRecieps = 'http://localhost:3030/jsonstore/cookbook';
    let mainWrapper = document.querySelector('main');
    let loadingParagraph = mainWrapper.querySelector('p');
    loadingParagraph.remove();
    
    fetch(`${urlRecieps}/recipes`)
    .then(response => {
        return response.json();
    })
    .then(listObj => {
        for (const key in listObj) {
            let currentReciepe = listObj[key];
            let idOfCurrentReciept = currentReciepe._id
            let name = currentReciepe.name;

            let articleElement = document.createElement('article');
            articleElement.className = 'preview';

            let titleDivElement = document.createElement('div');
            titleDivElement.className = 'title';

            let heasdingTwo = document.createElement('h2');
            heasdingTwo.textContent = name;

            let imageDivElement = document.createElement('div');
            imageDivElement.className = 'small';
            
            let imageElement = document.createElement('img');
            imageElement.setAttribute('src', `${currentReciepe.img}`);

            imageDivElement.appendChild(imageElement);
            titleDivElement.appendChild(heasdingTwo);
            articleElement.appendChild(titleDivElement);
            articleElement.appendChild(imageDivElement);
            mainWrapper.appendChild(articleElement);

            articleElement.addEventListener('click', showIngredients);

            function showIngredients(e) {
                let articleElement = e.currentTarget;
                let titleDiv = articleElement.querySelector('.title');
                let heading = articleElement.querySelector('.title h2');
                articleElement.appendChild(heading);
                titleDiv.remove();
            
                let bandDiv = document.createElement('div');
                bandDiv.className = 'band';
            
                let imagediv = articleElement.querySelector('.small');
                imagediv.className = 'thumb';
                bandDiv.appendChild(imagediv);
            
                let ingredientsDiv = document.createElement('div');
                ingredientsDiv.className = 'ingredients';
            
                let headingThree = document.createElement('h3');
                headingThree.textContent = 'Ingredients:';
            
                ingredientsDiv.appendChild(headingThree);
            
                let ingredientsList = document.createElement('ul');

                let descriptionDiv = document.createElement('div');
                descriptionDiv.className = 'description';

                let preparationHeading = document.createElement('h3');
                preparationHeading.textContent = 'Preparation:';

                descriptionDiv.appendChild(preparationHeading);
            
                fetch(`${urlRecieps}/details/${idOfCurrentReciept}`)
                .then(response => response.json())
                .then(ingr => {
                    console.log(ingr);
                    let ingArr = ingr.ingredients;
                    ingArr.forEach(el => {
                        let liElement = document.createElement('li');
                        liElement.textContent = el;
                        ingredientsList.appendChild(liElement);

                    });
                    let prepArr= ingr.steps;
                    prepArr.forEach(el => {
                        let paragraph = document.createElement('p');
                        paragraph.textContent = el;
                        descriptionDiv.appendChild(paragraph);
                    })
                })
 
            
                ingredientsDiv.appendChild(ingredientsList);
                bandDiv.appendChild(ingredientsDiv);
                articleElement.appendChild(bandDiv);
                articleElement.appendChild(descriptionDiv);
            }
        }
    })
})











