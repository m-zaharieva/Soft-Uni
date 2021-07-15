let baseUrl = 'http://localhost:3030/jsonstore/messenger';
let textarea = document.querySelector('#messages');

function attachEvents() {
    let submitButton = document.getElementById('submit');
    submitButton.addEventListener('click', sendMessage);

    let refreshButton = document.getElementById('refresh');
    refreshButton.addEventListener('click', refreshMessages)
}

attachEvents();

function sendMessage(e) {
    let controlsDiv = e.currentTarget.parentElement;
    let nameInput = controlsDiv.querySelector('input[name="author"]');
    let name = nameInput.value;
    console.log(name);

    let contentInput = controlsDiv.querySelector('input[name="content"]');
    let message = contentInput.value;
    console.log(message);

    if (name == '' || message == '') {
        return alert('Both fields are required!');
    }

    fetch(`${baseUrl}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({author: name, content: message})
    })
        .then(res => res.json())
        .then(data => console.log(data))
        .catch(error => {
            return alert(error.message);
        })

    textarea.value = textarea.value + `\n${name}: ${message}`;
    
    nameInput.value = '';
    contentInput.value = '';
}

function refreshMessages(e) {
    let mainDiv = e.currentTarget.parentElement.parentElement;
    let textareaElement = mainDiv.querySelector('#messages');

    fetch(`${baseUrl}`)
        .then(res => res.json())
        .then(data => {
            let result = [];
            Object.keys(data).forEach(messageId => {
                let author = data[messageId].author;
                let content = data[messageId].content
                result.push(`${author}: ${content}`);
            })

            textareaElement.value = result.join('\n');
        })
        .catch(error => {
            return alert('Erro in loading messages');
        })
}