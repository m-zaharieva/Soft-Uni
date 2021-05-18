function solve(n) {
    let count = 1;  
    let sum = 0;
    let oddNumber = 1;

        while (count <= n) {
            console.log(oddNumber);
            count++;
            sum += oddNumber;
            oddNumber += 2;
        }
        console.log(`Sum: ${sum}`);
}

solve(5);