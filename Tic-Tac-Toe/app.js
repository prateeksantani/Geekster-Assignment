
let currentPlayer = "X";
let arr = Array(9).fill(null)


function checkWinner(){
  if(
    (arr[0] !== null && arr[0] ==  arr[1] && arr[1] == arr[2]) ||
    (arr[3] !== null && arr[3] ==  arr[4] && arr[4] == arr[5]) ||
    (arr[6] !== null && arr[6] ==  arr[7] && arr[7] == arr[8]) ||
    (arr[0] !== null && arr[0] ==  arr[3] && arr[3] == arr[6]) ||
    (arr[1] !== null && arr[1] ==  arr[4] && arr[4] == arr[7]) ||
    (arr[2] !== null && arr[2] ==  arr[5] && arr[5] == arr[8]) ||
    (arr[0] !== null && arr[0] ==  arr[4] && arr[4] == arr[8]) ||
    (arr[2] !== null && arr[2] ==  arr[4] && arr[4] == arr[6])
  ){
    document.write(`Winner is ${currentPlayer}`)
    return;
  }
  if(!arr.some((e) => e === null )){
    document.write(`It's a draw`);
    return;
  }
}



function handleClick(el) {
  const id =  Number(el.id);
  // console.log(id)

  if(arr[id] == null){

  arr[id] = currentPlayer;
  el.innerText = currentPlayer;

  checkWinner();

  currentPlayer = currentPlayer === "X" ?  "0" : "X";
  // console.log(array);
  }

 
}




// function checkWinner(){
//   const winningCombination = [
//     [0,1,2], [3,4,5], [6,7,8], // Horizontal
//     [0,3,6], [1,4,7], [2,5,8], // Vertical
//     [0,4,8], [2,4,6] // Diagonal
//   ]

//   for(let i = 0; i < winningCombination.length; i++){
//     const [a, b, c] = winningCombination[i];
//     if(array[a] && array[a] === array[b] && array[a] === array[c]){
//       alert(`Player ${array[a]} wins!`);
//     }
//   }
// }