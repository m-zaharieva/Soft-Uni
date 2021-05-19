function stringLength(firstString, secondString, thirdString) {
    let sum = firstString.length + secondString.length + thirdString.length;
    let avarageSum = Math.floor(sum / 3);

    console.log(sum);
    console.log(avarageSum);
}

stringLength('chocolate', 'ice cream', 'cake');