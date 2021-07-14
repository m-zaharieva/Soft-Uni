let createForm = document.querySelector('form');
createForm.addEventListener('submit', createRecipe);

async function createRecipe(e) {
    e.preventDefault();

    createData = new FormData(createForm);
    let name = createData.get('name');
    let img = createData.get('img');
    console.log(img);
    let ingredients = createData
        .get('ingredients')
        .split('\n')
        .map(l => l.trim())
        .filter(x => x !== '');
    let steps = createData
        .get('steps')
        .split('\n')
        .map(l => l.trim())
        .filter(x => x !== '');

    const token = sessionStorage.getItem('userToken');
    if (token === null) {
        return alert('You have to log in to create a new recipe!');
    }

    const response = await fetch('http://localhost:3030/data/recipes', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'X-Authorization': token
        },
        body: JSON.stringify({ 
            name, 
            img,
            ingredients,
            steps
         })
    });
    
    createForm.reset();
    window.location.pathname = 'index.html';

}
