function projectsCreation(archName, projectsNumber){
    let name = archName;
    let count = Number(projectsNumber);
    let hours = count * 3;
    console.log(`The architect ${name} will need ${hours} hours to complete ${count} project/s.`);
}

projectsCreation("Adrean", "6"); 