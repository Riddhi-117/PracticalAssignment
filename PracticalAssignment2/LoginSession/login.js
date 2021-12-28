var express=require('express');
var path=require('path');
var app=express();
var session=require('express-session');
var SessionFileStore=require('session-file-store')(session);
var bodyParser=require('body-parser');

app.set("view engine","ejs");
app.use(bodyParser.urlencoded({extended : true}));

app.use(session({
	secret: 'abc123',
	resave: false,
	saveUninitialized: false,
	store: new SessionFileStore({ path: './session-data'})
}));

app.get('/',function(req,res){
    res.render("login");
});
app.post('/login',function(req,res){
    var email=req.body.email;
    var password=req.body.password;
    if(email=="riddhi@gmail.com"&&password=="riddhi12")
    {				
        req.session.loggedin = true;
        req.session.username = "riddhi";
        res.redirect('/home');
    }
    else
    {
        res.send("Enter valid username and password");
    }
})

app.get('/home',function(req,res){
    if(req.session.loggedin = true)
    {
        res.send("Welcome "+
        req.session.username+
        "<br>"+
        "<br><a href='./logout'>Logout</a>" )				
    }
    else
    {
        res.redirect('/login');
    }
})

app.get('/logout',function(req,res){
    if (req.session.loggedin) 
    {
        if (req.session) {
            // delete session object
            req.session.destroy(function(err) {
              if(err)
              {
                return next(err);
              } 
              else
              {
                res.redirect('/');
              }
            });
            
          }
    } 
    else 
    {
        res.redirect('/login.html')
    }
    
});


app.listen(8000,(req,res)=>console.log("Server started"));