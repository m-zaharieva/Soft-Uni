function easterEggs(input) {
    index = 0;
    let eggs = Number(input[index]);
    // index++;
    // let color = input[index];
    let red = 0;
    let orange = 0; 
    let blue = 0; 
    let green = 0; 
    let maxEggs = 0; 
    let maxEggsColor = "";

    // console.log(input.length);

    for (let index = 1; index <= input.length - 1; index++) {
        let color = input[index];
        switch (color) {
            case "red":
                red++;
                if (red > maxEggs) {
                    maxEggs = red;
                    maxEggsColor = "red";
                }
            break;
            case "orange":
                orange++;
                if (orange > maxEggs) {
                    maxEggs = orange;
                    maxEggsColor = "orange";
                }
                break;
            case "blue":
                blue++;
                if (blue > maxEggs) {
                    maxEggs = blue;
                    maxEggsColor = "blue";
                }
                break;
            case "green":
                green++;
                if (green > maxEggs) {
                    maxEggs = green;
                    maxEggsColor = "green";
                }
                break;
        }
    }

    console.log(`Red eggs: ${red}`);
    console.log(`Orange eggs: ${orange}`);
    console.log(`Blue eggs: ${blue}`);
    console.log(`Green eggs: ${green}`);
    console.log(`Max eggs: ${maxEggs} -> ${maxEggsColor}`);
    
}

//easterEggs(["7", "orange", "blue", "green", "green", "blue", "red", "green"]);
easterEggs(["4", "blue", "red", "blue", "orange"]);
