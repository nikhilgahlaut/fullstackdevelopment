const inventory = {item1:30,item2:20};//price in dollar

const exchangeRate = 80;
console.log(inventory)
//creating a function that change dollar to INR
const converted = Object.entries(inventory).map(([key, value]) =>{
    const convertedPrice = value * exchangeRate;
    return[key, convertedPrice];
});

const convertedItems = Object.fromEntries(converted);
console.log(convertedItems);

const nikhil = Object.entries(inventory);
console.log(nikhil);
const nikhil1 = Object.fromEntries(nikhil);
console.log(nikhil1);
