'use strict';
// Простое взаимодействие с пользователем.
alert('Hello');
const result = confirm('Are you here?');
console.log(result);
const answerOne = prompt('Вам исполнилось 18 лет?', '');
console.log(answerOne);
console.log(typeof answerOne);
// Тип данных от пользователя: 'string'
// Есть способ поменять тип данных:
const answerTwo = +prompt('Вам исполнилось 20 лет?', '');
// Это динамическая типизация.
console.log(answerTwo + 5);
console.log(typeof answerTwo);
// Работа с массивами данных.
const answers = [];
answers[0] = prompt('Как Ваше имя?', '');
answers[1] = prompt('Как Ваша фамилия?', '');
answers[2] = +prompt('Сколько Вам лет?', '');
document.write(answers);
// Такие команды, как confirm, alert, prompt, блокируют построение HTML страницы
// до того, как они будут выполнены. Они существуют только внутри браузера.
console.log(typeof answers);
