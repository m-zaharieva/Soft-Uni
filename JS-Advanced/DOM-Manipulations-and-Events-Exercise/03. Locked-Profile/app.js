function lockedProfile() {
    let buttons = Array.from(document.querySelectorAll('#main .profile button'));

    buttons.forEach(el => {
        el.addEventListener('click', toggleButton);
    });

    function toggleButton(e) {
        let button = e.currentTarget;
        let profile = button.parentElement;
        let radioButton = profile.querySelector('input:checked');

        if (radioButton.value === 'unlock') {
            let hiddenDiv = profile.querySelector('div');
            hiddenDiv.style.display = hiddenDiv.style.display === 'block' ? 'none': 'block';

            button.textContent = button.textContent === 'Show more' ? 'Hide it' : 'Show more';
        }
    }

    
}

// function lockedProfile() {
//     let buttons = document.querySelectorAll('#main .profile button');

//     for (let index = 0; index < buttons.length; index++) {
//         buttons[index].addEventListener('click', (e) => {
//             let radioButtonName = `user${index + 1}Locked`;
//             let radioButton = document.querySelector(`input[name="${radioButtonName}"]:checked`);

//             if (radioButton.value === 'unlock') {
//                 let hiddenField = document.getElementById(`user${index + 1}HiddenFields`);
//                 hiddenField.style.display = hiddenField.style.display === 'block' ? 'none' : 'block';

//                 buttons[index].textContent = buttons[index].textContent == 'Show more' ? 'Hide it' : 'Show more';
//             }
//         })
//     }
// }