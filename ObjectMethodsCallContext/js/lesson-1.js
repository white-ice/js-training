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

