const express = require('express');

const app = express();

app.get('/hello',(req,res)=>{
    res.end("Hello world")
});

app.listen(3000,()=>{
    console.log(`Server running at 3000`);
});