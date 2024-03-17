const express = require("express");

const app = express();

app.get("/", (req, res) => {
    res.send("Hello World!");
});

app.get("/about", (req, res) => {
    res.send(" From About page "+" My name is "+req.query.name+" My age is "+req.query.age);
});

app.get("/contact", (req, res) => {
    res.send("From Contact page ");
});

app.listen(3000, () => {
    console.log("Server is running at port 3000");
});

//not even need to use http module

// const myServer=http.createServer(app);


// myServer.listen(3000, () => {
//     console.log("Server is running at port 3000");
// });