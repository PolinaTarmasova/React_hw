export interface movie {
    movieName: string,
    movieGenre: string,
    moviePart: number,
    movieActors: string[],
    movieReview: boolean,
}

let movieOne: movie = {
    movieName: "Матрица",
    movieGenre: "боевик",
    moviePart: 2,
    movieActors: ["Киану Ривз", "Керри-Энн Мосс", "Хьюго Уивинг"],
    movieReview: true,
};
let movieTwo: movie = {
    movieName: "Терминатор",
    movieGenre: "боевик",
    moviePart: 2,
    movieActors: ["Арнольд Шварценеггер", "Линда Хэмилтон", "Роберт Патрик"],
    movieReview: true,
};
let movieThree: movie = {
    movieName: "Платформа",
    movieGenre: "триллер",
    moviePart: 1,
    movieActors: ["Иван Массаге", "Александра Масангкай", "Сорион Эгилеор"],
    movieReview: false,
};
let movieFour: movie = {
    movieName: "Реинкарнация",
    movieGenre: "ужасы",
    moviePart: 1,
    movieActors: ["Тони Коллетт", "Алекс Вулф", "Милли Шапиро"],
    movieReview: true,
};
let movieFive: movie = {
    movieName: "Исчезнувшая",
    movieGenre: "триллер",
    moviePart: 1,
    movieActors: ["Розамунд Пайк", "Бен Аффлек"],
    movieReview: true,
};

const movieLibrary: any[] = [movieOne, movieTwo, movieThree, movieFour, movieFive];
export default movieLibrary;
