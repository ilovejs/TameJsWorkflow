/**
 * Created by MichaelZ on 4/08/2014.
 */
var async = require('async');

async.waterfall([
    function first(done){
        console.log('first');
        done(null, 'first');
    },
    function second(val, done){
        var x;
        console.log('second has val: %j', val);
        if(!x){
            // do something that should set x
            x = "second";
        }
        done(null, x);
    },
    function(val, done){
        console.log('third has val: %j', val);
        done(null, 'third');
    }
], function(err, val){
    console.log('callback has val: %j', val)
});
