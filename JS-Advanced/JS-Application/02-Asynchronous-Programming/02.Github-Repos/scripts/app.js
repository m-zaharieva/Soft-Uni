function loadRepos() {
	let basicUrl = 'https://api.github.com/users';

	let userInput = document.getElementById('username');
	let username = userInput.value;

	let ulList = document.getElementById('repos');

	let currentLis = ulList.querySelectorAll('li');
	Array.from(currentLis).forEach(li => {
		li.remove();
	})

	fetch(`${basicUrl}/${username}/repos`)
		.then(response => {
			console.log(response);
			return response.json()
		})
		.then(repos => {
			repos.forEach(obj => {
				let liName = obj['full_name'];
				let hrefUrl = obj['html_url'];
				let liElement = document.createElement('li');
				let anchorElement = document.createElement('a');
				anchorElement.setAttribute('href', hrefUrl);
				anchorElement.textContent = `${liName}`;
				liElement.appendChild(anchorElement);
				ulList.appendChild(liElement);
			})
		})
		.catch((error) => {
			let liElement = document.createElement('li');
			liElement.textContent = 'Error. Invalid data';
			ulList.appendChild(liElement);
		})
}


// full_name
// html_url