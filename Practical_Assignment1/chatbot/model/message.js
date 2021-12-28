const mongoose= require('mongoose')

const messageSchema=new mongoose.Schema({
    _id:mongoose.Schema.Types.ObjectId,
    message:String,
    reply:String
});

module.exports = mongoose.model('message',messageSchema);