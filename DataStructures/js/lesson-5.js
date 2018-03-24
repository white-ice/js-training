// Объекты: перебор свойств
// Синтаксис
// for (key in obj) {
//     /* ... делать что-то с obj[key] ... */
// }
var menu = {
    width: 300,
    height: 200,
    title: 'Menu'
};

var counter = 0;

for (var key in menu) counter++;

for (var key in menu) {
    console.log('Ключ: ' + key + ' значение: ' + menu[key])
}
console.log('Всего свойств: ' + counter);

// В каком порядке перебираются свойства?
// var codes = {
//     '7' : 'Россия',
//     '38' : 'Украина',
//     '1' : 'США'
// }; // отсортируется по возростанию

// Хак для сортировки в записанном варианте
var codes = {
    '+7' : 'Россия',
    '+38' : 'Украина',
    '+1' : 'США'
};

for (var code in codes) {
    var value = codes[code];

    code = +code;
    console.log( code + ': ' + value );
}

// Копирование по ссылке.

var user = {};
user.name = 'Вася';
user.surname = 'Петров';
user.name = 'Сергей';
delete user.name;

var admin = user;

admin.name = 'Петя';

console.log(user.name);

// Клонирование объекстов

var clone = {};

for (var key in user) {
    clone[key] = user[key];
}

clone.name = 'Вася';

console.log(user.name);
