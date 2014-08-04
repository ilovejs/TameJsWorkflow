System.register("../../ES6/ES6-1", [], function() {
  "use strict";
  var __moduleName = "../../ES6/ES6-1";
  var $__0 = Object.freeze(Object.defineProperties(["<a href=\"", "\">Click me!</a>"], {raw: {value: Object.freeze(["<a href=\"", "\">Click me!</a>"])}}));
  var map = {
    a: 1,
    b: 2,
    c: 3
  };
  for (var k in map) {
    if (map.hasOwnProperty(k)) {
      console.log(map[$traceurRuntime.toProperty(k)]);
    }
  }
  for (var k in map) {
    if (map.hasOwnProperty(k)) {
      console.log(k);
    }
  }
  var map = new Map;
  map.set("a", 1);
  map.set("b", 2);
  map.set("c", 3);
  for (var v in map.values()) {
    console.log(v);
  }
  for (var k in map.keys()) {
    console.log(k);
  }
  var set = new Set;
  set.add(1);
  set.add(2);
  set.add(3);
  for (var v in set.values()) {
    console.log(v);
  }
  var name = "John",
      surname = "Doe";
  var template1 = ("Hello! My name is " + name + " " + surname + "!");
  console.log(template1);
  var a = 1,
      b = 2,
      c = 3;
  var template2 = (a + " + " + b + " - " + c + " / 2 = " + (a + b - c / 2));
  console.log(template2);
  var template = safehtml($__0, someUserdefinedVariable);
  return {};
});
System.get("../../ES6/ES6-1" + '');
