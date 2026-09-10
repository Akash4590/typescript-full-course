
function fruits(): string {
  return "Apple";
}

function simple(): boolean {
  return true;
}

function complex(): number | string|boolean {
  let data = 10;
  let name = "Akash";
  let type = "age";

  if (type === "age") {
    return data;
  } else {
    return name;
  }
}

function anything():any{
              return
}

// =================never==========

function loopfun(){
    console.log('loop')          
}

//=================function params==========

function totalpirce(item:number,price:number,text?:string){
//     var price = 100;
//     var item = 50;
  if(text){
         console.log(text+price*item)          
  } else{
        console.log(price*item)             
  }      
}
totalpirce(50,30,"total price is");
totalpirce(50,30);

// function simple(data:string|number){
//               console.log(data);
// }
// simple(20)
// simple("Akash")