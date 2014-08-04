System.register("../../ES6/ES6-2", [], function() {
  "use strict";
  var __moduleName = "../../ES6/ES6-2";
  var Greeter = function Greeter() {};
  ($traceurRuntime.createClass)(Greeter, {sayHi: function() {
      var name = arguments[0] !== (void 0) ? arguments[0] : 'Anonymous';
      console.log(("Hi " + name + "!"));
    }}, {});
  var greeter = new Greeter();
  greeter.sayHi();
  return {};
});
System.get("../../ES6/ES6-2" + '');
