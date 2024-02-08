const fs=require("fs");

// fs.mkdir("./Vansh",(err)=>{
//     if(err){
//         console.log(err);
//         return;
//     }
//     console.log("Folder created successfully");
// });

// fs.writeFile('./Vansh/vansh.txt',"Hello jiiii",(err)=>{
//     if(err){
//         console.log(err);
//         return;
//     }
//     console.log("File created successfully");
// });

// fs.appendFile('./Vansh/vansh.txt'," I am vansh creating this file",(err)=>{
//     if(err){
//         console.log(err);
//         return;
//     }
//     console.log("File Appended successfully");
// });

// fs.rename('./Vansh/vansh.txt','./Vansh/Lpu.txt',(err)=>{
//     if(err){
//         console.log(err);
//         return;
//     }
//     console.log("File Renamed successfully");
// });

// fs.unlink('./Vansh/Lpu.txt',(err)=>{
//     if(err){
//         console.log(err);
//         return;
//     }
//     console.log("File deleted successfully");
// });

// fs.rmdir('./Vansh',(err)=>{
//     if(err){
//         console.log(err);
//         return;
//     }
//     console.log("Folder deleted successfully");
// });


const data=fs.readFile("yoyo.txt","utf-8",(err,data)=>{
    console.log(data);
    console.log(err);
    console.log("After the data");
})
