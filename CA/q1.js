const EventEmitter=require("events");
const event=new EventEmitter();

event.on('Basic',()=>{
    console.log('yoyoyoyoyo');
});
event.emit('Basic');