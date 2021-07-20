let form = document.querySelector('#add-movie form');
form.addEventListener('submit', addMovie);

async function addMovie(e) {
    e.preventDefault();

    let formData = new FormData(e.target);
    let body = {
        title: formData.get('title'),
        description: formData.get('description'),
        img: formData.get('imageUrl')
    }

    let response = await fetch('http://localhost:3030/data/movies', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'X-Authorization': localStorage.getItem('userToken'),
        },
        body: JSON.stringify(body)
    });
    let data = await response.json();
    

    console.log(data);
}

export default addMovie;