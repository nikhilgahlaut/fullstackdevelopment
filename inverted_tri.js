function inverted(num){
    for (let i = 0; i < num; i++) {
        let str = "";
        for (let j = 0; j < num-i; j++) {
            str = str + "*";          
        }
        console.log(str);     
    }
    console.log();
}
let num = 6;
inverted(num);
