function manipulateString(str){
    let result = str.toUpperCase();
//callback function
    function logString(){
        console.log(`The manipulated string is : ${result}`)
    }
    return logString()
}


let str = "hello, world!!";
console.log(manipulateString(str))