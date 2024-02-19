const EventEmitter=require('events');
const event=new EventEmitter();

event.on(`SaySomething`, ()=>{
    console.log(`my name is vansh`);
    console.log(`my name is kushina`);
    console.log(`my name is harmeet`);
})
event.emit('SaySomething');

event.on(`checkpage`, (sc,msg)=>{
    console.log(`status code is ${sc} and status page is ${msg}`);
})
event.emit('checkpage',200,"ok");

// event.on('SaySomething', () => { /* ... */ }): This line sets up an event listener for the event named 'SaySomething'. When the 'SaySomething' event is emitted, the callback function provided (() => { /* ... */ }) will be executed.

// console.log('my name is vansh');: This line logs the string 'my name is vansh' to the console when the 'SaySomething' event is emitted.

// console.log('my name is kushina');: This line logs the string 'my name is kushina' to the console when the 'SaySomething' event is emitted.

// console.log('my name is harmeet');: This line logs the string 'my name is harmeet' to the console when the 'SaySomething' event is emitted.

// event.emit('SaySomething');: This line emits (triggers) the 'SaySomething' event. As a result, the callback function defined with event.on('SaySomething', () => { /* ... */ }) will be executed, causing the three console.log() statements to run and output their respective messages to the console.