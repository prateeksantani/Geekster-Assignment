//Promisification

//Promisification converts a callback into a function that returns a promise


// Without Promise

function loadScript(src , callback){
  const script = document.createElement('script');  // Line 9
  script.src = src;

script.onload = () => callback(null, script)
script.onerror = (err) => callback(new Error(`Script load error for ${src}`));

document.head.appendChild(script);

}


loadScript('test.js', (err, script) => {
  if(err){
    console.log(err);
  }else {
    console.log("Script Loaded");
  }
})