var http=require('http');

http.createServer(function(req,res){
    res.write("WelcomeBack");
    res.end();
}).listen(3000)