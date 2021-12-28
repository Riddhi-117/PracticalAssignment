const express=require('express');
const app=express();
const http=require('http').createServer(app);
const msgs=require('./model/message.js');
const PORT=8000;
require('./config/config.js');



// Connecting to the database


http.listen(PORT,()=>{
    console.log("Listening on port "+PORT);
})
app.use(express.static(__dirname+'/public'))
app.get('/',(req,res)=>{
    res.sendFile(__dirname+'/index.html')
});

//setting up socket

const io=require('socket.io')(http);

io.on('connection',(socket)=>{
    socket.on('message',(msg)=>{
       // console.log(msg)
    //    socket.broadcast.emit('message',msg)
    var message=msg.message.toLowerCase();
   // msgs.findOne({message:message}).then(data=>{
    socket.emit('message',message.toString())
    })
   // })
})
