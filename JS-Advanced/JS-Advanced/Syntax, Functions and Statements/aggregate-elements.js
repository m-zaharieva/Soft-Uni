function aggregateElements(input) {
    let sum1 = 0; 
    let sum2 = 0;
    let sum3 = '';

    input.forEach(element => {
        sum1 += element;
        sum2 += 1 / element;
        sum3 += element;
    });

    console.log(sum1);
    console.log(sum2);
    console.log(sum3);
}

aggregateElements([2, 4, 8, 16]);