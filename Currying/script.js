// function add(a){
//   return function(b){
//     return function(c){
//       console.log(a+b+c);
//     }
//   }
// }

// add(1)(2)(3);


// function add(a){
//   return function(b){
//     return function(c){
//       return a+b+c;
//     }
//   }
// }

// console.log(add(1)(2)(3));

const add = (a) => (b) => (c) => a + b + c;
console.log(add(1)(2)(3));