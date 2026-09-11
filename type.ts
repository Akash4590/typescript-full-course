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

enum WhoType {
    student = "student",
    teacher = "teacher",
    management = "management",
    labstaff = "labstaff"
}

var who: WhoType = WhoType.student;

console.log(WhoType.teacher);

enum fruit {
   a ="apple",
   b ="banana",
   c ="chery"           
}
 var myfruit:fruit =fruit.a
 console.log(fruit) 