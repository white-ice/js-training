// Объявление
// var arr = [];
var fruits = ["Яблоко", "Апельсин", "Слива"];

console.log( fruits[0] );
console.log( fruits[1] );
console.log( fruits[2] );

console.log( fruits.length );

console.log( 'Вывод масива', fruits );

// Хранение любое число элементов любого типа

var arr = [ 1, 'Имя', { name: 'Петя' }, true ];

console.log( arr[2].name );

// Конец массива pop and push
console.log('Удалили "Слива" - ', fruits.pop() );

console.log(fruits);

console.log('Добавляем элемент в конец масива - ', fruits.push('Слива'));
console.log(fruits);

// НАчало масива shift and unshift

console.log('Удаляем "Яблоко" - ', fruits.shift());
console.log('ДОбавляем "Яблоко" - ', fruits.unshift('Яблоко', 'Вишня'));

console.log(fruits);
fruits[4] = 5;
fruits.age = 25;

console.log(fruits);

// Перебор элементов

for (var i = 0; i < fruits.length; i++) {
    console.log( fruits[i] );
}

console.log('Укорачиваем масив с помощу length - ', fruits.length = 3);
console.log(fruits);

// Создание вызовом new Array
// new Array();

// Многомерные массивы

var matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

console.log('Многомерный масив обращение к элементу - ', matrix[1][1]);

console.log(fruits[fruits.length - 1]);
