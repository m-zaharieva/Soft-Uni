class Story {
    constructor(title, creator) {
        this.title = title;
        this.creator = creator;
        this._comments = [];
        this._likes = [];
    }

    get likes() {
        if (this._likes.length === 0) {
            return `${this.title} has 0 likes`;
        } if (this._likes.length === 1) {
            return `${this._likes[0]} likes this story!`;
        } else {
            return `${this._likes[0]} and ${this._likes.length - 1} others like this story!`;
        }
    }

    like(username) {
        if (this._likes.includes(username)) {
            throw new Error('You can\'t like the same story twice!');
        } else if (this.creator == username) {
            throw new Error('You can\'t like your own story!');
        }
        (this._likes).push(username);
        return `${username} liked ${this.title}!`
    }

    dislike(username) {
        if (!this._likes.includes(username)) {
            throw new Error('You can\'t dislike this story!');
        }
        let index = this._likes.indexOf(username);
        this._likes.splice(index, 1);
        return `${username} disliked ${this.title}`;
    }

    comment(username, content, id) {
        // let array = [...this._comments];
        if (this._comments[id-1] == undefined || id == undefined) {
            let newComment = {
                id: this._comments.length + 1,
                username: username,
                content: content,
                replice: [],
            }
            this._comments.push(newComment);
            return `${username} commented on ${this.title}`
        }
        this._comments.forEach(obj => {
            if (obj.id == id) {
                let reply = {
                    id: `${id}.${obj.replice.length + 1}`,
                    username: username,
                    content: content,

                }
                obj.replice.push(reply);
            }
        });
        return `You replied successfully`;
    }

    toString(citeria) {
        let result = new Set();
        result.add(`Title: ${this.title}`);
        result.add(`Creator: ${this.creator}`);
        result.add(`Likes: ${this._likes.length}`);
        result.add(`Comments:`);
        // if([...this._comments].length == 0) {
        //     return 'Comments:'
        // }
        if (citeria === 'asc') {
            this._comments
                .sort((a, b) => a.id - b.id)
                .forEach(el => {
                    result.add(`-- ${el.id}. ${el.username}: ${el.content}`);
                    if (el.replice.length > 0) {
                        el.replice.sort((a, b) => a.id - b.id);
                    }
                    el.replice.forEach(reply => {
                        result.add(`--- ${reply.id}. ${reply.username}: ${reply.content}`);

                    })
                });
            return [...result].join('\n');
        }

        if (citeria === 'desc') {
            this._comments
                .sort((a, b) => b.id - a.id)
                .forEach(el => {
                    result.add(`-- ${el.id}. ${el.username}: ${el.content}`);
                    if (el.replice.length > 0) {
                        el.replice.sort((a, b) => b.id - a.id);
                    }
                    el.replice.forEach(reply => {
                        result.add(`--- ${reply.id}. ${reply.username}: ${reply.content}`);

                    })
                });
            return [...result].join('\n');
        }

        if (citeria === 'username') {
            [...this._comments]
                .sort((a, b) => (a.username).localeCompare(b.username))
                .forEach(el => {
                    result.add(`-- ${el.id}. ${el.username}: ${el.content}`);
                    if (el.replice.length > 0) {
                        el.replice.sort((a, b) => (a.username).localeCompare(b.username));
                    }
                    el.replice.forEach(reply => {
                        result.add(`--- ${reply.id}. ${reply.username}: ${reply.content}`);

                    })
                });
            return [...result].join('\n');
        }
    }
}



let art = new Story("My Story", "Anny");
art.like("John");
art.likes;
// art.dislike("Sally");
art.like("Ivan");
art.like("Steven");
art.likes;
art.comment("Anny", "Some Content");
art.comment("Ammy", "New Content", 1);
art.comment("Zane", "Reply", 2);
art.comment("Jessy", "Nice :)");
console.log(art.comment("SAmmy", "Reply@", 2));


// "expected" = 'Title: My Story\nCreator: Anny\nLikes: 20\nComments:\n-- 2. Ammy: New Content\n-- 3. Jessy: Nice :)\n-- 1. Sammy: Some Content\n--- 1.2. SAmmy: Reply@\n--- 1.1. Zane: Reply'
// 'to equal' = 'Title: My Story\nCreator: Anny\nLikes: 0\nComments:\n-- 2. Ammy: New Content\n-- 3. Jessy: Nice :)\n-- 1. Sammy: Some Content\n--- 1.2. SAmmy: Reply@\n--- 1.1. Zane: Reply'