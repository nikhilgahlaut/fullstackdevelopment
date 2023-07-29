var fs = require("fs")
console.log("opening ...")
setTimeout(()=>{
    fs.open('input.txt', 'r+', function(err,fd){
        if(err){
            return console.error(err)
        }
        console.log('file opened sucessfully after 5 sec')
        // console.log(fd)
    })
},5000)
