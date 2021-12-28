const express = require('express')
const index = express()
const server = require('http').Server(index)
const io = require('socket.io')(server, {
    cors: {
        origin: '*'
    }
})


io.on('connection',(socket)=>{
    console.log("Connection on")
    socket.on('sendMessage',(data)=>{
        socket.emit('recieveMessage',data)
    })
})

server.listen(5000)