function gramophone(bandName, albumName, song) {
    //  The plate makes a full rotation every 2.5 seconds.
    //  "The plate was rotated {rotations} times."
    //  Rotations should be rpounded up.

    let songDuration = (albumName.length * bandName.length) * song.length / 2;
    let rotations = Math.ceil(songDuration / 2.5);
    console.log(`The plate was rotated ${rotations} times.`);

}

gramophone('Black Sabbath', 'Paranoid', 'War Pigs'); 