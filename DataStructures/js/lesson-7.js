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

//Массивы: методы
//Метод split делает массив с преданными данными разделяя указанным разделителем
console.log('Split______');
var names = 'Маша, Петя, Марина, Василий';

var namesArr = names.split(', ');
for (var i = 0; i < namesArr.length; i++) {
    console.log( 'Вам сообщение ' + namesArr[i]);
}
//Метод join делает строку с массива разделяя указанным разделителем.
console.log('Join______');
console.log(namesArr.join(';'));

// Удаление из масива delete как в объекте
console.log(delete namesArr[3]);
console.log('Осталась дыра', namesArr);

// Метод splice
console.log('Splice_______');
namesArr = names.split(', ');

console.log('Вырезает элементы масива и возвращает их - ', namesArr.splice(0, 2));
console.log(namesArr);

namesArr = names.split(', ');

console.log('Вырезаем и вставляем - ', namesArr.splice(0, 2, 'Таня', 'Даша'));
console.log(namesArr);

namesArr = names.split(', ');
console.log('Вставляем элементы без удаления - ', namesArr.splice(2, 0, 'Таня', 'Даша'));
console.log(namesArr);

namesArr = names.split(', ');
console.log('Вставляем элементы без удаления с отрицательным номером позиции - ', namesArr.splice(-1, 0, 'Таня', 'Даша'));
console.log(namesArr);

// Метод slice - работает как в строках: отрицательное значение берен элементы с конца, без значения копирует весь массив.
console.log('Slice_______');

console.log('Копируем участок массива без изменения исходного состояния - ', namesArr.slice(1, 3));
console.log(namesArr);

// Метод sort(fn) - переобразовывает элементы к строке
console.log('Sort_______');

var nambersArr = [1, 2, 5, 25, 27, 17];

console.log('Сортировка как строк - ', nambersArr.sort());

// function compareNumeric(a, b) {
//     if (a > b) return 1;
//     if (a < b) return -1;
// }
function compareNumeric(a, b) {
    return a - b;
}
console.log('Сортировка с указанными правилами - ', nambersArr.sort(compareNumeric));

// Метод reverse
console.log('Reverse_______');

console.log('Меняет порядок элементов в массиве на обратный - ', nambersArr.reverse());

// Метод concat
console.log('Concat_______');

console.log('Копируем массив и добавляем элементы и сортируем - ', nambersArr.concat([11, 72, 40], 32, 19).sort(compareNumeric));

// Метод indexOf/lastIndexOf - синтаксис такой же как и для строк.
console.log('IndexOf/LastIndexOf______');
console.log(namesArr.indexOf('Даша'));

// Метод Object.keys(obj)
console.log('Object.keys(obj)______');

var user = {
    name: "Петя",
    age: 30
};

var keys = Object.keys(user);

console.log(keys);
console.log(nambersArr);

// Метод ForEach
console.log('ForEach______');

fruits.forEach(function(item, i, arr) {
    console.log(i + ': ' + item + ' (массив:' + arr + ')' );
});

// Метод Filter
console.log('filter______');
nambersArr = [1, -1, 2, -2, 3];
var positiveArr = nambersArr.filter(function(number) {
    return number > 0;
});
console.log('Вывидем позитивные числа с масива - ', positiveArr);

// Метод Map
console.log('Map______');
var nameLengths = namesArr.map(function(name) {
    return name.length;
});

console.log('Масив с количеством подсчитаных символов - ', nameLengths);

// Методы every/some
console.log('every/some______');
function isPositive(number) {
    return number > 0;
}
console.log('// false, не все положительные - ', nambersArr.every(isPositive));
console.log('// true, есть хоть одно положительное - ', nambersArr.some(isPositive));

// Методы reduce/reduceRight
console.log('reduce/reduceRight______');
var result = nambersArr.reduce(function(sum, current) {
    console.log('sum', sum);
    console.log('current', current);
    return sum + current;
}, 0);

console.log(result);

