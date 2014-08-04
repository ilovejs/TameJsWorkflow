var tame = require('tamejs').runtime;
var __tame_defer_cb = null;
var __tame_fn_7 = function (__tame_k) {
    tame.setActiveCb (__tame_defer_cb);
    require ( 'tamejs' ) . register ( ) ;
    var __tame_fn_0 = function (__tame_k) {
        tame.setActiveCb (__tame_defer_cb);
        var __tame_k_implicit = {};
        var i = 0;
        var __tame_fn_1 = function (__tame_k) {
            tame.setActiveCb (__tame_defer_cb);
            var __tame_fn_2 = function (__tame_k) {
                tame.setActiveCb (__tame_defer_cb);
                i ++
                tame.callChain([__tame_fn_1, __tame_k]);
                tame.setActiveCb (null);
            };
            __tame_k_implicit.k_break = __tame_k;
            __tame_k_implicit.k_continue = function() { __tame_fn_2(__tame_k); };
            if (i < 10) {
                var __tame_fn_3 = function (__tame_k) {
                    tame.setActiveCb (__tame_defer_cb);
                    var __tame_fn_4 = function (__tame_k) {
                        tame.setActiveCb (__tame_defer_cb);
                        var __tame_defers = new tame.Deferrals (__tame_k);
                        var __tame_fn_5 = function (__tame_k) {
                            tame.setActiveCb (__tame_defer_cb);
                            setTimeout (
                            __tame_defers.defer ( { 
                                parent_cb : __tame_defer_cb,
                                line : 27,
                                file : "index.tjs"
                            } )
                            , 100 ) ;
                            setTimeout (
                            __tame_defers.defer ( { 
                                parent_cb : __tame_defer_cb,
                                line : 28,
                                file : "index.tjs"
                            } )
                            , 10 ) ;
                            tame.callChain([__tame_k]);
                            tame.setActiveCb (null);
                        };
                        __tame_fn_5(tame.end);
                        __tame_defers._fulfill();
                        tame.setActiveCb (null);
                    };
                    var __tame_fn_6 = function (__tame_k) {
                        tame.setActiveCb (__tame_defer_cb);
                        console . log ( "hello" ) ;
                        tame.callChain([__tame_k]);
                        tame.setActiveCb (null);
                    };
                    tame.callChain([__tame_fn_4, __tame_fn_6, __tame_k]);
                    tame.setActiveCb (null);
                };
                tame.callChain([__tame_fn_3, __tame_fn_2, __tame_k]);
            } else {
                tame.callChain([__tame_k]);
            }
            tame.setActiveCb (null);
        };
        tame.callChain([__tame_fn_1, __tame_k]);
        tame.setActiveCb (null);
    };
    tame.callChain([__tame_fn_0, __tame_k]);
    tame.setActiveCb (null);
};
__tame_fn_7 (tame.end);