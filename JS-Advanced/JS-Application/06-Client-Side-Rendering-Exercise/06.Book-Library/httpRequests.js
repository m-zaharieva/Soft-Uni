
async function getAllBooks() {
    let response = await fetch('http://localhost:3030/jsonstore/collections/books');
    let data = await response.json();
    return data;
}

let requests = {
    getAllBooks,
}

export default requests;