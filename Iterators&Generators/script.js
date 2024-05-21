//Iterators and Generators bring the concept of iteration directly into the core language and provide a mechanism for customizing the behaviour of for .. of loops.

// function makeIterator(start = 0, end = Infinity, step = 1 ){
//   let nextStart = start;
//   let iterationCount = 0;


//   return {
//     next(){
//       if(iterationCount < end ){
//         result = {value : nextStart , done : false}
//         nextStart = nextStart + step;
//         iterationCount++;
//         return result;
//       }
//       return {value : iterationCount , done : true }
//     }
//   }
// }

// const myIterator = makeIterator(1, 10, 1);

// let result = myIterator.next();

// while(!result.done ){
//   console.log(result.value)
//   result = myIterator.next

// }

//Generators and yield


function* count(){
  yield 2;
  yield 4;
  yield 6;
  yield 8;
  yield 10;
  yield 12;
}



const even = count();


for(const i of even) {
  console.log(i);
}
