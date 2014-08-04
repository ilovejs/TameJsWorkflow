/**
 https://github.com/creationix/step
 */
var Step = require('step');
var fs = require('fs');

Step(
    function readSelf() {
        //read itself in string mode
        fs.readFile(__filename, {encoding:'utf8', flag:'r'}, this);
    },
    function capitalize(err, text) {
        if (err) throw err;
        return text.toUpperCase();
    },
    function showIt(err, newText) {
        if (err) throw err;
        console.log(newText);
    }
);