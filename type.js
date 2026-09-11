"use strict";
// ==========type datatype=========
// type datatype = {name:string,email:string}
// var empdata1:datatype = {
// name:"Akash",
// email:"akashjaved4590@gmail.com"
// }
// var studentdata1:datatype ={
//        name:"khan",
//        email:"khan@gmail.com"       
// }
// ==========enum datatype========
var WhoType;
(function (WhoType) {
    WhoType["student"] = "student";
    WhoType["teacher"] = "teacher";
    WhoType["management"] = "management";
    WhoType["labstaff"] = "labstaff";
})(WhoType || (WhoType = {}));
var who = WhoType.student;
console.log(WhoType.teacher);
var fruit;
(function (fruit) {
    fruit["a"] = "apple";
    fruit["b"] = "banana";
    fruit["c"] = "chery";
})(fruit || (fruit = {}));
var myfruit = fruit.a;
console.log(fruit);
//# sourceMappingURL=type.js.map