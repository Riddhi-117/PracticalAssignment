const router=require("express").Router();
const users=require("../models/user");
const jwt=require("jsonwebtoken");
const jwtkey="kabnsh";
const expsec=3000;
router.get("/",function(req,res){
    res.render("login");
});
router.post("/login",async (req,res)=>{
        email=req.body.email;    
        password=req.body.password;
        if(email==""||password=="")
        {
            res.send("Invalid Credentials");
            process.exit();
        }
        const user=users.findOne({email:req.body.email});
        if(!user)
        {
            res.send("Invalid user");
            process.exit();
        }
        else
        {
            const token=jwt.sign({email:email},jwtkey,{algorithm:"HS256",expiresIn:expsec});
            console.log(token);
            res.cookie("token",token,{maxAge:expsec*1000})
            res.redirect('/students/home');
        }
       
    });
    module.exports=router;