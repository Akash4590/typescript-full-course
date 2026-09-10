var studentdata:string|number|[] = "Akash";
studentdata =20;
console.log(studentdata);


function fruitdata ():string|string[]|number{
var item = 1;
if(item>1){
   return(["apple","bnana"])          
}else{
return "mango"
}
}
console.log(fruitdata());

// ==========interface============

// var stdobj:{
//    name:string,
//    age:number,
//    college:string           
// }={
//     name:"Akash",
//     age:20,
//    college:"Emerson"          
// }



interface info {
  name: string;
  age: number;
  college: string;
  subject: string;
}

interface teachertype extends info {
  subject: string;
}

var stdobj: info = {
  name: "Akash",
  age: 20,
  college: "Emerson",
  subject: "Computer Science"
};

var techerobj: teachertype = {
  name: "Khan",
  age: 21,
  college: "Emerson",
  subject: "Math"
};

