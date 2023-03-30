const image = document.getElementById("image")

let x= 0;
let y =0;
document.addEventListener('keydown', (event)=>{
    switch(event.keyCode){
        case 37: //left arrow
        x = x-10;
        break;
        case 38: //up arrow
        y = y-10;
        break;
        case 39: //right arrow
        x = x+10;
        break;
        case 40: //down arrow
        y = y+10;
        break;
    }

    image.style.transform = `translate(${x}px, ${y}px)`
});