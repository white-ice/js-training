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
