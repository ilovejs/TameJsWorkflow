var Step = require('step');
var fs = require('fs');

Step(
    // Loads two files in parallel
    function loadStuff() {
        fs.readFile("test/PureString", 'utf8', this.parallel());  //TODO: this callback will return something !!
        fs.readFile(__filename, 'utf8', this.parallel());
    },
    // Show the result when done
    function showStuff(err, code, users) {
        if (err) throw err;
        //how to test parallel code
        console.log(code);
        console.log(users);
    }
)