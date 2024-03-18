const express = require('express');

const app = express();

app.get('/',(req,res)=>{
    res.end("Hello world")
});
app.use((req,res,next)=>{
    console.log(`Logged`);
    next();
})

app.listen(3000,()=>{
    console.log(`Server running at 3000`);
});