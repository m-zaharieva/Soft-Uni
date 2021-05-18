function companyUsers(input) {
    let companies = new Map();

    input.forEach(company => {
        let [compName, employeeID] = company.split(' -> ');

        if (!companies.has(compName)) {
            companies.set(compName, [employeeID]);
        } else {
            let employes = companies.get(compName);

            if (!employes.includes(employeeID)) {
                employes.push(employeeID);
                companies.set(compName, employes);
            }
        }
    });

    let sortedNames = Array.from(companies.keys()).sort((a,b) => a.localeCompare(b));

    sortedNames.forEach(company => {
        console.log(company);
        companies.get(company).forEach(id => {
            console.log(`-- ${id}`);
        })
    });

    // console.log(sortedNames);

}

companyUsers([
    'SoftUni -> AA12345',
    'SoftUni -> CC12344',
    'Lenovo -> XX23456',
    'SoftUni -> AA12345',
    'Movement -> DD11111'
    ]);