function swapvalues(x,y){
    [x,y] = [y,x];
    return [x,y];
}
let x = 10;
let y = 5;
[x,y]= swapvalues(x,y);
console.log(x)
console.log(y)
