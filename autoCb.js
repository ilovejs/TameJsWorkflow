var tame = require('tamejs').runtime;
var __tame_defer_cb = null;
var __tame_fn_0 = function (__tame_k) {
    tame.setActiveCb (__tame_defer_cb);
    function rand_wait (autocb) {
        var __tame_defer_cb = tame.findDeferCb ([autocb]);
        tame.setActiveCb (__tame_defer_cb);
        var __tame_this = this;
        var __tame_arguments = arguments;
        var __tame_fn_7 = function (__tame_k) {
            tame.setActiveCb (__tame_defer_cb);
            var time = Math . floor ( Math . random ( ) *5 ) ;
            var __tame_fn_1 = function (__tame_k) {
                tame.setActiveCb (__tame_defer_cb);
                var __tame_fn_2 = function (__tame_k) {
                    tame.setActiveCb (__tame_defer_cb);
                    var __tame_fn_3 = function (__tame_k) {
                        tame.setActiveCb (__tame_defer_cb);
                            autocb(0);
                        tame.setActiveCb (null);
                    };
                    if (time == 0) {
                        tame.callChain([__tame_fn_3, __tame_k]);
                    } else {
                        tame.callChain([__tame_k]);
                    }
                    tame.setActiveCb (null);
                };
                var __tame_fn_4 = function (__tame_k) {
                    tame.setActiveCb (__tame_defer_cb);
                    var __tame_defers = new tame.Deferrals (__tame_k);
                    var __tame_fn_5 = function (__tame_k) {
                        tame.setActiveCb (__tame_defer_cb);
                        setTimeout (
                        __tame_defers.defer ( { 
                            func_name : "rand_wait",
                            parent_cb : __tame_defer_cb,
                            line : 6,
                            file : "autoCb.tjs"
                        } )
                        , time ) ;
                        tame.callChain([__tame_k]);
                        tame.setActiveCb (null);
                    };
                    __tame_fn_5(tame.end);
                    __tame_defers._fulfill();
                    tame.setActiveCb (null);
                };
                var __tame_fn_6 = function (__tame_k) {
                    tame.setActiveCb (__tame_defer_cb);
                        autocb(time);
                    tame.setActiveCb (null);
                };
                tame.callChain([__tame_fn_2, __tame_fn_4, __tame_fn_6, __tame_k]);
                tame.setActiveCb (null);
            };
            tame.callChain([__tame_fn_1, __tame_k]);
            tame.setActiveCb (null);
        };
        tame.callChain([__tame_fn_7, autocb, __tame_k]);
        tame.setActiveCb (null);
    }
    var a = rand_wait ( ) ;
    console . log ( a ) ;
    tame.callChain([__tame_k]);
    tame.setActiveCb (null);
};
__tame_fn_0 (tame.end);