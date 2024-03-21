const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const fs = require('fs');

app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/' + 'add.html');
});

app.post('/add', (req, res) => {
    result = parseInt(req.body.num1) + parseInt(req.body.num2);
    console.log("The result is: " + result);
    res.json(result);
});

app.listen(3000,(err)=>{
    console.log("Port connected");
})