function sameNumbers(num) {
    let numToString = num.toString();
    let array = numToString.split('');
    let template = array[0];
    let filter = array.filter(el => {
        return template === el;
    })

    if (array.length === filter.length) {
        console.log('true');
    } else {
        console.log('false');
    }

    let sum = 0;
    array.forEach(element => {
        sum += Number(element);
    });

    console.log(sum);
}

sameNumbers(2222222);