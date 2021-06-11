function addItem() {
    // 1. Select elements from DOM
    let inputTextElement = document.getElementById('newItemText');
    let listElement = document.getElementById('items');
    let inputText = inputTextElement.value;

    // 2. Create new html li tag
    let newListItemElement = document.createElement('li');
    newListItemElement.textContent = inputText;

    // 3. Create new HTML anchor tag
    let deleteButton = document.createElement('a');
    deleteButton.textContent = '[Delete]'
    deleteButton.setAttribute('href', '#');

    // 4. Attach event to delete button
    deleteButton.addEventListener('click', (e) => {
        e.currentTarget.parentNode.remove();
    })

    // 5. Append the new tags into DOM
    newListItemElement.appendChild(deleteButton);    
    listElement.appendChild(newListItemElement);


    // 5. Clear input value
    inputTextElement.value = '';
}

// document.querySelector('#btnSend').addEventListener('click', onClick);