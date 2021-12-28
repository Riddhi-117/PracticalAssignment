const mongoose=require("../config/config")

//SCHEMA
var UserSchema = mongoose.Schema({
   email:String,
   password:String
  }); 
module.exports = mongoose.model('user', UserSchema, "users"); //MODEL