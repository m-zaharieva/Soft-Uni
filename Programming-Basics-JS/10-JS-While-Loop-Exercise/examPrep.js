function examPrep (input) {
    let maxPoorGrades = input.shift();
    let poorGrades = 0; 
    let sum = 0;
    let averageScore = 0; 
    let numberProblems = 0; 
    let lastProblem = " ";

    let problem = input.shift();  //money
    let grade = Number(input.shift());   //6

    while (poorGrades < maxPoorGrades) {
        if (grade <= 4) {
            poorGrades++;
        }
        if (problem === "Enough") {
            break;
        }

        numberProblems++; 
        lastProblem = problem;
        sum += grade; 
        averageScore = sum / numberProblems;

        problem = input.shift();  
        grade = Number(input.shift());  
    }

    if (poorGrades < maxPoorGrades) {
        console.log(`Average score: ${averageScore.toFixed(2)}`);
        console.log(`Number of problems: ${numberProblems}`);
        console.log(`Last problem: ${lastProblem}`);
    } else {
        console.log(`You need a break, ${poorGrades} poor grades.`);
    }

}

examPrep(["3", "Money", "6", "Story", "4", "Spring Time", "5", "Bus", "6", "Enough"]);
//examPrep(["2", "Income", "3", "Game Info", "6", "Best Player", "4"]);