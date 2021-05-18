function wordReading(input) {

    let index = 0;
    let words = input[index];
    //console.log(words);
    while (words !== "Stop") {
        console.log(words);
        index += 1;
        words = input[index];
    }

}

wordReading(["Nakov", "SoftUni", "Sofia", "Bulgaria", "SomeText", "Stop", "AfterStop", "Europe", "HelloWorld"]);