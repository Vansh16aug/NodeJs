//1.take input of name age and gender
//2.write to json file
//3.read from json file
//4. print on the server

const http=require("http");
const fs=require("fs");
const prompt=require("prompt-sync")();


const bioData={
    name:"",
    age:0,
    gender:""
};

 bioData.name=prompt("Enter your name: ");
 bioData.age=prompt("Enter your age: ");
 bioData.gender=prompt("Enter your gender: ");


const jsonData=JSON.stringify(bioData);

http.createServer((req,res)=>{
    fs.writeFile("json2.json",jsonData,(err)=>{
    if(err){
        console.log(err);
    }
    console.log('Data written');
});

fs.readFile("json2.json","utf-8",(err,data)=>{
    if(err){
        console.log(err);
    }
    else{
        const objData=JSON.parse(data);
        // console.log(objData);
        res.end(JSON.stringify(objData));
        res.end(data);
    }
});
}).listen(3000);

