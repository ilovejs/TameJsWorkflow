var rest = require('rest');
var mime = require('mime');

fetchRemoteGreeting(rest)
    .then(addExclamation)
    .catch(handleError)
    .done(function(greeting) {
        console.log(greeting);
    });

function fetchRemoteGreeting(rest) {
    // returns a when.js promise for 'hello world'
    return rest.client('http://localhost:3000/api/my-models/1');
}

function addExclamation(greeting) {
    //array of {id: xx, property1: xx}
    var claim = greeting + '!!!!';
    return claim;
}

function handleError(e) {
    return 'drat!';
}