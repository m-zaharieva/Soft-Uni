class Company {
    constructor() {
        this.departments = {};
    }

    static employee() {
      return  class Employee {
            constructor(name, salary, position) {
                this.username = name;
                this.salary = salary;
                this.position = position;
            }
        }

    }

    addEmployee(username, salary, position, department) {
        if (username == '' || username == null || username == undefined) {
            throw new Errorr ('Invalid input!');
        }
        if (salary == '' || salary == null || salary == undefined || salary < 0) {
            throw new Errorr ('Invalid input!');
        }
        if (position == '' || position == null || position == undefined) {
            throw new Errorr ('Invalid input!');
        }
        if (department == '' || department == null || department == undefined) {
            throw new Errorr ('Invalid input!');
        }

        let classEmployee = Company.employee();
        let employee = new classEmployee(username, salary, position);

        if (this.departments.hasOwnProperty(department)) {
            this.departments[department].push(employee);
        } else {
            this.departments[department] = [];
            this.departments[department].push(employee);
        }

        return `New employee is hired. Name: ${username}. Position: ${position}`

    }

    bestDepartment() {
        let result = [];
        let avarageSalaries = {};
        Object.keys(this.departments).forEach(department => {
            avarageSalaries[department] = Company.avarageSalery(this.departments[department]);
        });

        let sortAvargeSalary = Object.keys(avarageSalaries).sort((a,b) => avarageSalaries[b] - avarageSalaries[a]);
        result.push(`Best Department is: ${sortAvargeSalary[0]}`);
        result.push(`Average salary: ${avarageSalaries[sortAvargeSalary[0]]}`);

        let sortEmploys = this.departments[sortAvargeSalary[0]].sort((a,b) => {
            if(a['salary'] - b['salary'] > 0) {
                return -1;
            } else if (a['salary'] - b['salary'] < 0) {
                return 1;
            } else {
               return (a.username).localeCompare(b.username);
            }
        }).forEach(employee => {
            result.push(`${employee.username} ${employee.salary} ${employee.position}`)
        });

        return result.join('\n');

    }

    static avarageSalery(department) {
        let totalSallary = 0; 
        let count = 0
        department.forEach(employee => {
            totalSallary += employee.salary;
            count++;
        });

        let avarageSalery = (totalSallary / count).toFixed(2);

        return avarageSalery;
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