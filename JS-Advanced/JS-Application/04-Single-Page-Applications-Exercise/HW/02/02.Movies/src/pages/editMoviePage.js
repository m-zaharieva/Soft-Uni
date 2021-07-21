import { request } from "../services/jsonRequests.js";
import viewFinder from "../viewFinder.js";

let section = undefined;

export function initialize(element) {
    section = element;
    let form = section.querySelector('form');
    form.addEventListener('submit', editMovie)
}

export async function getView(id) {

    try {
        let movie = await request(`http://localhost:3030/data/movies/${id}`);
        let titleInput = section.querySelector('input[name="title"]');
        let descriptionInput = section.querySelector('textarea[name="description"]');
        let imgUrlInput = section.querySelector('input[name="imageUrl"]');
        let idInput = section.querySelector('input[name="id"]');

        titleInput.value = movie.title;
        descriptionInput.value = movie.description;
        imgUrlInput.value = movie.img;
        idInput.value = id;

        console.log(idInput);

        return section

    } catch (error) {
        alert(error);
    }

}

async function editMovie(e) {
    e.preventDefault();

    try {
        let form = e.target;

        let formData = new FormData(form);
        let id = formData.get('id');
        console.log(id);
        
        let editedMovie = {
            title: formData.get('title'),
            description: formData.get('description'),
            img: formData.get('imageUrl')
        }


        let updateResult = await request(`http://localhost:3030/data/movies/${id}`, 'Put', editedMovie, true);
        console.log(updateResult);
        form.reset();
        console.log(`details/${id}`);
        viewFinder.navigateTo('details', id);

    } catch (error) {
        alert(error);
    }
}

let editMoviePage = {
    initialize,
    getView
}

export default editMoviePage