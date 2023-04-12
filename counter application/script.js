const dec_btn = document.getElementById("dec");
const inc_btn = document.getElementById("inc");
const value = document.getElementById("displayValue");
const resetbtn = document.getElementById("resetbtn");

// for increment button

// inc_btn.addEventListener("dblclick", () => {
//     const value = Number(displayValue.innerText);
//     if(value>=10){
//         alert("10+ values are not allowed")
//     }
//     else{
//         displayValue.innerText = value + 1;
//     }
// });
inc_btn.addEventListener("click", () => {
    const value = Number(displayValue.innerText);
    if(value>=10){
        alert("10+ values are not allowed")
    }
    else{
        displayValue.innerText = value + 1;
    }
});

// decrement button
dec_btn.addEventListener("click", () => {
    const value = Number(displayValue.innerText);
    if(value > 0){
        displayValue.innerText = value - 1;
        
    }
    else{
        alert("-ve values are not allowed")
    }
});
resetbtn.addEventListener("click", () => {
    const value = Number(displayValue.innerText);
    displayValue.innerText = 0;

});