function moving(input) {

    let width = Number(input.shift());  // 10
    let length = Number(input.shift()); // 10
    let height = Number(input.shift()); // 2
    let freeSpace = width * length * height;  // 200 m3
    let sum = 0; 

    // ["20", "20", "20", "20", "122"]
    let index = 0; 
    let box = input[index];
    while (box !== "Done") {
        box = Number(input[index]);
        sum += box;

        if (sum > freeSpace) {
            console.log(`No more free space! You need ${sum - freeSpace} Cubic meters more.`);
            break;
        }

        index++; 
        box = input[index];
    }

    if (box === "Done") {
        console.log(`${freeSpace - sum} Cubic meters left.`);
    }
}

//moving(["10", "10", "2", "20", "20", "20", "20", "122"]);

moving(["10", "1", "2", "4", "6", "Done"]);
