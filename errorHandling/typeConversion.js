function convertToNumber(checkNum){
    try{
        const num = Number(checkNum)
        if(isNaN(num)){
            console.log(`Invalid number`);
        }
        else{
            console.log(num);
        }
    }
    catch(error){
        console.log(`handled the error`);
        console.log(error.message);
    }

};

convertToNumber(`000`)
convertToNumber(`abc`)