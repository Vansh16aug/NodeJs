// const http=require("http");
// function reqListener(req,res){
//     console.log('Inside Server!!');
//     res.end("Yes,its working");
// }
// const server=http.createServer(reqListener);
// server.listen(3000);


const http = require("http");
const server = http.createServer((req, res) => {
    if(req.url == '/'){
        res.end("This is home page . but its not only thing you can do here hihihifhvhfhchchhchrttttfh");
    }
    else if(req.url == '/Contact'){
        res.end("This is contact page");
    }
    else if(req.url == '/admin'){
        res.end("This is admin page");
    }
    else{
        res.writeHead(404, {"Content-type": "text/html"});
        res.end("<h1>404 Page not found </h1>");
    }
    console.log('Refreshed!!');
});
server.listen(3000);
