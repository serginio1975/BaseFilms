// Практика_часть_1
// Начинаем создавать приложение.
// Step_1
const numberOfFilms = +prompt('Сколько фильмов Вы посмотрели?', '');
// + перед promt преобразовывает строку в число.
console.log(numberOfFilms);
// Step_2
const personalMoviedb = {
  count: numberOfFilms,
  movies: {},
  genres: [],
  privat: false,
};
console.log(personalMoviedb);

// Step_3
let anyFilmsOne = prompt('Один из последних просмотренных фильмов ?', '');
let ratingFilmsOne = +prompt('На сколько оцените его ?', '');
let anyFilmsTwo = prompt('Один из последних просмотренных фильмов ?', '');
let ratingFilmsTwo = +prompt('На сколько оцените его ?', '');

// Записываем ответы в обьект movies и выводим в консоль.
personalMoviedb.movies[anyFilmsOne] = ratingFilmsOne;
personalMoviedb.movies[anyFilmsTwo] = ratingFilmsTwo;

console.log(personalMoviedb.movies);
