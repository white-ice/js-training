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

eval('console.log(1+1)');


/* Перехват ошибок, "try..catch" */

try {
    console.log('Начало блока try');
    lalala
    console.log('Конец блока try');
} catch (e) {
    console.log('Ошибка ' + e.name + ":" + e.message + "\n" + e.stack);
}
console.log('Потом код продолжить выполнение...');


var data = "Has Error"; // в данных ошибка

try {

    var user = JSON.parse(data); // <-- ошибка при выполнении
    console.log( user.name ); // не сработает

} catch (e) {
    // ...выполнится catch
    console.log( "Извините, в данных ошибка, мы попробуем получить их ещё раз" );
    console.log( e.name );
    console.log( e.message );
}


var data = '{ "age": 30 }'; // данные неполны

try {

    var user = JSON.parse(data); // <-- выполнится без ошибок

    if (!user.name) {
        throw new SyntaxError("Данные некорректны");
    }

    console.log( user.name );

} catch (e) {
    console.log( "Извините, в данных ошибка" );
}

/* Секция finally */

try {
    console.log( 'try' );
    if (confirm('Сгенерировать ошибку?')) BAD_CODE();
} catch (e) {
    console.log( 'catch' );
} finally {
    console.log( 'finally' );
}
