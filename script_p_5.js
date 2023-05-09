// Операторы в Java Script.
'use strict';
console.log('Alice ' + 'go ' + 'through the woods!');
// Используется метод: конкатенация (слияния) строк.
console.log('Alice ' + 5);
// Возвращает тип string.
let incr = 10,
  decr = 10;
// Постфиксная запись.
incr++;
decr--;
console.log(incr);
console.log(decr);
// Префиксная запись.
++incr;
--decr;
console.log(incr);
console.log(decr);
// console.log(--incr); Уменьшает, затем выводит в консоль.
// console.log(decr++); Выводит в консоль, затем увеличивает.
//
//     %   Оператор возврата остатка от деления двух чисел
console.log(5 % 2);

//     ==  Оператор сравнения.
console.log(4 * 2 == 8);
console.log(4 * 2 == '8');
// !Сравниваем только по значению. ???????????????????????????????????????????????????????????????

//     === Оператор строгого равенства (сравнивает по типу данных).
console.log(4 * 2 === '8');
console.log(4 * 2 === 8);

// Логические операторы:

//     &&  Оператор "И".
//     ||  Оператор "ИЛИ".
const isChecked = true,
  isClose = true,
  variable = false;

console.log(isChecked && isClose);
console.log(isChecked && isClose && variable);
console.log(isChecked || isClose);

//     !   Оператор отрицания. Он обращает значение в обратное.
//  Например: != означает - "неравно".]
console.log(2 + 2 * 2 != 8);

// Порядок выполнения операторов.
// Для понимания этого существует таблица операторов.
console.log(2 + 2 * 2 === 8);
