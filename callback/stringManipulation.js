function manipulateString(str,callback){
    console.log(`the manipulated string is : ${callback(str)}`)
}
function logString(str){
    let result = str.toUpperCase()
    return result;
}

let str = "hello, world!!";
manipulateString(str,logString)