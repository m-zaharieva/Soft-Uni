function salary (input) {
    let tabs = Number(input.shift());      //["3", "500", "Github.com", "Stackoverflow.com", "softuni.bg"]
    let salary = Number(input.shift());    //["500", "Github.com", "Stackoverflow.com", "softuni.bg"]

    //["Github.com", "Stackoverflow.com", "softuni.bg"]
    for (let i = 0; i < tabs; i++) {
        curentInput = input.shift();

        switch (curentInput) {
            case "Facebook": 
            salary -= 150; break;
            case "Instagram": 
            salary -= 100; break;
            case "Reddit": 
            salary -= 50; break;
        } 
    }
    if (salary <= 0) {
        console.log("You have lost your salary.");
    } else {
        console.log(salary);
    }
}

salary(["3", "500", "Github.com", "Stackoverflow.com", "softuni.bg"]);

// Facebook - 150 lv
// Instagram - 100 lv
// Reddit - 50 lv