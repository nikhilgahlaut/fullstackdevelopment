const express = require('express');
const app = express();



let counter = 0;

// app.use(express.json());

app.get('/',(req,res) =>{
    res.json({counter: counter})
})

app.get('/increment',(req,res) =>{
    counter++;
    res.json({counter: counter})
})

app.get('/decrement',(req,res) =>{
    counter--;
    res.json({counter: counter})
})

const port = 3001;
app.listen(port,() =>{
    console.log(`Server is running on http://localhost:${port}`)
})