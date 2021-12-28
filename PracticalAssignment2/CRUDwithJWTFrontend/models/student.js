const mongoose=require("../config/config")
//SCHEMA
var StudentSchema = mongoose.Schema({
    Sid:Number,
    Sname: String,
    Gender: String,
    City: String
  }); 
module.exports = mongoose.model('student', StudentSchema, "students"); //MODEL