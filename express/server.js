const http = require('http');
const port = 3000;

const menProducts = [
    { id: 1, name: 'Men Product 1' },
    { id: 2, name: 'Men Product 2' },
    { id: 3, name: 'Men Product 3' },
    // Add more products as needed
  ];
  
  const womenProducts = [
    { id: 1, name: 'Women Product 1' },
    { id: 2, name: 'Women Product 2' },
    { id: 3, name: 'Women Product 3' },
    // Add more products as needed
  ];


const server = http.createServer((req,res)=>
{
    if(req.url == '/'){
        res.statusCode = 200;
        res.setHeader('Content-Type','text/plain');
        res.end('Welcome to Men & Women dummy data');
    }
    else if(req.url == '/men'){
        res.statusCode = 200;
        res.setHeader('Content-Type','text/plain');
        res.end(JSON.stringify(menProducts));
    }
    else if(req.url == '/women'){
        res.statusCode = 200;
        res.setHeader('Content-Type','text/plain');
        res.end(JSON.stringify(womenProducts));
    }
    else{
        res.statusCode = 404;
        res.setHeader('Content-Type','text/plain');
        res.end('not found');
    }
});

server.listen(port,()=>{
    console.log(`Server up and listening on port ${port}`)
});

