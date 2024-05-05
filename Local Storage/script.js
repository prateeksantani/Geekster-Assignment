const button = document.getElementById('clickButton');

const username = document.getElementById('username');

button.addEventListener('click', () => {
    const value = username.value;
    localStorage.setItem("name", value);
})

//local storage value is persistent does;t get deleted until user does it


// window.addEventListener('load', () => {
//   const value = localStorage.getItem("name");
//   username.innerText = value;
// })