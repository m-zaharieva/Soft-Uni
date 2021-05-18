function movies(input) {
    let moviesArr = [];

    input.forEach(line => {
        let tokens = line.split(' ');
        let addMovieIndex = tokens.indexOf(`addMovie`);
        let directorIndex = tokens.indexOf(`directedBy`);
        let dateIndex = tokens.indexOf(`onDate`);

        if (addMovieIndex > -1) {
            moviesArr.push({name: tokens.slice(addMovieIndex + 1).join(' ')});
        } 

        if (directorIndex > -1) {
            let movieName = tokens.slice(0, directorIndex).join(' ');
            let directiorName = tokens.slice(directorIndex + 1).join(' ');

            moviesArr.forEach(obj => {
                if (obj.name === movieName) {
                    obj.director = directiorName; 
                }
            }) 
        }

        if (dateIndex > -1) {
            let movieName = tokens.slice(0, dateIndex).join(' ');
            let date = tokens.slice(dateIndex + 1).join(' ');

            moviesArr.forEach(obj => {
                if (obj.name === movieName) {
                    obj.date = date; 
                }
            })
        }

    });


    moviesArr.forEach(movie => {
        if (movie.name !== undefined && movie.director !== undefined && movie.date !== undefined) {
            console.log(JSON.stringify(movie));
        }
    })

}

movies([
    'addMovie Fast and Furious',
    'addMovie Godfather',
    'Inception directedBy Christopher Nolan',
    'Godfather directedBy Francis Ford Coppola',
    'Godfather onDate 29.07.2018',
    'Fast and Furious onDate 30.07.2018',
    'Batman onDate 01.08.2018',
    'Fast and Furious directedBy Rob Cohen'
    ]);