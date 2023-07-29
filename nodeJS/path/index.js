const path = require('path');
let result = path.basename('array.js', '.js')
console.log(result);
let pathObj = path.parse('array.js');

console.log(pathObj);

const http = require('http');
const server = http.createServer((req,res) =>{
    if(req.url === '/'){
        res.write('<h1>Hello,node.js !</h1>');
    }
    res.end();
})
const port = 5001;
server.listen(port);
console.log(`The HTTP Server is running at port ${port}`)
console.log('Sep >',path.sep)