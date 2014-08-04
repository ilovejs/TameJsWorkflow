var Q = require("q");

// using-promise.js
var httpGet = function (opts) {
    var deferred = Q.defer();
    http.get(opts, deferred.resolve);
    return deferred.promise;//function return promise
};

// promise-resolve-then-flow.js
//empty promise
var deferred = Q.defer();
deferred.promise.then(function (obj) {
    console.log(obj);
});
//resolved as the value in ()
deferred.resolve("Hello World");


// promise-translate-action.js
var promiseAction = function (arg1, arg2) {
    var deferred = Q.defer();
    action(arg1, arg2, deferred.resolve);
    return deferred.promise;
};
//callback function
promiseAction(arg1, arg2).then(function (result) {
    doSomething(result);
});


// chain-nested-promise.js
httpGet(url.parse("http://example.org"))
    .then(function (res) {
        httpGet(url.parse(res.headers["location"]))
            .then(function (res) {
                var body = "";
                res.on("data", function (chunk) {
                    body += chunk;
                });
                res.on("end", function () {
                    console.log(body);
                });
            });
    });

// chain-by-value.js
httpGet(url.parse("http://example.org"))
    .then(function (res) {
        //return anything in then callback will pass into next then cb.
        return res.headers["location"];
    })
    .then(function (location) {
        httpGet(url.parse(location)).then(function (res) {
            var body = "";
            res.on("data", function (chunk) {
                body += chunk;
            });
            res.on("end", function () {
                console.log(body);
            });
        });
    });

// If you return a "promise" in then callback,
// you can catch a resolved value of the promise to the next then callback:
// chain-by-promise.js
httpGet(url.parse("http://example.org"))
    .then(function (res) {
        //return "promise"
        return httpGet(url.parse(res.headers["location"]));
    })
    .then(function (res) {
        var body = "";
        res.on("data", function (chunk) {
            body += chunk;
        });
        res.on("end", function () {
            console.log(body);
        });
    });



