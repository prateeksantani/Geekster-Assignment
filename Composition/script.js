function add(a,b){
  return a+b;
}

function square(c){
  return c * c;
}


// function addTwoandSquare(a,b){
//   return square(add(a,b))
// }


// console.log(addTwoandSquare(2,3));


function composeTwoFunction(fn1 , fn2){
  return function (a , b){
    return fn2(fn1(a,b));
  }
}

const task = composeTwoFunction(add, square);

console.log(task(2,3));