function sumPrimeNonePrime(n) {
    let index = 0; 
    let num = n[index];
    let primeSum = 0; 
    let nonPrimeSum = 0;
    let isPrime = false; 

    while (num !== "stop") {
        num = Number(n[index]);

        if (num < 0) {
            console.log("Number is negative.");
            index++;
            num = n[index];
            continue;
        } else if (num === 1 || num === 2 || num === 3) {
            isPrime = true;
            primeSum += num;
            index++;
            num = n[index];
            continue;
        } else if (num % 2 === 0) {
            isPrime = false;
            nonPrimeSum += num;
            index++;
            num = n[index];
            continue;
        }

        for (let i = 2; i < num; i++) {
           if ((num % i !== 0 && num !== i)) {
               isPrime = true;
           } else {
               isPrime = false;
               nonPrimeSum += num;
               break;
           }
        }


        if (isPrime) {
            primeSum += num;
        } 
 
        index++;
        num = n[index];
    }

    
        console.log(`Sum of all prime numbers is: ${primeSum}`);
    
        console.log(`Sum of all non prime numbers is: ${nonPrimeSum}`);
 

}

sumPrimeNonePrime(["3", "9", "0", "7", "19", "4", "stop"]);