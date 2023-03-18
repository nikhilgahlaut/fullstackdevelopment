
const button = document.getElementById("button");

const arr = [];

function add(){
    const input = document.getElementById("input");
    const entry = document.getElementById("entry");
    const todoText = input.value ;
    arr.push(todoText); //array used to store the textArea data for future use.
    const newListItem = document.createElement('li');
    newListItem.innerHTML = todoText;
    entry.appendChild(newListItem);
    input.value = "";
    // console.log(arr);
}

button.addEventListener(`click`, add);
