

function showTime() {


  const time = new Date();
// console.log(time);

  const hour = time.getHours();
  const min = time.getMinutes();
  const sec = time.getSeconds();


  const timeString = `${hour} : ${min} : ${sec}`

  document.getElementById('text').innerText = timeString;

  // setTimeout(() => console.log('Hi'),5000);
}


  let interval = setInterval(showTime,1000);


  const button = document.getElementById('stop-btn');

 button.addEventListener('click', () => {
     clearInterval(interval);
 })







