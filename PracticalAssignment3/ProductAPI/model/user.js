const mongo = require("mongoose");
const userModel = new mongo.Schema({
    email: {type : String},
    password : {type : Number}
})

module.exports = mongo.model('users', userModel);