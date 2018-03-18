"use strict";

console.log('255 в шестнадцатиричной системе', 0xFF);
console.log('Научный формат', 1e3);
console.log('Научный формат', 3e5);
console.log('Научный формат с точкой', 3e-5);
console.log('Деленее на ноль', (1 / 0));
console.log('Деленее на ноль', (12345 / 0));
console.log('Infinity больше любого числа', Infinity > 1234567890);
console.log('отрицательный Infinity - ', -1 / 0);
console.log('Бесконечность в научный формат можно получить сделав очень большое число - ', 3e500);
console.log('Если математическа операция не может быть совершена вернет - ', 0 / 0);
console.log(NaN == NaN);
console.log(NaN === NaN);
console.log('Проверка на NaN - ', isNaN(0 / 0));
console.log('Проверка на NaN - ', isNaN('12'));
console.log('Любая операция с NaN вернет NaN - ', NaN + 1);
var n = 0 / 0;
console.log('Способ проверки на NaN - ', n !== n);

console.log( isFinite("1"));
console.log( isFinite(Infinity));
console.log( isFinite(NaN));
var s = '12.34';
console.log('Преобразование к числу - ' +s );
console.log('Если строка не в точности число - ', +"12test");
console.log('Исключение - ', +' -12');
console.log('Исключение - ', +' \n12 \n');
console.log('Пустая строка будет - ', +"");
console.log('Пробел между числами вернет - ', +"1 2");
console.log('Аналогичное переобразование с другими математичискими операторами и функциями - ', '12.34' / "-2");

console.log('html/css многие значения не являются в точности числами - ', +'12px');
console.log('Для удобного чтения значений существует функция parseInt - ', parseInt('12px'));
console.log(parseInt('12test'));
console.log(parseFloat('12.3.4'));

console.log('Проверка на число - ', isNaN('-11.5'));
console.log('Проверка на число - ', isNaN(null));

// функция на точную проверку числа
function isNumeric(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
}

console.log('Проверяем на число фушкцией isNumeric() - ', isNumeric(4));

// Метод для получения 16-ричного представления числа
var t = 255;
console.log('Получаем 16 - ричное представление числа', t.toString(16));

// округление
console.log("округление в низ - ", Math.floor(3.8));
console.log("округление вверх - ", Math.ceil(3.3));
console.log("округление до ближайшего целого - ", Math.round(3.3));

// Битовые операторы делают любое число 32-битным целым, обрезая десятичную часть.
console.log('двойное битовое НЕ', ~~12.3);
console.log('исключающие или', 12.3 ^ 0);
console.log('исключающие или', 2.3 + 12.3 ^ 0);

var n1 = 3.45;
console.log('Округление до заданной точки', Math.round(n1 * 10) / 10);
// Метод для округления до заданной точки

console.log('Метод округления', n1.toFixed(1));

// Неточные вычисления
console.log(0.1 + 0.2 > 0.3);
console.log((0.1 * 10 + 0.2 * 10) / 10);

// Другие математические методы

// Тригонометрия
console.log(Math.max(2, 5, 1));
console.log(Math.min(2, 5, 1));
console.log(Math.random());

// Форматирование ( интернационализация в JavaScript
var number1 = 123456789;

console.log( number1.toLocaleString());

var i1 = 0;

// while (i1 != 10) {
//     i1 += 0.2;
//     console.log(i1)
// }

function getDecimal(num) {
    return num > 0 ? num - Math.floor(num) : Math.ceil(num) - num;
}

console.log(getDecimal(-1.2));

console.log(Math.ceil(-1.2) - (-1.2))
