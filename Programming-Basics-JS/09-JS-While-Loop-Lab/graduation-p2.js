function graduation(inputData) {
    let name = inputData.shift();  // Gosho

    //["5", "5.5", "6", "5.43", "5.5", "6", "5.5", "5", "6", "6", "5.43", "5"]
    let year = 1; 
    let gradesSum = 0;
    let averageGrade = 0; 
    let excluded = 0; 
    let index = 0; 

    while (year <= (inputData.length)) {   // 12 
        let grade = Number(inputData[index]); // 5
        gradesSum += grade;                 // 5
        index++;

        if (grade >= 4) {
            year++; 
        } else if (grade < 4) {
            excluded++;
        }

        if (excluded === 2) {
            console.log(`${name} has been excluded at ${year} grade`);
            return;
        }

        averageGrade = gradesSum / 12; 
    }

    console.log(`${name} graduated. Average grade: ${averageGrade.toFixed(2)}`);
    
}

graduation(["mimi", "5", "6", "5", "6", "5", "6", "6", "2", "3"]);