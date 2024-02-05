const os = require("os");
console.log('OS Type:', os.type());

let totalMem = os.totalmem()/1024/1024; 
console.log(`Total memory: ${totalMem} MB`);

let freeMem = os.freemem()/1024/1024; 
console.log(`Free memory: ${freeMem} MB`);

let hostName=os.hostname();
console.log(`HostName is ${hostName}`);

let pLtfrm=os.platform();
console.log(`Platform is ${pLtfrm}`);

let Arch=os.arch();
console.log(`Architecture is ${Arch}`);

console.log(os.EOL);
console.log(os.availableParallelism());
// console.log(os.constants);
// console.log(os.cpus());
console.log(os.homedir());
console.log(os.loadavg());
console.log(os.machine());
console.log(os.networkInterfaces());