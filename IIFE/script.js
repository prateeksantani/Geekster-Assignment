//IIFE = Immediately Invoked Function

(function add(a,b){
  console.log(a+b);
})(2,3);

(function hello(){
  console.log("Hello");
})();

(() => console.log("I am Es6"))();


//IIFE avoids poluting global namespace

// const data = (async () => await fetch())()