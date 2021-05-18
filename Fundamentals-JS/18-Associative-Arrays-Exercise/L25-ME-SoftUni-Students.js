function softUniStudents(arr) {
    let courses = {};
    let coursesCapacity = {};

    arr.forEach(line => {
        let token = line.split(' ');
        if (token.length === 2) {
            let [course, capacity] = line.split(': ');
            capacity = Number(capacity);

            if (!courses.hasOwnProperty(course)) {
                courses[course] = {};
                coursesCapacity[course] = capacity;
            } else {
                coursesCapacity[course] += capacity;
            }
        } else {
            let token = line.split(' ');
            let userAndCapacity = token[0];
            let course = token[token.length - 1];
            let email = token.filter(element => element.includes('@'));
            email = email[0];
            let [user, credits] = userAndCapacity.split('[');
            credits = Number(credits.slice(0, credits.length - 1));

            if (coursesCapacity.hasOwnProperty(course) && coursesCapacity[course] > 0) {
                courses[course][user] = [email, credits];
                coursesCapacity[course] -= 1;
            }
        }

    });

    let sortedCourses = Object.keys(courses).sort((a, b) => {
        let usersA = Object.keys(courses[a]).length;
        let usersB = Object.keys(courses[b]).length;
        if (usersA - usersB > 0) {
            return -1;
        } else if (usersA - usersB < 0) {
            return 1;
        } else {
            return 0;
        }
    });

    sortedCourses.forEach(course => {
        let usersSorted = Object.keys(courses[course]).sort((a, b) => {
            let creditsA = courses[course][a][1];
            let creditsB = courses[course][b][1];
            if (creditsA - creditsB > 0) {
                return -1;
            } else if (creditsA - creditsB < 0) {
                return 1;
            } else {
                return 0;
            }
        });

        console.log(`${course}: ${coursesCapacity[course]} places left`);
        usersSorted.forEach(user => {
            console.log(`--- ${courses[course][user][1]}: ${user}, ${courses[course][user][0]}`);
        });
    });

}

softUniStudents([
    'JavaBasics: 2',
    'user1[25] with email user1@user.com joins C#Basics',
    'C#Advanced: 3',
    'JSCore: 4',
    'user2[30] with email user2@user.com joins C#Basics',
    'user13[50] with email user13@user.com joins JSCore',
    'user1[25] with email user1@user.com joins JSCore',
    'user8[18] with email user8@user.com joins C#Advanced',
    'user6[85] with email user6@user.com joins JSCore',
    'JSCore: 2',
    'user11[3] with email user11@user.com joins JavaBasics',
    'user45[105] with email user45@user.com joins JSCore',
    'user007[20] with email user007@user.com joins JSCore',
    'user700[29] with email user700@user.com joins JSCore',
    'user900[88] with email user900@user.com joins JSCore'
]);

// {
//    courseName: {
//        userName: [credits, email];
//    }
// }
