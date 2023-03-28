function maxMinValue(array){
    const max = Math.max(...array);
    const min = Math.min(...array);
    return {max,min};
}

const array = [5,2,7,1,9];
const result = maxMinValue(array);
console.log(result);
