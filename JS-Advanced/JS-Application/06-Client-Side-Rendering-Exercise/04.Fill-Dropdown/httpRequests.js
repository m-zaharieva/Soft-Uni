let baseUrl = 'http://localhost:3030/jsonstore/advanced/dropdown';

async function getAllOptions() {
    let response = await fetch(baseUrl);
    let data = await response.json();
    return data;
}

async function addNewOption(text) {
    let response = await fetch(baseUrl, {
        method: 'POST', 
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
            text
        }),
    });
    let data = await response.json();
    return data;
}

let requests = {
    getAllOptions,
    addNewOption,
}

export default requests;