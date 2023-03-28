function firstSecondLast(array){
    const [ first,second,...rest] = array;
    const last = rest.pop()
    return [ first,second, last]
}

let array = [1,2,3,4,5];
const [first,second,last] = firstSecondLast(array);
console.log(first);
console.log(second);
console.log(last);