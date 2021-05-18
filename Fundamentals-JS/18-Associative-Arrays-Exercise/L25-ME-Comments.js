function comments(arr) {
    let articlesArr = [];
    let usersArr = [];
    let articles = {};

    arr.forEach(line => {
        if (line.startsWith('user')) {
            let token = line.split(' ');
            let user = token[1];
            usersArr.push(user);
        } else if (line.startsWith('article')) {
            let token = line.split(' ');
            let article = token[1];
            articlesArr.push(article);
        }
    });

    arr.forEach(line => {
        if (line.includes('posts on')) {
            let token = line.split(' posts on ');
            let user = token.shift();
            token = token.join('').split(': ');
            let article = token.shift();
            token = token.join('').split(', ');
            let title = token[0];
            let comment = token[1];

            if (usersArr.includes(user) && 
            articlesArr.includes(article) &&
            !articles.hasOwnProperty(article)) {
                articles[article] = {};
                articles[article][user] = {};
                articles[article][user][title] = comment;

            } else if (usersArr.includes(user) && 
            articlesArr.includes(article) &&
            articles.hasOwnProperty(article)) {
                articles[article][user] = {};
                articles[article][user][title] = comment;
            }
        }
    });

    let sortArticles = Object.keys(articles).sort((a, b) => { // books, movies, shopping
        let usersA = (Object.keys(articles[a])).length;
        let usersB = (Object.keys(articles[b])).length;
        if (usersA - usersB > 0) {
            return -1;
        } else if (usersA - usersB < 0) {
            return 1;
        } else {
            return a.localeCompare(b);
        }
    });

    sortArticles.forEach(article => {
        let sortUsers = Object.keys(articles[article]).sort((a, b) => a.localeCompare(b));
        console.log(`Comments on ${article}`);
        sortUsers.forEach(user => {
            Object.keys(articles[article][user]).forEach(title => {
                console.log(`--- From user ${user}: ${title} - ${articles[article][user][title]}`);
            })
        })
    });
}

comments([
    'user aUser123',
    'someUser posts on someArticle: NoTitle, stupidComment',
    'article Books',
    'article Movies',
    'article Shopping',
    'user someUser',
    'user uSeR4',
    'user lastUser',
    'uSeR4 posts on Books: I like books, I do really like them',
    'uSeR4 posts on Movies: I also like movies, I really do',
    'someUser posts on Shopping: title, I go shopping every day',
    'someUser posts on Movies: Like, I also like movies very much'
]);

    