// Selectiong DOM elements
let elem1 = document.getElementById('test');
document.querySelector('#test');
document.querySelectorAll('#test li');

// Get/Set content
elem1.nodeValue;
elem1.textContent;

// Traversing DOM
elem1.parentElement;
elem1.children;

// Create element
let createElem = document.createElement('p');

// Adding to DOM
elem1.appendChild(createElem);

// Delete from DOM
createElem.remove();

// Events
elem1.addEventListener('click', someFunc);
e.target;

// Maybe
e.preventDefault(); // Buttons in Forms send the form when clicked, reloading the page
elem1.removeEventListener('click', someFunc);

function someFunc() {
    console.log(1);
}

// navigating throw DOM when id is not an option
elem1.previousElementSibling; // get the html element, that is right before the elem1
elem1.nextElementSibling; // get the html element, that is right next the elem1


