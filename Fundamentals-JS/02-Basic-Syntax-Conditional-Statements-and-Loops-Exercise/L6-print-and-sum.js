function prinntAndSum(start, end) {
    let line = ""; 
    let sum = 0; 
    
    for (let i = start; i <= end; i++) {
        line += i + ' ';
        sum += i;
    }

    console.log(line);
    console.log(`Sum: ${sum}`);
}

prinntAndSum(5, 10);



// function printAndSum(start, end) {
//     let line = "";
//     let sum = 0;
//     for (let i = start; i <= end; i++) {
//         line += i + " "; 
//         sum += i;
//     }

//     console.log(line);
//     console.log(`Sum: ${sum}`);
// }

// printAndSum(5, 10);