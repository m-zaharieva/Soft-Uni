function loadCommits() {
    let basicUrl = 'https://api.github.com/repos';

    let usernameElement = document.getElementById('username');
    let username = usernameElement.value;

    let repoElement = document.getElementById('repo');
    let repo = repoElement.value;

    let ulElement = document.getElementById('commits');
    let liList = ulElement.querySelectorAll('li');
    Array.from(liList).forEach(li => {
        li.remove();
    })

    fetch(`${basicUrl}/${username}/${repo}/commits`)
        .then(response => {
            if (response.ok) {
               return response.json()
            } else {
                throw new Error(response.status);
            }
        })
        .then(commits => {
            for (const commit of commits) {
                let liElement = document.createElement('li');
                liElement.textContent = `${commit.commit.author.name}: ${commit.commit.message}`;
                ulElement.appendChild(liElement);
            }
        })
        .catch(error => {
            console.log(error);
            let liElement = document.createElement('li');
            liElement.textContent = `Error: ${error.message} (Not Found)`
            ulElement.appendChild(liElement);
        });

}


// https://api.github.com/repos/<username>/<repository>/commits


// function loadCommits() {
//     let username = document.getElementById('username');
//     let repository = document.getElementById('repo');
//     let ulElement = document.getElementById('commits');
//     fetch(`https://api.github.com/repos/${username.value}/${repository.value}/commits`)
//         .then((response) => {
//             if (response.ok) {
//                 return response.json();
//             } else {
//                 throw new Error(response.status);
//             }    
//         })
//         .then((response) => {
//             response.forEach(element => {
//                 let liElement = document.createElement('li');
//                 liElement.textContent = `${element.commit.author.name}: ${element.commit.message}`
//                 ulElement.appendChild(liElement);
//             });
//         })
//         .catch((error) => {
//             let liElement = document.createElement('li');
//             liElement.textContent = `Error: ${error.message} (Not found)`
//             ulElement.appendChild(liElement);
//         })
// }