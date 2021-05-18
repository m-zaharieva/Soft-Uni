function scholarship(SalaryInput, midiumGradesInput, minimumSocialSalaryInput) {
    let salary = Number(SalaryInput);
    let midiumGrades = Number(midiumGradesInput);
    let minimumSalary = Number(minimumSocialSalaryInput);
    let socialScholarship = Math.floor(minimumSalary * 0.35); 
    let ScolarshipForExellentResult = Math.floor(midiumGrades * 25); 

    if (midiumGrades < 4.5) {
        console.log("You cannot get a scholarship!");
    } else if (midiumGrades >= 4.5 && midiumGrades < 5.5 && salary < minimumSalary) {
        console.log(`You get a Social scholarship ${socialScholarship} BGN`);
    } else if (midiumGrades >= 4.5 && midiumGrades < 5.5 && salary > minimumSalary) {
        console.log("You cannot get a scholarship!");
    } else if (midiumGrades >= 5.5 && salary < minimumSalary && socialScholarship > ScolarshipForExellentResult) {
        console.log(`You get a Social scholarship ${socialScholarship} BGN`);
    } else if (midiumGrades >= 5.5 && salary < minimumSalary && socialScholarship < ScolarshipForExellentResult) {
        console.log(`You get a scholarship for excellent results ${ScolarshipForExellentResult} BGN`);
    } else if (midiumGrades >= 5.5 && salary >= minimumSalary) {
        console.log(`You get a scholarship for excellent results ${ScolarshipForExellentResult} BGN`);
    };

}

scholarship("300.00", "5.65", "420.00");