// let list_val = document.getElementById("lst");
// list_val.innerHTML = "nikhil gahlaut";
let array_final = ["HTML and Semantics","Starting with CSS","Working Template","Mobile responsive webpages","Grid and Flex-box in CSS","Projects using HTML & CSS","Version Control and Git","Getting Started with JavaScript","Advance JavaScript","Working with DOM","Making Projects using HTML, CSS and JavaScript","Understanding Fundamental of Computer Science","Getting Started with Database","Understanding the Database","Starting with NodeJS and Express","Understanding React and its Fundamentals","Understanding Hooks and Routers","Starting and Completing Full Fledge Projects"];
console.log(array_final[2]);
const button = document.getElementById("button");
let list_val = document.getElementById("lst");
let x = array_final.length;
let indx = 0;


button.addEventListener("click",() =>{
    if (indx < x) {
        const newItem = document.createElement('li');
        newItem.innerHTML = array_final[indx];
        list_val.appendChild(newItem);
        console.log(newItem.innerHTML);
        indx++;
    }
    else{
        alert("no items are left")

    }
});