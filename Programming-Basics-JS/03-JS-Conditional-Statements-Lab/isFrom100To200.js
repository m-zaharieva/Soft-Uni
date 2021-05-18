function from100To200 (number) {
    let num = Number(number);

    if (num < 100) {
        console.log("Less than 100");
    } else if (num > 200) {
        console.log("Greater than 200");
    } else {
        console.log("Between 100 and 200");
    }
};

from100To200("95");