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
