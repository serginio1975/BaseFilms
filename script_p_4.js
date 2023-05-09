'use strict';
// Интерполяция.
// Это понятие, благодаря которому во внутрь строки можно вставить значение переменной.
const category = 'toys';
console.log('https://someurl.com/' + category + '/' + 'variableAnother');
// В итоге сильно розрастается строка.
// Для исключения этого существует приём интерполяции.
// Для этого используем 'бэктики.', т.е косые ка
console.log(`https://someurl.com/${category}'variableAnother`);
const user = 'Sergey';
alert(`Привет, ${user}`);
