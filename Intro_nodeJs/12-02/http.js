// const http=require("http");
// function reqListener(req,res){
//     console.log('Inside Server!!');
//     res.end("Yes,its working");
// }
// const server=http.createServer(reqListener);
// server.listen(3000);


const http=require("http");
const server=http.createServer((req,res)=>{
    console.log('Refreshed!!');
    if(req.url==='/Contact'){
        res.end("This is contact page");
    }
    else if(req.url==='/admin'){
        res.end("This is admin page");
    }
    else{
        res.end("This is home page");
    }
});
server.listen(3000);