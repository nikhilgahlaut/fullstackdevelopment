const express = require('express');

const app = express();

app.get('/',(req,res)=>{
    res.send(`use http://localhost:${port}/random`);
})
app.get('/random',(req,res)=>{
    const randomNum = Math.floor(Math.random()*10);
    res.json({random : randomNum })
})

const port = 3000;
app.listen(port,()=>{
    console.log(`server running at http://localhost:${port}/random`)
})