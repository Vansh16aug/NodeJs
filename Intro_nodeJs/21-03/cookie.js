const express = require('express');
const cookieParser = require('cookie-parser');

const app = express();
app.use(cookieParser());

app.get('/set', (req, res) => {
    res.cookie('username', 'Vansh').send('username has the value of Vansh');
    console.log("cookies", req.cookies);
    
    // Clear the cookie after 10 seconds
    setTimeout(() => {
        res.clearCookie('username').send('username Cookie Cleared after 10 seconds');
        console.log("cookies", req.cookies);
    }, 10000); // 10000 milliseconds = 10 seconds
});
app.get('/clear', (req, res) => {
    
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
