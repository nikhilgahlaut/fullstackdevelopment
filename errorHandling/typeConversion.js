function convertToNumber(checkNum){
    try{
        const num = Number(checkNum)
        if(isNaN(num)){
            return `Invalid number`;
        }
        else{
            return num;
        }
    }
    catch(error){
        return error.message;
    }

};

console.log(convertToNumber(`000`))
console.log(convertToNumber(`abc`))