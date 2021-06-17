function solution(command) {
    const commands = {
        'upvote': () => {
            this.upvotes += 1;
        }, 
        'downvote': () => {
            this.downvotes += 1;
        }, 
        'score': () => {
            let totalScore = this.upvotes - this.downvotes;
            let totalVotes = this.downvotes + this.upvotes;
            let obfuscation = Math.ceil(Math.max(this.upvotes, this.downvotes) * 0.25);
            let balance = (this.upvotes / (totalVotes)) * 100;
            let result = [];
            let rating ='';
            
            if (totalVotes < 10) {
                rating = 'new';
                result.push(this.upvotes, this.downvotes, totalScore, rating);

            } else if (totalVotes > 50) {
                let positiveVotes = this.upvotes + obfuscation;
                let negativeVotes = this.downvotes + obfuscation;
                result.push(positiveVotes, negativeVotes, totalScore);
            } else {
                result.push(this.upvotes, this.downvotes, totalScore);
            }

            if (totalScore >= 0 && balance > 66) {
                rating = 'hot';
                result.push(rating);
            } else if (totalScore >= 0 && totalVotes > 100 && balance <= 66) {
                rating = 'controversial';
                result.push(rating);
            } else if (totalScore < 0) {
                rating = 'unpopular';
                result.push(rating);
            }

            return result;
        }
    }

    return commands[command]();
}

// total score = upvotes - downvotes

let post = {
    id: '3',
    author: 'emil',
    content: 'wazaaaaa',
    upvotes: 100,
    downvotes: 100
};
solution.call(post, 'upvote');
solution.call(post, 'downvote');
let score = solution.call(post, 'score'); // [127, 127, 0, 'controversial']
console.log(score);
solution.call(post, 'downvote');        // (executed 50 time/
solution.call(post, 'downvote');
solution.call(post, 'downvote');
solution.call(post, 'downvote');
solution.call(post, 'downvote');
solution.call(post, 'downvote');
solution.call(post, 'downvote');
solution.call(post, 'downvote');
solution.call(post, 'downvote');
solution.call(post, 'downvote');
solution.call(post, 'downvote');
solution.call(post, 'downvote');
solution.call(post, 'downvote');
solution.call(post, 'downvote');
solution.call(post, 'downvote');
solution.call(post, 'downvote');
solution.call(post, 'downvote');
solution.call(post, 'downvote');
solution.call(post, 'downvote');
solution.call(post, 'downvote');
solution.call(post, 'downvote');
solution.call(post, 'downvote');
solution.call(post, 'downvote');
solution.call(post, 'downvote');
solution.call(post, 'downvote');
solution.call(post, 'downvote');
solution.call(post, 'downvote');
solution.call(post, 'downvote');
solution.call(post, 'downvote');
solution.call(post, 'downvote');
solution.call(post, 'downvote');
solution.call(post, 'downvote');
solution.call(post, 'downvote');
solution.call(post, 'downvote');
solution.call(post, 'downvote');
solution.call(post, 'downvote');
solution.call(post, 'downvote');
solution.call(post, 'downvote');
solution.call(post, 'downvote');
solution.call(post, 'downvote');
solution.call(post, 'downvote');
solution.call(post, 'downvote');
solution.call(post, 'downvote');
solution.call(post, 'downvote');
solution.call(post, 'downvote');
solution.call(post, 'downvote');
solution.call(post, 'downvote');
solution.call(post, 'downvote');
solution.call(post, 'downvote');
score = solution.call(post, 'score'); 
console.log(score);
