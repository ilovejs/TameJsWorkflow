var tame = require('tamejs').runtime;
var __tame_defer_cb = null;
var __tame_fn_0 = function (__tame_k) {
    tame.setActiveCb (__tame_defer_cb);
    var dns = require ( "dns" ) ;
    function do_one (cb, host) {
        var __tame_defer_cb = tame.findDeferCb ([cb, host]);
        tame.setActiveCb (__tame_defer_cb);
        var __tame_this = this;
        var __tame_arguments = arguments;
        var __tame_fn_8 = function (__tame_k) {
            tame.setActiveCb (__tame_defer_cb);
            var err , ip ;
            var __tame_fn_1 = function (__tame_k) {
                tame.setActiveCb (__tame_defer_cb);
                var __tame_fn_2 = function (__tame_k) {
                    tame.setActiveCb (__tame_defer_cb);
                    var __tame_defers = new tame.Deferrals (__tame_k);
                    var __tame_fn_3 = function (__tame_k) {
                        tame.setActiveCb (__tame_defer_cb);
                        dns . resolve ( host , "A" ,
                        __tame_defers.defer ( { 
                            assign_fn : 
                                function () {
                                    err = arguments[0];
                                    ip = arguments[1];
                                }
                                ,
                            func_name : "do_one",
                            parent_cb : __tame_defer_cb,
                            line : 11,
                            file : "SerialDNSresolver.tjs"
                        } )
                        ) ;
                        tame.callChain([__tame_k]);
                        tame.setActiveCb (null);
                    };
                    __tame_fn_3(tame.end);
                    __tame_defers._fulfill();
                    tame.setActiveCb (null);
                };
                var __tame_fn_4 = function (__tame_k) {
                    tame.setActiveCb (__tame_defer_cb);
                    var __tame_fn_5 = function (__tame_k) {
                        tame.setActiveCb (__tame_defer_cb);
                        console . log ( "ERROR! " + err ) ;
                        tame.callChain([__tame_k]);
                        tame.setActiveCb (null);
                    };
                    var __tame_fn_6 = function (__tame_k) {
                        tame.setActiveCb (__tame_defer_cb);
                        console . log ( host + " -> " + ip ) ;
                        tame.callChain([__tame_k]);
                        tame.setActiveCb (null);
                    };
                    if (err) {
                        tame.callChain([__tame_fn_5, __tame_k]);
                    } else {
                        tame.callChain([__tame_fn_6, __tame_k]);
                    }
                    tame.setActiveCb (null);
                };
                var __tame_fn_7 = function (__tame_k) {
                    tame.setActiveCb (__tame_defer_cb);
                    cb ( ) ;
                    tame.callChain([__tame_k]);
                    tame.setActiveCb (null);
                };
                tame.callChain([__tame_fn_2, __tame_fn_4, __tame_fn_7, __tame_k]);
                tame.setActiveCb (null);
            };
            tame.callChain([__tame_fn_1, __tame_k]);
            tame.setActiveCb (null);
        };
        tame.callChain([__tame_fn_8, __tame_k]);
        tame.setActiveCb (null);
    }
    function do_all (lst) {
        var __tame_defer_cb = tame.findDeferCb ([lst]);
        tame.setActiveCb (__tame_defer_cb);
        var __tame_this = this;
        var __tame_arguments = arguments;
        var __tame_fn_9 = function (__tame_k) {
            tame.setActiveCb (__tame_defer_cb);
            var __tame_k_implicit = {};
            var i = 0;
            var __tame_fn_10 = function (__tame_k) {
                tame.setActiveCb (__tame_defer_cb);
                var __tame_fn_11 = function (__tame_k) {
                    tame.setActiveCb (__tame_defer_cb);
                    i ++
                    tame.callChain([__tame_fn_10, __tame_k]);
                    tame.setActiveCb (null);
                };
                __tame_k_implicit.k_break = __tame_k;
                __tame_k_implicit.k_continue = function() { __tame_fn_11(__tame_k); };
                if (i < lst . length) {
                    var __tame_fn_12 = function (__tame_k) {
                        tame.setActiveCb (__tame_defer_cb);
                        var __tame_defers = new tame.Deferrals (__tame_k);
                        var __tame_fn_13 = function (__tame_k) {
                            tame.setActiveCb (__tame_defer_cb);
                            do_one (
                            __tame_defers.defer ( { 
                                func_name : "do_all",
                                parent_cb : __tame_defer_cb,
                                line : 23,
                                file : "SerialDNSresolver.tjs"
                            } )
                            , lst [ i ] ) ;
                            tame.callChain([__tame_k]);
                            tame.setActiveCb (null);
                        };
                        __tame_fn_13(tame.end);
                        __tame_defers._fulfill();
                        tame.setActiveCb (null);
                    };
                    tame.callChain([__tame_fn_12, __tame_fn_11, __tame_k]);
                } else {
                    tame.callChain([__tame_k]);
                }
                tame.setActiveCb (null);
            };
            tame.callChain([__tame_fn_10, __tame_k]);
            tame.setActiveCb (null);
        };
        tame.callChain([__tame_fn_9, __tame_k]);
        tame.setActiveCb (null);
    }
    console . log ( process . argv ) ;
    
    do_all ( process . argv . slice ( 2 ) ) ;
    tame.callChain([__tame_k]);
    tame.setActiveCb (null);
};
__tame_fn_0 (tame.end);