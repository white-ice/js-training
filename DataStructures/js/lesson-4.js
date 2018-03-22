// Ассоциативные массивы (словарь, хэш)
// Сощдание объектов
// var o = new Object();
// var o = {};

var person = {};
person.name = 'Вася';
person.age = 28;

console.log(person.name + ':' + person.age);

// Удаление
delete person.age;

if ('name' in person) console.log('Свойство name существует!');
if ('age' in person) {
    console.log('Свойство age существует!');
} else {
    console.log('Свойство age не существует!');
}

console.log('Обращение не к существующему свойству - ', person.lalala);

// Доступ через квадратыне скобки.
person['name1'] = 'Петя'; // Позволяют использовать в качестве имени любую строку.

// Доступ к свойству через переменную
person.age = 25;
var key = 'age';
console.log('Доступ к свойству через переменную - ', person[key] );

// Объявление со свойствами
var menuSetup = {
    width: 300,
    height: 200,
    title: 'Menu',
    size: {
        top: 90,
        middle: 60,
        bottom: 90
    }
};

