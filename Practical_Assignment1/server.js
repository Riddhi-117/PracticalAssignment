var io=require('socket.io')(3000);
io.on('connection',(socket)=>{
    console.log('User connected');
    socket.emit('message','Hello, How may i help')
    socket.on('discconected',()=>{
        console.log('User Disconnected');
    })
});