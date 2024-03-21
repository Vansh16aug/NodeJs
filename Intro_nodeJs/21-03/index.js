const express = require('express');
const app = express();

const {hello ,bye}= require('./middlewares/app');

app.use(hello);
app.use(bye);

app.get('/',(req,res)=>{
    res.send("Hello from Express");
});

app.listen(3000,(err)=>{
    console.log("Port connected");
});