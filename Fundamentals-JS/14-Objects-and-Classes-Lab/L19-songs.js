function songs(input) {
    let songsNumber = input.shift();
    let listTypeTemplate = input.pop();

    class Song {
        constructor(listType, songName, duration) {
            this.listType = listType;
            this.songName = songName;
            this.duration = duration;
        }
    }

    let songs = [];
    for (let i = 0; i < songsNumber; i++) {
        let songArr = input[i].split('_');
        let [list, name, time] = songArr;

        let song = new Song(list, name, time);

        songs.push(song);
    }

    
    if (listTypeTemplate === 'all') {
        for (let obj of songs) {
            for (let prop in obj) {
                if (prop === 'songName') {
                    console.log(obj[prop]);
                }
            }
        }
    } else if (listTypeTemplate !== 'all') {
        for (let obj of songs) {
            for (let prop in obj) {
                if (obj[prop] === listTypeTemplate) {
                    console.log(obj.songName);
                }
            }
        }   
    }
    
}

songs([1,
    'like_Replay_3:15',
    'all']);