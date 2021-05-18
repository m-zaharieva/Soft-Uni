function personalTitle (agesInput, genderInput) {
    let ages = Number(agesInput);
    let gender = genderInput;

    if (ages >= 16) {
        if (gender === "f") {
            console.log("Ms.");
        } else {
            console.log("Mr.");
        }
    } else if (ages < 16) {
        if (gender === "f") {
            console.log("Miss");
        } else {
            console.log("Master");
        }
    }
}

personalTitle("12", "f");