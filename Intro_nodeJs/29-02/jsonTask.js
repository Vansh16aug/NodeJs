//1. convert to json
//2. save that json data in a file
//3. read that file
//4. again convert back to object
const fs=require("fs");

const bioData={
    name:"Vansh",
    age:19,
    channel:"VanshCoder"
};

const Data=JSON.stringify(bioData);

fs.writeFile("json1.json",Data,(err)=>{
    if(err){
        console.log(err);
    }
    console.log('Data written');
});

fs.readFile("json1.json","utf-8",(err,data)=>{
    if(err){
        console.log(err);
    }
    else{
        const objData=JSON.parse(data);
        console.log(data);
    }
});

