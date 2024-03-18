const express = require('express');

const app = express();

app.get('/www.linkedin.com/in/vansh-kumar16aug/', (req, res) => {
    res.redirect('https://www.linkedin.com/in/vansh-kumar16aug/');
});

app.listen(3000,()=>{
    console.log(`Server running at 3000`);
});