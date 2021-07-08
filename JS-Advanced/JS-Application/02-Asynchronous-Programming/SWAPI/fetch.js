document.getElementById('load-character').addEventListener('click', loadCharacter);

function loadCharacter() {
    let basicUrl = 'https://swapi.dev/api';

    fetch(`${basicUrl}/people/1`)
        .then(response => response.json())
        .then(character => {
            console.log(character);
        })
        .catch(error => {
            console.log(error);
        })
}


function longLoadCharacter() {
    let basicUrl = 'https://swapi.dev/api';

    // fetch return a promise
    let promise = fetch(`${basicUrl}/people/1`);

    promise.then(function (response) {
        // 'response' is the response from the server. If we know that the server will five us response as a JSON, we can use json(), to get new promise
        let serverResponse = response.json(); // returns promise
        serverResponse.then(function (character) {
            console.log(character);
        })
    });
}