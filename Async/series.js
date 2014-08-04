var async = require('async');

async.series([
    function first(done){
        console.log('first');
        done(null, 'first');
    },
    function second(done){
        var x;
        console.log('second');
        if(!x){
            // do something that should set x
        }
        done(null, x);
    },
    function third(done){
        console.log('third');
        done(null, 'third');
    }
],
    //aggregate results
    function(err, results){
    console.log(results);
});