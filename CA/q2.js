const http=require("http");
http.createServer((req,res)=>{
    if(req.url=='/'){
        res.end("Inside Homepage");
    }
    else if(req.url=='/Contact'){
        res.end("Inside Contact");
    }
    else{
        res.end("404");
    }
}).listen(3000);