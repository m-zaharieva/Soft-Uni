function schoolRegister(input) {
    let students = {};

    input.forEach(line => {
        let [student, gradeInfo, avarageScore] = line.split(', ');
        student = student.split(': ');
        let name = student[student.length - 1];
        gradeInfo = gradeInfo.split(': ');
        let grade = Number(gradeInfo[gradeInfo.length - 1]);
        avarageScore = avarageScore.split(': ');
        let score = Number(avarageScore[avarageScore.length - 1]);
        if (score < 3) {
            return;
        }

        let currentGrade = grade + 1;
        if (!students.hasOwnProperty(currentGrade)) {
            students[currentGrade] = {};
        }
        students[currentGrade][name] = score;

    });

    let sorted = Object.keys(students).sort((a,b) => a - b);

    sorted.forEach(grade => {
        console.log(`${grade} Grade `);
        
        let studentsNames = Object.keys(students[grade]);
        console.log(`List of students: ${studentsNames.join(', ')}`);
        
        let score = 0;
        studentsNames.forEach(name => {
            let yearScore = students[grade][name];
            score += yearScore;
        });

        let avarageScore = score / studentsNames.length;
        
        console.log(`Average annual grade from last year: ${avarageScore.toFixed(2)}`);
        console.log('');

    });
     
}

schoolRegister(
    [   
        "Student name: Mark, Grade: 8, Graduated with an average score: 4.75",
        "Student name: Ethan, Grade: 9, Graduated with an average score: 5.66",
        "Student name: George, Grade: 8, Graduated with an average score: 2.83",
        "Student name: Steven, Grade: 10, Graduated with an average score: 4.20",
        "Student name: Joey, Grade: 9, Graduated with an average score: 4.90",
        "Student name: Angus, Grade: 11, Graduated with an average score: 2.90",
        "Student name: Bob, Grade: 11, Graduated with an average score: 5.15",
        "Student name: Daryl, Grade: 8, Graduated with an average score: 5.95",
        "Student name: Bill, Grade: 9, Graduated with an average score: 6.00",
        "Student name: Philip, Grade: 10, Graduated with an average score: 5.05",
        "Student name: Peter, Grade: 11, Graduated with an average score: 4.88",
        "Student name: Gavin, Grade: 10, Graduated with an average score: 4.00"
    ]
);


// have to arrange all students by grade
//print the entire school register sorted in ascending order by grade

// {nextGrade} Grade
// List of students: {All students in that grade}
// Average annual grade from last year: {average annual grade on the entire class from last year};
// And empty row {console.log}