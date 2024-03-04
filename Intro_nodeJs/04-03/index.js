const fs=require("fs");
const http=require("http");

http.createServer((req,res)=>{
    fs.readFile("input.txt","utf-8",(err,data)=>{
        if(err){
            console.log(err);
        }
        res.end(data);
        console.log("Data Given to port 3000");
    });

}).listen(3000);
