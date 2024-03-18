const express = require("express");
const {connectMongoDb} = require('./connection');
const {logReqRes} = require('./middlewares')
const userRouter = require('./routes/user');

const app = express();
const PORT = 3000;


//Connection
connectMongoDb("mongodb://localhost:27017/learing-express").then(()=>{console.log("Mongodb Succefull");})

//Middlewares
app.use(express.urlencoded({extended:false}));

app.use(logReqRes('log.txt'));


//Routes
app.use('/api/users',userRouter);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});