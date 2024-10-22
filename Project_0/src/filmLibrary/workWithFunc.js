import movieLibrary from "./library"

export function addMovie(newMovieObj) {
    let text = "";
    let counter = true;
    for (let i = 0; i < movieLibrary.length; i++) {
        if (movieLibrary[i].movieName === newMovieObj.movieName &&
            Number(movieLibrary[i].moviePart) === Number(newMovieObj.moviePart)) {
            counter = false;
            break;
        }
    }
    if (!counter) {
        console.log(movieLibrary)
        return text = `Фильм ${newMovieObj.movieName} уже есть в фильмотеке`;
    } else {
        console.log(movieLibrary)
        movieLibrary.push(newMovieObj);
        return text = `Фильм ${newMovieObj.movieName} добавлен в фильмотеку`;
    }
}

export function removeMovie(name, part) {
    let text = "";
    let counter = false;
    for (let i = 0; i < movieLibrary.length; i++) {
        if ((movieLibrary[i].movieName === name &&
            Number(movieLibrary[i].moviePart) === Number(part))) {
            movieLibrary.splice(i, 1);
            counter = true;
            break;
        }
    }
    if (counter) {
        return text = `Фильм ${name} удалён из фильмотеки`;
    } else {
        return text = `Фильма ${name} нет в фильмотеке`;
    }
}

export function findMovie(name) {
    let text = "";
    for (let i = 0; i < movieLibrary.length; i++) {
        if (movieLibrary[i].movieName === name) {
            return text = `Ваш фильм ${name} найден.
                    Информация о фильме: 
                    Название: ${movieLibrary[i].movieName},
                    Жанр: ${movieLibrary[i].movieGenre},
                    Часть: ${movieLibrary[i].moviePart},
                    Актёры: ${movieLibrary[i].movieActors},
                    Рецензия: ${movieLibrary[i].movieReview ? "понравился" : "не понравился"}`
        }
    }
}

export function filmographyMovie(nameActior) {
    let text = "";
    let actiotArr = [];
    for (let i = 0; i < movieLibrary.length; i++) {
        for (let j = 0; j < movieLibrary[i].movieActors.length; j++) {
            if (movieLibrary[i].movieActors[j] === nameActior) {
                actiotArr.push(movieLibrary[i].movieName);
            }
        }
    }
    return text = `Фильмография актера по имени ${nameActior}: ${actiotArr.join(", ")}`;
}

export function allMovieLibrary(){
    let text = "";
    for (let i = 0; i < movieLibrary.length; i++){
        text += ` ${movieLibrary[i].movieName} чать: ${movieLibrary[i].moviePart}, `;
    }
    return text;
}

