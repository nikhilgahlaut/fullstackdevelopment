const str = `nikhil`;
setTimeout(() =>{
    let val = ``;
    let x = str.length;
    for (let index = x-1; index >= 0; index--){
        val += str[index];
    }
    console.log(val);
}, 2000);
