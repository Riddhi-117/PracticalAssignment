var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/student' );
var db = mongoose.connection;
if(db)
{
    console.log("Database connection establised");
}
db.on('error', console.error.bind(console, 'connection error:'));
module.exports=mongoose;