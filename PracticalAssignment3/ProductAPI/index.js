const express = require("express");
const app = express();
const userModel = require('./model/user');
const productmodel = require('./model/product');
const mongo = require('mongoose');
const cors = require('cors');

mongo.connect('mongodb://localhost:27017/test',{
    useNewUrlParser : true
})
.then(()=>{
    console.log("database is connected");
})

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cors());

app.listen(8000,function(){
    console.log("Port : 8000");
})

app.post('/login',function(req,res){

    userModel.find({email : req.body.email , password : req.body.password},function(err,doc){
        if(err)
            console.log(err);
        else    
            res.send(doc);
    })
});

app.get('/getProducts',function(req,res){
    productmodel.find({},function(err,doc){
        if(err)
            console.log(err);
        else    
            res.send(doc);
    })
});

app.post('/addProduct',function(req,res){

    var name = req.body.name;
    var price = req.body.price;

    productmodel.insertMany({name : name, price : price},function(err,doc){
        if(err)
            console.log(err);
        else
            res.send(doc);
    })
})