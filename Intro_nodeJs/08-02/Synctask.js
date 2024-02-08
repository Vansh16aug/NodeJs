const fs=require("fs");

// fs.mkdirSync("./Vansh");

// fs.writeFileSync('./Vansh/vansh.txt',"Hello jiiii");

// fs.appendFileSync('./Vansh/vansh.txt'," I am vansh creating this file");

// fs.renameSync('./Vansh/vansh.txt','./Vansh/Lpu.txt');

// fs.unlinkSync('./Vansh/Lpu.txt');

// fs.rmdirSync('./Vansh');


const data=fs.readFileSync("yoyo.txt","utf-8",(err,data)=>{
    console.log(data);
    console.log(err);
    console.log("After the data");
})
