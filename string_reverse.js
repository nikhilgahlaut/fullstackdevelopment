const str = `nik`;
setTimeout(() =>{
    let x = str.length;
    var val = '';
    for (let index = x-1; index >= 0; index--){
        val = val+ str[index];
    }
    console.log(val);
}, 2000);