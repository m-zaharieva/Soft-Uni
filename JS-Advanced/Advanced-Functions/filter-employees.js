function solve(data, criteria) {
    let dataArr = JSON.parse(data);
    let result = {};

    if (criteria === 'all') {
        dataArr.forEach((employee, i) => {
            return console.log(`${i}. ${employee.first_name} ${employee.last_name} - ${employee.email}`)
        });
    }

    let [key, value] = criteria.split('-');

    dataArr
        .filter(employeeObj => {
            if (employeeObj[key] == value) {
                return employeeObj;
            }
        })
        .forEach((emp, i) => console.log(`${i}. ${emp.first_name} ${emp.last_name} - ${emp.email}`));
}

solve(`[{
    "id": "1",
    "first_name": "Ardine",
    "last_name": "Bassam",
    "email": "abassam0@cnn.com",
    "gender": "Female"
  }, {
    "id": "2",
    "first_name": "Kizzee",
    "last_name": "Jost",
    "email": "kjost1@forbes.com",
    "gender": "Female"
  }, {
    "id": "3",
    "first_name": "Evanne",
    "last_name": "Maldin",
    "email": "emaldin2@hostgator.com",
    "gender": "Male"
  }]`,
    'gender-Female')