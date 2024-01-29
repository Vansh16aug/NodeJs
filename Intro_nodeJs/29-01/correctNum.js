const prompt = require("prompt-sync")();
const n=10;
let a=0;
while(a!=n){

    a=prompt("Enter the value: ");
    if(a==n){
        console.log("Number is correct");
    }
    else{
        console.log("Number is wrong");
    }
}


// const prompt = require('prompt-sync')();
// // to do prompting in terminal prompt-sync is used.

// // Get user input
// const userInput = prompt("Enter something: ");

// // Use the input
// console.log("You entered:", userInput);
