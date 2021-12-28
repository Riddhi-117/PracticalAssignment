
const messages=document.getElementById('messages');
var socket=io('http://localhost:8000');
socket.on('message',data=>{
    console.log(data)
    appendMessage(data)
})
function appendMessage(message)
{
    const html=`<div>${message}</div>`
    messages.innerHTML += html;
}