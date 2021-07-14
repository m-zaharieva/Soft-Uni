let baseUrl = 'http://localhost:3030/jsonstore/phonebook';

function attachEvents() {
    let loadButton = document.getElementById('btnLoad');
    loadButton.addEventListener('click', loadContacts);

    let phonebookUl = document.getElementById('phonebook');
    phonebookUl.addEventListener('click', deleteContact);

    let createButton = document.getElementById('btnCreate');
    createButton.addEventListener('click', createContact);
}

attachEvents();

function createContact(e) {
    let personInput = document.getElementById('person');
    personName = personInput.value;
    let phoneInput = document.getElementById('phone');
    phoneNumber = phoneInput.value;

    if (personName == '' || phoneNumber == '') {
        return alert('Both fields are required')
    }
    
    fetch(`${baseUrl}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            person: personName,
            phone: phoneNumber
        })
    })

    loadContacts()
    personInput.value = '';
    phoneInput.value = '';

}

function deleteContact(e) {
    if (e.target.tagName == 'BUTTON') {
        let parentLi = e.target.parentElement;
        let id = parentLi.getAttribute('data-person-id');

        fetch(`${baseUrl}/${id}`, {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json' }
        })
            .catch(error => {
                return alert('You don\'t have permisiotn to delete this contact');
            })

        parentLi.remove();
    }
}

function loadContacts(e) {
    let phonebookUl = document.getElementById('phonebook');
    let liElements = phonebookUl.querySelectorAll('li');
    Array.from(liElements).forEach(li => li.remove());

    fetch(`${baseUrl}`)
        .then(res => res.json())
        .then(contacts => {
            Object.keys(contacts).forEach(contact => {
                let name = contacts[contact].person;
                let phoneNumber = contacts[contact].phone;
                let id = contacts[contact]._id;

                let liElement = document.createElement('li');
                liElement.textContent = `${name}:${phoneNumber}`;
                liElement.setAttribute('data-person-id', id);

                let deleteButton = document.createElement('button');
                deleteButton.textContent = 'Delete';

                liElement.appendChild(deleteButton);
                phonebookUl.appendChild(liElement);
            })
        })
        .catch(error => {
            return alert('Couldn\'t load contacts')
        })
}