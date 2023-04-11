function getDoubleCallback(arr,callback){
    const doubledArr = [];
    for (let i = 0; i < arr.length; i++) {
        doubledArr.push(callback(arr[i]))
    }
    return doubledArr;
//callback function defination
}
function double(num){
    return num*2;
}

let arr= [1,2,3,4]
console.log(getDoubleCallback(arr,double))