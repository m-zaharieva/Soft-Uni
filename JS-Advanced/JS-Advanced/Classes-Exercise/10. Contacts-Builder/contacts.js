class Contact {
    constructor(firstName, lastName, phone, email) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.phone = phone;
        this.email = email;
        this._online = false;
    }
    get online() {
        return this._online;
    }
    set online(value) {
        this._online = value; 
        let titleBox = document.getElementsByClassName('.title'); //????
        if (titleBox !== null){
            this.online == true ? titleBox.className = 'title online' : titleBox.className ='title';
        }
    }

    render(id) {
        // appends the Contact's HTML element representation to the DOM element with Id equal to the argument
        let contactWrapDiv = document.getElementById(`${id}`);
        contactWrapDiv.addEventListener('click', this.toggleInfoBox);

        // create contact info box
        let contactArticle = document.createElement('article');
        let titleBox = document.createElement('div');
        let toggleButton = document.createElement('button');
        let infoBox = document.createElement('div');
        let phoneLine = document.createElement('span');
        let emailLine = document.createElement('span');
        
        this.online === true ? titleBox.className = 'title online' : titleBox.className = 'title';
        titleBox.textContent = `${this.firstName} ${this.lastName}`;
        toggleButton.textContent = '\u2139';
        infoBox.classList.add('info');
        infoBox.style.display = 'none';
        phoneLine.textContent = `\u260E ${this.phone}`;
        emailLine.textContent = `\u2709 ${this.email}`

        // append elements 
        infoBox.appendChild(phoneLine);
        infoBox.appendChild(emailLine);
        titleBox.appendChild(toggleButton);
        contactArticle.appendChild(titleBox);
        contactArticle.appendChild(infoBox);
        contactWrapDiv.appendChild(contactArticle);
    }

    toggleInfoBox(e) {
        let triggeredTarget = e.target;
        if (triggeredTarget.tagName == 'BUTTON') {
            let articleBox = e.target.parentElement.parentElement;
            let infoBox = articleBox.querySelector('.info');

            if (infoBox.style.display === 'none') {
                infoBox.style.display = 'block';
            } else {
                infoBox.style.display = 'none';
            }
        }
    }
}

let contacts = [
    new Contact("Ivan", "Ivanov", "0888 123 456", "i.ivanov@gmail.com"),
    new Contact("Maria", "Petrova", "0899 987 654", "mar4eto@abv.bg"),
    new Contact("Jordan", "Kirov", "0988 456 789", "jordk@gmail.com")
];
contacts.forEach(c => c.render('main'));

// After 1 second, change the online status to true
setTimeout(() => contacts[1].online = true, 2000);