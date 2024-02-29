//textarea

let textarea = document.querySelector('.text-area').children;

let button = document.querySelector('.add');

let colorpicker =  textarea[1].children[0];

colorpicker.value = "#00ff00";

let right_notes = document.querySelector('.right-notes');

button.addEventListener('click', () => {
  addNotes(textarea[0].value, colorpicker.value);

  textarea[0].value = "";

  removeNotes();



})

const addNotes = (note , color) => { 
  divOfNotes = document.createElement("div");

  divOfNotes.innerHTML = `<p>${note}</p> <button class = "bottons">Delete </button> `

  divOfNotes.style.backgroundColor = `${color}`;

  right_notes.appendChild(divOfNotes);
}

const removeNotes = () => {
  let btn = document.querySelectorAll('.bottons');

  btn.forEach((value) => {
    value.addEventListener('click',() => {
      value.parentElement.remove()
    });
  });
}