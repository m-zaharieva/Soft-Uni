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
        songs.forEach((i) => console.log(i.songName));
    } else {
        let filtered = songs.filter((i) => i.listType === listTypeTemplate);
        filtered.forEach((i) => console.log(i.songName));
    }
    
}

songs([4,
    'favourite_DownTown_3:14',
    'listenLater_Andalouse_3:24',
    'favourite_In To The Night_3:58',
    'favourite_Live It Up_3:48',
    'listenLater']);