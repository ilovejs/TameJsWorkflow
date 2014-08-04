/**
 * Created by MichaelZ on 1/08/2014.
 */
// greeter.js
class Greeter {
    sayHi(name = 'Anonymous') {
        console.log(`Hi ${name}!`);
    }
}

var greeter = new Greeter();

greeter.sayHi();