console.log(typeof 1);
console.log(typeof true);
console.log(typeof 'Text');
console.log(typeof undefined);
console.log(typeof null);
console.log(typeof alert);
console.log(typeof {});
console.log(typeof []);
console.log(typeof new Date);

var toString = {}.toString;

var arr = [1, 2];

console.log( toString.call(arr));

function getClass(obj) {
    return {}.toString.call(obj).slice(8, -1);
}

console.log(getClass(new Date));

/* instanceof */
function User() {

}

var user = new User();

console.log( user instanceof User );

/* Пример полиморфной функции */
function sayHi(who) {
    if (who.forEach) {
        who.forEach(sayHi);
    } else {
        console.log( 'Привет, ' + who);
    }
}
sayHi("Вася");
sayHi(["Саша", "Петя", ["Маша", "Юля"]]);
