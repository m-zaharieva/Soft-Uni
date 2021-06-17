function solution(command) {
    const commands = {
        'upvote': () => { this.upvotes += 1; }, 
        'downvote': () => { this.downvotes += 1; }, 
        'score': () => {
            let totalScore = this.upvotes - this.downvotes;
            let totalVotes = this.downvotes + this.upvotes;
            let obfuscation = Math.ceil(Math.max(this.upvotes, this.downvotes) * 0.25);
            let positive = totalVotes > 50 ? this.upvotes + obfuscation : this.upvotes;
            let negative = totalVotes > 50 ? this.downvotes + obfuscation : this.downvotes;

            let rating = 'new';            
            if (totalVotes < 10) {
                rating = 'new';
            } else if ((this.upvotes > this.downvotes) && (this.upvotes / totalVotes) > 0.66) {
                rating = 'hot';
            } else if ((this.upvotes >= this.downvotes) && totalVotes > 100) {
                rating = 'controversial';
            } else if (this.downvotes > this.upvotes) {
                rating = 'unpopular';
            }

            return [positive, negative, totalScore, rating];
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
solution.call(post, 'downvote');
score = solution.call(post, 'score'); 
console.log(score);
