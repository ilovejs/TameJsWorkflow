//arrow function
/*
let square = x => x * x;
let add = (a,b) => a + b;
let pi = () => 3.1415;

console.log(square(5));
console.log(add(3,5));
console.log(pi());
//return function
console.log(pi);

var users = [
    { name: 'Jack', age: 21 },
    { name: 'Ben', age: 23 },
    { name: 'Adam', age: 22 }
];

console.log(users.map(user => user.age));
// [21, 23, 22]
*/

//clojure
/*
//old way
function x() {
    (function () {
        var a = 2;
        a = a + 3;
    }());
}

console.log(a); // undefined

//new way
function x() {
    let a = 2;
    a = a + 3;
}

console.log(a); // undefined
*/

//Iterate over values, not over keys:
/*
var someArray = [ "a", "b", "c" ];
for (var v of someArray) {
    console.log(v);
}

//old
var eightLetterLongNames = [];
var someNamesArray = ["jones", "zeal", "jack"];
someNamesArray.forEach(function (name) {
    if (name.length >= 8) eightLetterLongNames.push(name);
});

//new
var eightLetterLongNames = [ x for (name of someNamesArray) if (name.length >= 8) ];

*/


//Arrow Functions
/*
//old
element.addEventListener('click', function (e) { console.log(e); });

//new
element.addEventListener('click' (e) => console.log(e));

*/

//Rest parameter is a perfect solution if you want your function to accept a few named
//arguments and later accept an unlimited number of them.

/*
//old
function logWithTag(tag) {
    //how to use these ??
    var logs = [].slice.call(arguments, 1);
    logs.forEach(function (log) {
        console.log(tag + ': ' + log);
    });
}

//new 1
function logWithTag(tag, ...logs) {
    logs.forEach(function (log) {
        console.log(tag + ': ' + log);
    });
}

//new 2
var logWithTag = (tag, ...logs) => logs.forEach((log) => console.log(tag + ': ' + log));
*/

//Default Arguments
/*
//old
argument = argument || "default value"

//new
function (arg1 = "default value", arg2 = false, arg3) {
    // function body
}
*/

//Spread operator allows us to pass an array like separate arguments to a function.
/*
//old
var someArray = [ "a", "b", "c" ];
console.log.apply(window, someArray);

//new
var someArray = [ "a", "b", "c" ];
console.log(...someArray);
*/

//Classes
/*
// ExtJS
var SimpleClass = new Ext.Class({
    name: 'John Doe',
    initialize: function(name) {
        this.name = name;
    },
    say: function (message) {
        return this.name + ': ' + message;
    }
});

// PrototypeJS
var Person = Class.create();
Person.prototype = {
    name: 'John Doe',
    initialize: function(name) {
        this.name = name;
    },
    say: function (message) {
        return this.name + ': ' + message;
    }
};

//These can be replaced with pure JavaScript:
class Person {
    public name: 'John Doe'

    initialize(name) {
        this.name = name;
    }

    say(message) {
        return this.name + ': ' + message;
    }
}
    */

//Modules
/*
// CommonJS

// point.js
function Point(x, y) {
    this.x = x;
    this.y = y;
}
module.exports = Point;

// myapp.js
var Point = require("point");
var origin = new Point(0, 0);
console.log(origin);

// Version 2:

// point.js
define("point", function() {
    function Point(x, y) {
        this.x = x;
        this.y = y;
    }
    return Point;
});

// myapp.js
define("myapp", ["point"], function(Point) {
    var origin = new Point(0, 0);
    console.log(origin);
});


//es6
// point.js
module "point" {
    export class Point {
        constructor (x, y) {
            public x = x;
            public y = y;
        }
    }
}

// myapp.js
module point from "/point.js";
import Point from "point";

var origin = new Point(0, 0);
console.log(origin);
*/

//Maps and Sets

//old
var map = {
    a: 1,
    b: 2,
    c: 3
};

for (var k in map) {
    if (map.hasOwnProperty(k)) {
        console.log(map[k]);
    }
}

for (var k in map) {
    if (map.hasOwnProperty(k)) {
        console.log(k);
    }
}

//new
var map = new Map;
map.set("a", 1);
map.set("b", 2);
map.set("c", 3);

for (var v in map.values()) {
    console.log(v);
}

for (var k in map.keys()) {
    console.log(k);
}

//Set
var set = new Set;

set.add(1);
set.add(2);
set.add(3);

for (var v in set.values()) {
    console.log(v);
}



//Iterators

//Weak Maps

//Proxies

//Template Strings
var name = "John", surname = "Doe";
var template1 = `Hello! My name is ${name} ${surname}!`;

console.log(template1); // Hello! My name is John Doe!


var a = 1, b = 2, c = 3;
var template2 = `${a} + ${b} - ${c} / 2 = ${ a + b - c / 2 }`;

console.log(template2); // 1 + 2 - 3 / 2 = 1.5

//Tag
var template = safehtml`<a href="${someUserdefinedVariable}">Click me!</a>`;

/*

http://code.tutsplus.com/tutorials/eight-cool-features-coming-in-es6--net-33175


 */
