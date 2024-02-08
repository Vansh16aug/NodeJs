// Synchronous

const fs=require("fs");
fs.writeFileSync('read.txt',"Kushina is best"); // creating and writing
fs.writeFileSync('read.txt',"God is Great");  //overwriting
fs.appendFileSync('read.txt'," Ik Onkar");  //appending
const buf_data=fs.readFileSync('read.txt');
bf=buf_data.toString();
console.log(bf);    //reading

fs.renameSync("read.txt","yoyo.txt");   //renaming