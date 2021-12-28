const jwt=require("jsonwebtoken");
const jwtkey="kabnsh";
exports.verify=(req,res,next)=>{
    if(req.cookies.token)
    {
        var token=req.cookies.token;
        jwt.verify(token,jwtkey);
        next();
    }
    else
    {
        res.redirect('/');
    }    
}
