/**
 * Created by MichaelZ on 1/08/2014.
 */
//1. arrow function
let square = x => x * x;
let add = (a,b) => a + b;
let pi = () => 3.1415;

console.log(square(5));
console.log(add(3,5));
console.log(pi);

//2. block scope
var x = 0;

for(let i = 0; i < 10; i++){
    x += 10;
}

try{
    console.log(i);
}catch(e) {
    console.log('i does not exist here!');
}

//3. class and inheritance
class Polygon {
    constructor(height, width){
        this.name = 'polygon';
        this.height = height;
        this.width = width;

    }

    sayName(){
        console.log('hi, i am a ', this.name + '.');
    }
}

class Square extends Polygon {
    constructor(len){
        super(len,len);
        this.name = 'Square';
    }
    get area(){
        return this.height * this.width;
    }
}

let s = new Square(5);
s.sayName();
console.log(s.area);

//array comprehension
let arr = [1, 2, 3, 4, 5];
let squared = [for (x of arr) x * x];
console.log(squared);

//let msg = format(
//    'The {0}st arg is a string, the {1} are {2}',
//    1,
//    'rest',
//    'unknown'
//);
//console.log(msg);

//spread operator
function add(a, b){
    return a + b;
}

let nums = [5,4];
console.log(add(...nums));

//Destructuring
var point = { x: 1, y: 2 };
var [ x, y ] = point;

console.log(x); // 1
console.log(y); // 2

//Return multiple values, no need to return object anymore
function returnsFewValues() {
    return [ 1, 2 ];
}

var users = [
    { name: 'Jack', age: 21 },
    { name: 'Ben', age: 23 },
    { name: 'Adam', age: 22 }
];

console.log(users.map(user => user.age));
// [21, 23, 22]