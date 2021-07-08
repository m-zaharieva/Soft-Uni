document.getElementById('load-character').addEventListener('click', loadCharacter);


function loadCharacter() {
    let baseUrl = 'https://swapi.dev/api';

    fetch(`${baseUrl}/people/1`)
        .then(res => res.json())
        .then((character) => {
            console.log(character);
        })
        .catch(error => {
            console.log('rejected: ' + error);
        })
}

function oldLoadCharacter() {
    let baseUrl = 'https://swapi.dev/api';

    let promise = fetch(`${baseUrl}/people/1`)

    promise.then((response) => {
        if (response.ok) {
            let jsonResponse = response.json();
            jsonResponse.then((character) => {
                console.log(character);
            });
        }
    });
}