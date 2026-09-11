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


// ==============intersection in typescript=======
type personTA={name:string}
type personTB={age:number}
type personTC=personTA&personTB
// var personDataA :{name:string}= {name:"Akash"} 
// var personDataB :{age:number}= {age:23} 
var personDataA:personTA = {name:"Akash"} 
var personDataB:personTB = {age:23} 
// var personDataC :{name:string,age:number}={name:"khan",age:24}

var personDataC :personTC={name:"khan",age:24}

console.log(personDataC)
