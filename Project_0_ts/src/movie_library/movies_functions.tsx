import { movie } from "./movies";
import movieLibrary from "./movies";

interface MovieInput {
    name: string;
    genre: string;
    part: string;
    actors: string;
}

interface MovieLibraryItem {
    movieName: string;
    movieGenre: string;
    moviePart: string;
    movieActors: string[];
    movieReview?: boolean;
}

export function addMovie(newMovieObj: MovieInput) {
    let text: string = "";
    let counter: boolean = true;
    const movieToAdd: MovieLibraryItem = {
        movieName: newMovieObj.name,
        movieGenre: newMovieObj.genre,
        moviePart: newMovieObj.part,
        movieActors: newMovieObj.actors.split(',').map(actor => actor.trim()), 
        movieReview: false 
    };

    for (let i: number = 0; i < movieLibrary.length; i++) {
        if (movieLibrary[i].movieName === movieToAdd.movieName &&
            Number(movieLibrary[i].moviePart) === Number(movieToAdd.moviePart)) {
            counter = false;
            break;
        }
    }

    if (!counter) {
        return text = `Фильм ${movieToAdd.movieName} уже есть в фильмотеке`;
    } else {
        movieLibrary.push(movieToAdd);
        return text = `Фильм ${movieToAdd.movieName} часть ${movieToAdd.moviePart} добавлен в фильмотеку`;
    }
}

export function removeMovie(name: string, part: number) {
    let text: string = "";
    let counter: boolean = false;
    
    for (let i: number = 0; i < movieLibrary.length; i++) {
        if (movieLibrary[i].movieName === name &&
            Number(movieLibrary[i].moviePart) === Number(part)) {
            movieLibrary.splice(i, 1);
            counter = true;
            break;
        }
    }

    if (counter) {
        return text = `Фильм ${name} часть ${part} удалён из фильмотеки`;
    } else {
        return text = `Фильма ${name} часть ${part} нет в фильмотеке`;
    }
}

export function findMovie(name: string) {
    let text: string = "";
    for (let i: number = 0; i < movieLibrary.length; i++) {
        if (movieLibrary[i].movieName === name) {
            return text = `Ваш фильм ${name} найден.\nИнформация о фильме:\nНазвание: ${movieLibrary[i].movieName}\nЖанр: ${movieLibrary[i].movieGenre}\nЧасть: ${movieLibrary[i].moviePart}\nАктёры: ${movieLibrary[i].movieActors.join(', ')}\nРецензия: ${movieLibrary[i].movieReview ? "понравился" : "не понравился"}`;
        }
    }
    return "Фильм не найден";
}

export function filmographyMovie(nameActor: string) {
    let text: string = "";
    let actorArr: string[] = [];
    
    for (let i: number = 0; i < movieLibrary.length; i++) {
        if (movieLibrary[i].movieActors.includes(nameActor)) {
            actorArr.push(movieLibrary[i].movieName);
        }
    }

    if (actorArr.length === 0) {
        return `Фильмов с актером ${nameActor} не найдено`;
    }
    
    return text = `Фильмография актера по имени ${nameActor}: ${actorArr.join(", ")}`;
}

export function allMovieLibrary() {
    if (movieLibrary.length === 0) {
        return "Библиотека фильмов пуста";
    }

    let text: string = "";
    for (let i: number = 0; i < movieLibrary.length; i++) {
        text += `Название: ${movieLibrary[i].movieName}, жанр: ${movieLibrary[i].movieGenre}, часть № ${movieLibrary[i].moviePart}\n`;
    }
    return text;
}