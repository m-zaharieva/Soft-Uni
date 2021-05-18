    function lastKNumSequance(n, k) {
        let newArray = [1];

        while (newArray.length < n) {
            let indexOfNextEl = newArray.length;
            let sum = 0; 

            for (let i = indexOfNextEl-1; i >= indexOfNextEl - k && i >= 0; i--) {
                sum += newArray[i];
            }

            newArray.push(sum);

        }
        console.log(newArray.join(' '));

    }

lastKNumSequance(8, 2);