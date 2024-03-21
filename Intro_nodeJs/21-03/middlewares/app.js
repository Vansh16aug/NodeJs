async function hello(req,res,next){
    console.log("Hello from Middleware");
    next();
}

async function bye(req,res,next){
    console.log("Bye from Middleware");
    next();
}

module.exports = {
    hello,
    bye
};