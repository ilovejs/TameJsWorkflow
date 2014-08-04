var Step = require('step');

function pullData(id, callback){
//    dataSource.retrieve(id, function(err, data){
//        if(err) callback(err);
//        else callback(data);
//    });
    if(id===1) {
        callback(null,1);
    }
    if(id===2){
        callback(null,2);
    }
    if(id===3) {
        //TODO: In Node.js every callback have two parameters. If you lost first one, error will be raised.
        callback(null,3);
    }
}

function getDataFromTwoSources(callback){
    var data1,
        data2;
    Step(
        function pullData1(){
            console.log('test1');
            pullData(1, this);
        },
        function pullData2(err, data){
            if(err) throw err;
            data1 = data;
            console.log('test2');
            pullData(2, this);
        },
        function finalize(err, data) {
            if(err) {
                callback(err);
            } else {
                data2 = data;
                var finalList = [data1, data2];
                console.log('done with no problem');
                callback(null, finalList);
            }
        }
    );
}

getDataFromTwoSources(function(err, data){
    if(err) throw err;
    for(var i in data) {
        console.log(i);
    }
});

/**
 Note that I personally prefer async for two reasons:

 Step catches all thrown errors and does a callback with them; this changes the behavior of the application, when these libraries should just be cleaning up the look of the code.
 Async has much better combination options and looks cleaner
 */
