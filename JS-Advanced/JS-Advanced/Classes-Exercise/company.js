class Company {
    constructor() {
        this.departments = new Map();
    }

    static Employee = class Employee {
        constructor(username, salary, position) {
            this.username = username;
            this.salary = salary;
            this.position = position;
        }
    
        get username() {
            return this._username;
        }

        set username(value) {
            this._validateInput(value);
            this._username = value;
        }

        get salary() {
            return this._salary;
        }

        set salary(value) {
            this._validateInput(value);
            if(value < 0) {
                throw new Error ('Invalid input!');
            }
            this._salary = value;
        }

        get position() {
            return this._position;
        }

        set position(value) {
            this._validateInput(value);
            this._position = value;
        }

        _validateInput(value) {
            if (value === '' || value === undefined || value === null) {
                throw new Error ('Invalid input!');
            }
        }
    }

    addEmployee(username, salary, position, department) {
        if(department === '' || department === undefined || department === null) {
            throw new Error ('Invalid input!');
        }

        if (!this.departments.has(department)) {
            this.departments.set(department, []);
        }

        let employee = new Company.Employee(username, salary, position);
        let workers = this.departments.get(department);
        workers.push(employee);

        return `New employee is hired. Name: ${username}. Position: ${position}`;

    }

    bestDepartment() {
        let departmentsArray = [...this.departments.keys()]
            .sort((a,b) => this._avarageSallery(this.departments.get(b)) - this._avarageSallery(this.departments.get(a)))
        let bestDepartmentName = departmentsArray[0];
        let avarageSallery = this._avarageSallery(this.departments.get(bestDepartmentName));
        let sortedEmployes = this._sortEmployees(this.departments.get(bestDepartmentName));

        let result = [];  
        result.push(`Best Department is: ${bestDepartmentName}`, `Average salary: ${avarageSallery}`)
        sortedEmployes.map(emp => result.push(`${emp.username} ${emp.salary} ${emp.position}`));

        return result.join('\n');
    }

    _avarageSallery(workers) {
        let numberOfEmployees = workers.length;
        let totalSalleys = (workers
            .reduce((acc, employee) => acc + employee.salary, 0));
        return (totalSalleys / numberOfEmployees).toFixed(2); 
    }

    _sortEmployees(workers) {
        return workers.sort((a,b) => {
            if (a.salary - b.salary > 0) {
                return -1;
            } else if (a.salary - b.salary < 0) {
                return 1;
            } else {
                return (a.username).localeCompare(b.username);
            }
        })
    }
}

let c = new Company();
c.addEmployee("Stanimir", 2000, "engineer", "Construction");
c.addEmployee("Pesho", 1500, "electrical engineer", "Construction");
c.addEmployee("Slavi", 500, "dyer", "Construction");
c.addEmployee("Stan", 2000, "architect", "Construction");
c.addEmployee("Stanimir", 1200, "digital marketing manager", "Marketing");
c.addEmployee("Pesho", 1000, "graphical designer", "Marketing");
c.addEmployee("Gosho", 1350, "HR", "Human resources");
console.log(c.bestDepartment());