function wordTracker(arr) {
    let words = arr.shift().split(' ');
    let searchingFor = {};

    for (let word of words) {
        searchingFor[word] = 0;
    }

    for (let word of arr) {
        if (searchingFor.hasOwnProperty(word)) {
            searchingFor[word] += 1;
        }
    }
    
    let sorted = Object.entries(searchingFor).sort((a, b) => {
        let numberA = Number(a[1]);
        let numberB = Number(b[1]);
        return numberB - numberA;
    })
    
    for (let kvp of sorted) {
        console.log(`${kvp[0]} - ${kvp[1]}`);
    }
}

wordTracker(
    [
        'this sentence', 
        'In','this','sentence','you','have','to','count','the','occurances','of','the'
        ,'words','this','and','sentence','because','this','is','your','task'
    ]
);