const url = `https://www.w3schools.com`;
let RegEx= /^(http|https):\/\/[a-zA-Z0-9._-]+\.[a-zA-Z]+$/.test(url);
// console.log(RegEx)
// (/^(http|https):\/\/)
if (RegEx == 1) {
    console.log(`Validation succesfull!!`)  
}
else{
    console.log(`Validation failed!!`)
}