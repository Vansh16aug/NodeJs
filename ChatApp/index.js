const express = require("express");
const app = express();
const path = require('path');
const http = require('http');
const server=http.createServer(app);
const {Server}=require('socket.io');
const io = new Server(server);


app.use(express.static(path.resolve("./public")));
app.get('/',(req,res)=>{
    return res.sendFile('/public/index.html')
})


//socket.io
io.on("connection",(socket)=>{
    socket.on('user-message',(message) =>{
        io.emit('message',message);
    })
})


server.listen(3000,()=>{
    console.log(`server started at 3000`);
})