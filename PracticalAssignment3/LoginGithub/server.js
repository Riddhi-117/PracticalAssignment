require('dotenv').config();
const express=require('express');
const app=express();
const githubStrategy=require('passport-github').Strategy;
const passport=require('passport');
const session=require('express-session');

app.set("view engine","ejs");
app.set("views","./views");
app.use(
    session({
        secret:process.env.SESSION_SECRET, 
        saveUninitialized:false,
        cookie:{
            httpOnly:true,
            secure:false,
            maxAge:24*60*60*1000,
        }
    })
);
app.use(passport.initialize());
app.use(passport.session());
passport.serializeUser((user,cb)=>{cb(null,user.id)});
passport.deserializeUser((id,cb)=>{cb(null,id)});

passport.use(
    new githubStrategy(
        {
            clientID:process.env.GITHUB_CLIENT_ID,
            clientSecret:process.env.GITHUB_CLIENT_SECRET,
            callbackURL:'http://localhost:3000/auth/github/callback',
        },
        function(accessToken,refreshToken,profile,cb){
            console.log(profile);
            cb(null,profile);
        }
    )
);
const isAuth=(req,res,next)=>{
    if(req.user){
        next();
    }
    else
    {
        res.redirect('login');
    }
}
app.get('/',isAuth,(req,res)=>{
    console.log(req.user);
    res.render('dashboard.ejs')
});
app.get('/login',(req,res)=>{
    if(req.user)
    {
        return res.redirect('/');
    }
    res.render('login.ejs')
});
app.get('/auth/github',passport.authenticate('github'));

app.get('/auth/github/callback',
passport.authenticate('github',{failureRedirect:'/login'}),
function(req,res){
    //if success
    res.redirect('/');
}
);

app.get('/logout',(req,res)=>{
    req.logOut();
    res.redirect('/login');
});

app.listen(3000,()=>{
    console.log('Server is running on port 3000');
});