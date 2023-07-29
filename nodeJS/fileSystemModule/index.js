var fs = require("fs")
fs.readFile('input.txt',function(err,data){
    if(err){
        return console.error(err)
    }
    console.log("Async Read: "+ data.toString());
});
// syncronous reading
var data = fs.readFileSync("input.txt")
console.log("Sync reading : "+ data.toString())
