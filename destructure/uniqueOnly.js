const array = [1,2,5,7,2,3,4,6,8,9,9];

function UniqueArrayset(array){
    let UniqueArray = new Set(array);
    return UniqueArray;
}

let result = UniqueArrayset(array);
console.log(result);




