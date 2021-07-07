function toggle() {
    // Select Elements 
    let buttonElement = document.querySelector('.button');
    let toggledTextElement = document.getElementById('extra');

    // Show/Hide text and change button text
    buttonElement.textContent = buttonElement.textContent ==='More' ? 'Less' : 'More';
    toggledTextElement.style.display = toggledTextElement.style.display === 'block' ? 'none' : 'block';

}