const express = require('express');

const app = express();

let port = 3000;

app.get('/',(req,res)=>{
    res.json({msg:'I am homepage'})

})
app.get('/about',(req,res)=>{
    res.json({msg:'I am about page'})

})
app.get('/contact',(req,res)=>{
    res.json({email:'support@pwskills.com'})

})

app.listen(port,()=>{
    console.log(`server running at ${port}`)
})

