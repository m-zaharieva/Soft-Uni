function primeNumber(num) {
    let check = Math.floor(Math.sqrt(num));
    let notPrime = 0;

    if (num === 1) {
        console.log('flase');
        return;
    } else if (num === 2) {
        console.log('true');
        return;
    }

    for (let i = 2; i <= check; i++) {
        if (num % i === 0) {
            notPrime++;
        }
    }

    if (notPrime !== 0) {
        console.log('false');
    } else {
        console.log('true');
    }

}

primeNumber(83);