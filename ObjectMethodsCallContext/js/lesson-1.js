function func() {
    'use strict';
    console.log(this);
}
func();

var arr = ['a', 'b'];

arr.push(function() {
    console.log(this);
});

arr[2]();

var obj = {
    go: function() { console.log(this) }
};

(obj.go)();

var user = {
    firstName: "Василий",

    export: function() {
        return {
            value: this
        };
    }
};

var a = user.export().value.firstName;

console.log("user", a );

// Логическое преобразование
if({} && []) console.log('Все объекты - true');

// Строковое преобразование

user.toString = function() {
    return 'Пользователь ' + this.firstName;
};

console.log( user );

// Созадание объектов через "new"
function Animal(name) {
    this.name = name;
    this.canWalk = true;
}

var animal = new Animal('ежик');

console.log(animal);

var obj3 = {};
function A() {
    return obj;
}
function B() {
    return obj;
}

var a = new A;
var b = new B;

console.log( a == b );


// Явное указание this: "call", "apply"

function showFullName() {
    console.log( this.firstName + ' ' + this.lastName );
}

user.lastName = 'Петров';

showFullName.call(user);

// «Одалживание метода»

function printArgs() {
    arguments.join = [].join;
    var argStr = arguments.join(':');
    console.log( argStr );
}

printArgs(1, 2, 3);

// Ещё пример: [].slice.call(arguments)

function printArgs1() {
    var args = [].slice.call(arguments);
    console.log(args.join(', '));
}

printArgs1('Привет', 'мой', 'мир');

// Привязка контекста и карринг: "bind"

function bind(fun, context) {
    return function() {
        return func.apply(context, arguments);
    }
}

user.sayHi = function () {
    console.log( this.firstName );
};

setTimeout(bind(user.sayHi, user), 1000);
