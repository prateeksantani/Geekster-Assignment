//Clousure is combination of function bundeled together with respect to it surrounding state (lexical enviroment)


// function main (){
//   const name = "Prateek Santani";

//   function sayMyName(){
//     console.log(name);
//   }

//   return sayMyName;
// }

// let a = main();

// a();

// function main (name){

//   function sayMyName(){
//     console.log(name);
//   }

//   return sayMyName;
// }

// let a = main("prateek");

// a();


function adder(num){
  function add(b){
    console.log(num + b);
  }
  return add;
}

const addto5 = adder(5);
const addto10 = adder(10);

addto5(5);
addto5(2);
addto10(5);








