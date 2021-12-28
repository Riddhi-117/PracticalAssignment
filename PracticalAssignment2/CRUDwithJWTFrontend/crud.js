//includes
const express=require("express");
const app=express();
const UserRouter=require("./routers/UserRouter");
const StudentRouter=require("./routers/StudentRouter");
const cookieparser=require("cookie-parser")
const {verify}=require("./library/jwt");
const path = require('path');

//app setting
app.set("view engine","ejs");
app.set("views","./views");
app.use(express.static(path.join(__dirname, 'public')));
//middlewares
app.use(cookieparser())
app.use(express.urlencoded({ extended: true }));

//routers
app.use("/students",verify,StudentRouter);
app.use("/",UserRouter);
//server 
app.listen(8000,function(req,res){console.log("server started")});