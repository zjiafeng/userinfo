const events = require('events');
// console.log(events)

var EventEmitter =new events.EventEmitter();

// 广播和接受广播
EventEmitter.on('to_parents',(data)=>{
    console.log(data)
})

EventEmitter.on('to_parent',(data)=>{
    console.log(data);
    EventEmitter.emit('to_parents','给to_parents发送的数据');
})

setTimeout(()=>{
    console.log('开始广播');
    EventEmitter.emit('to_parent','给to_parent发送的数据');
},2000)
