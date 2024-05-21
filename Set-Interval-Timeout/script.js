function showTime(){
  const currentTime = new Date();
  const time =  `${currentTime.getHours()} : ${currentTime.getMinutes()} : ${currentTime.getSeconds()}`

  document.getElementById("time").innerText= time;
}

// setTimeout(() => 
//   console.log("h1"),5000
// )

let interval =  setInterval(showTime, 1000);

const button = document.getElementById("stop-btn");

button.addEventListener('click', () => {
          clearInterval(interval);
});