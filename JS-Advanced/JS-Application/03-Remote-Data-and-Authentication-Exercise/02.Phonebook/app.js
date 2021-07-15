let baseUrl = 'http://localhost:3030/jsonstore/phonebook';

let loadButton = document.getElementById('btnLoad');
loadButton.addEventListener('click', loadContacts);

let phonebookUl = document.getElementById('phonebook');
phonebookUl.addEventListener('click', deleteContact);

let createButton = document.getElementById('btnCreate');
createButton.addEventListener('click', createContact);


function createContact(e) {
    let personInput = document.getElementById('person');
    personName = personInput.value;
    let phoneInput = document.getElementById('phone');
    phoneNumber = phoneInput.value;
    let id = '';

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
    .then(res => res.json())
    .then(data=> {
        id = data._id;
    })

    let newContact = createLiContact(personName, phoneNumber, id);
    phonebookUl.appendChild(newContact);
    
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
    let liElements = phonebookUl.querySelectorAll('li');
    Array.from(liElements).forEach(li => li.remove());

    fetch(`${baseUrl}`)
        .then(res => res.json())
        .then(contacts => {
            Object.values(contacts).forEach(contact => {
                let name = contact.person;
                let phoneNumber = contact.phone;
                let id = contact._id;

                let liElement = createLiContact(name, phoneNumber, id);
                phonebookUl.appendChild(liElement);
            })
        })
        .catch(error => {
            return alert('Couldn\'t load contacts')
        })
}

function createLiContact(name, phone, id) {
    let liElement = document.createElement('li');
    liElement.textContent = `${name}:${phone}`;
    liElement.setAttribute('data-person-id', id);

    let deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    liElement.appendChild(deleteButton);

    return liElement;
}