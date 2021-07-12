function lockedProfile() {
    let profilesWrapper = document.getElementById('main');
    profilesWrapper.addEventListener('click', showDetalies);
    let templateProfile = profilesWrapper.querySelector('div');
    templateProfile.remove();

    let baseUrl = 'http://localhost:3030/jsonstore/advanced/profiles';

    fetch(baseUrl)
    .then(body => body.json())
    .then(users => {
        console.log(users);
        Object.keys(users).forEach((user, index) => {
            let profile = createProfileCard(users[user], (index + 1));
            profilesWrapper.appendChild(profile);
        })
    })

    function showDetalies(e) {
        if (e.target.tagName === 'BUTTON') {
            let profilesCard = e.target.parentElement;
            let checkedRadioInput = profilesCard.querySelector('input[type="radio"]:checked');
            let hiddenDiv = e.target.previousElementSibling;
            let button = profilesCard.querySelector('button');
            
            if (checkedRadioInput.value !== 'unlock') {
                return;
            }
            
            hiddenDiv.style.display = hiddenDiv.style.display === 'block' ? 'none' : 'block';
            button.textContent = button.textContent == 'Show more' ? 'Hide it' : 'Show more';
        }
    }


    function createProfileCard(user, count) {
        let profileDiv = document.createElement('div');
        profileDiv.classList.add('profile');
        
        let imageElement = document.createElement('img');
        imageElement.src = './iconProfile2.png';
        imageElement.classList.add('userIcon');
        
        let lockLabel = document.createElement('label');
        lockLabel.textContent = 'Lock';
        
        let lockRadioInput = document.createElement('input');
        lockRadioInput.type = 'radio';
        lockRadioInput.name = `user${count}Locked`;
        lockRadioInput.value = 'lock';
        lockRadioInput.checked = true;
        
        let unlockLabel = document.createElement('label');
        unlockLabel.textContent = 'Unlock';
        
        let unlockRadioInput = document.createElement('input');
        unlockRadioInput.type = 'radio';
        unlockRadioInput.name = `user${count}Locked`;
        unlockRadioInput.value = 'unlock';
        
        let br = document.createElement('br');
        
        let hr = document.createElement('hr');
        
        let usernameLabel = document.createElement('label');
        usernameLabel.textContent = 'Username';
        
        let usernameInput = document.createElement('input');
        usernameInput.type = 'text';
        usernameInput.name = `user${count}Username`;
        usernameInput.value = user.username;
        usernameInput.disabled = true;
        usernameInput.readOnly = true;
        
        let hiddenInfoDiv = document.createElement('div');
        hiddenInfoDiv.id = `user${count}HiddenFields`;
        
        let hiddenHr = document.createElement('hr');
        
        let emailLabel = document.createTextNode('label');
        emailLabel.textContent = 'Email:';
        
        let emailInput = document.createElement('input');
        emailInput.type = 'email';
        emailInput.name = `user${count}Email`;
        emailInput.value = user.email;
        emailInput.disabled = true;
        emailInput.readOnly = true;
        
        let ageLabel = document.createElement('label');
        ageLabel.textContent = 'Age:';
        
        let ageInput = document.createElement('input');
        ageInput.type = 'email';
        ageInput.name = `user${count}Age`;
        ageInput.value = user.age;
        ageInput.disabled = true;
        ageInput.readOnly = true;
        
        let showButton = document.createElement('button');
        showButton.textContent = 'Show more';
        
        hiddenInfoDiv.appendChild(hiddenHr);
        hiddenInfoDiv.appendChild(emailLabel);
        hiddenInfoDiv.appendChild(emailInput);
        hiddenInfoDiv.appendChild(ageLabel);
        hiddenInfoDiv.appendChild(ageInput);
        
        profileDiv.appendChild(imageElement);
        profileDiv.appendChild(lockLabel);
        profileDiv.appendChild(lockRadioInput);
        profileDiv.appendChild(unlockLabel);
        profileDiv.appendChild(unlockRadioInput);
        profileDiv.appendChild(br);
        profileDiv.appendChild(hr);
        profileDiv.appendChild(usernameLabel);
        profileDiv.appendChild(usernameInput);
        profileDiv.appendChild(hiddenInfoDiv);
        profileDiv.appendChild(showButton);
        
        return profileDiv;
    }
}