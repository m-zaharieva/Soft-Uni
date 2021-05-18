function schoolGrades(arr) {
    let students = new Map();

    arr.forEach(line => {
        let grades = line.split(' ');
        let name = grades.shift();
        grades = grades.map(Number);
        
        if (!students.has(name)) {
            students.set(name, grades);
        } else {
            let currentGrades = students.get(name);
            let newGrades = currentGrades.concat(grades);
            students.set(name, newGrades);
        }
    });

    let studentsEntries = Array.from(students.entries());

    let sortedStudents = studentsEntries.sort((a,b) => {
        let gradesA = a[1];
        let gradesB = b[1];
        let avarageA = avarageGrade(gradesA);
        let avarageB = avarageGrade(gradesB);
        return avarageA - avarageB;
    }) 

    for (let kvp of sortedStudents) {
        console.log(`${kvp[0]}: ${kvp[1].join(', ')}`);
    }


    function avarageGrade(array) {
        let sum = 0; 
        for (let num of array) {
            sum += num;
        }
        let result = sum / array.length;
        return result;
    }
}

schoolGrades(
    ['Lilly 4 6 6 5',
    'Tim 5 6',
    'Tammy 2 4 3',
    'Tim 6 6']
);
