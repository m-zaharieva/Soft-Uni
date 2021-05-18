function triples(n) {
    for (let i = 0; i < n; i++) {
        let letterOne = String.fromCharCode(97 + i);
            for (let m = 0; m < n; m++) {
                let letterTwo = String.fromCharCode(97 + m);
                    for (let k = 0; k < n; k++) {
                        let letterThree = String.fromCharCode(97 + k);
                        console.log(`${letterOne}${letterTwo}${letterThree}`);
                    }
            } 
    }
}

triples(5);