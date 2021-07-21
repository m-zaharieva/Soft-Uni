import { request } from "../services/jsonRequests.js";
import viewFinder from "../viewFinder.js";

let section = undefined;

export function initialize(element) {
    section = element;
    let form = section.querySelector('form');
    form.addEventListener('submit', addMovie)
}

export function getView() {
    return section
}

async function addMovie(e) {
    e.preventDefault();

    try {
        let form = e.target;
        let formData = new FormData(form);

        let newMovie = {
            title: formData.get('title'),
            description: formData.get('description'),
            img: formData.get('imageUrl')
        }
    
        let createResult = await request('http://localhost:3030/data/movies', 'Post', newMovie, true);
        
        form.reset();
        viewFinder.navigateTo('home');
        
    } catch(err){
        console.error(err);
        alert(err);
    }
}

let addMoviePage = {
    initialize,
    getView
}

export default addMoviePage