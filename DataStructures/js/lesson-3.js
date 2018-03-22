// Спец. символы.
console.log('Привет\n мир');

// Экранирование специальных символов
console.log('I\'m a JavaScript programmer');
console.log("I'm a JavaScript \"programmer\" ");

// Методы и свойства
// длина символа
var str = 'My\n';
console.log(str.length);

// доступ к символам
str = 'jQuery';
console.log(str.charAt(0));
console.log(str[4]);

// Смена регистра
console.log('Верхний регистр.', str.toUpperCase());
console.log('Нижний регистр', str.toLowerCase());

// поиск подстроки
console.log(str.indexOf('jQuery'));
console.log(str.indexOf('jquery'));

str = 'Last index of';

console.log(str.indexOf('of', 2));
console.log(str.lastIndexOf('Last', 2));
console.log('Если есть - ', ~str.indexOf('dex') ? 'совпадение есть' : 'совпадения нет');

//  Взятие подстроки: substring, substr, slice.
console.log('Выведем подстроку от 0 до 1 - ', str.substring(0, 2));
console.log('Выведем подстроку от 2 до конца - ', str.substring(2));
console.log('Выведем 5 символов с 3 символа - ', str.substr(2, 5));

// Отрицательные аргументы
console.log('C отрицательным аргументом выведется от позиции 0 - ', str.substring(-2));
console.log('Если start > end то аргументы меняются - ', str.substring(4, -2));
console.log('slice отрицательные аргументы отсчитывает от конца стр. - ', str.slice(-2));
console.log('slice отрицательные аргументы отсчитывает от конца стр. - ', str.slice(1, -2));

// Кодировка Юникод
console.log('Выведем первую букву алфавит маленькую - ', String.fromCharCode(1072));
console.log('Вернем код символа на с позиции 0 - ', str.charCodeAt(0));

var strUnicode = '';
for (var i = 1034; i <= 1113; i++) {
    strUnicode += String.fromCharCode(i);
}
console.log('Вывод символов юникода в отрезке с 1034 - 1113 - ', strUnicode);

// Правильное сравнение
console.log(str.localeCompare('first'));


str = 'Вывод символов юникода в отрезке';

console.log('Вывод значения indexOf - ', !!(~str.indexOf('отр')));




