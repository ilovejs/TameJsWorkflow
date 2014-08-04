/**
 * Created by MichaelZ on 1/08/2014.
 */
var users = [
    { name: 'Jack', age: 21 },
    { name: 'Ben', age: 23 },
    { name: 'Adam', age: 22 }
];

console.log(users.map(function(user) { return user.age; }));
// [21, 23, 22]



