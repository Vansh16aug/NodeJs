// In JavaScript, this is a special keyword that’s automatically defined in every function’s scope, and it refers to the context in which the function was called.


// 1. In a regular function
function myFunction() {
  "use strict";
  console.log(this);
}
myFunction(); // Outputs: undefined


// 2. In a method 
let obj = {
  name: 'John',
  sayHello: function() {
    console.log(`Hello, ${this.name}!`);
  }
};
obj.sayHello();  // Outputs: Hello, John!

