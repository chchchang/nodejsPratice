var events = require('events');
var em = new events.EventEmitter();

em.on("FirstEvent",function(data){
    console.log("FirstEvnet"+data);
})

em.addListener("SecondEvent",function(data){
    console.log("SecondEvent" + data);
})

em.emit('FirstEvent','觸發事件囉');
em.emit('SecondEvent','第二個');