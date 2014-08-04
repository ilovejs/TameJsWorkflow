System.register("../../ES6/fatArrow", [], function() {
  "use strict";
  var __moduleName = "../../ES6/fatArrow";
  var users = [{
    name: 'Jack',
    age: 21
  }, {
    name: 'Ben',
    age: 23
  }, {
    name: 'Adam',
    age: 22
  }];
  console.log(users.map(function(user) {
    return user.age;
  }));
  return {};
});
System.get("../../ES6/fatArrow" + '');
