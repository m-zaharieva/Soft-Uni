function employees(input) {
    
    class Employee {
        constructor (name) {
            this.name = name; 
            this.number = name.length;
        }
    }
    
    let employeesArr = [];
    
    input.forEach(element => {
        let employee = new Employee(element);
        employeesArr.push(employee);
    });

    for (let obj of employeesArr) {
        console.log(`Name: ${obj.name} -- Personal Number: ${obj.number}`);
    }
}

employees([
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal'
    ]);