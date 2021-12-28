var express=require('express');
var multer=require('multer')
var path=require('path');
var app=express();
app.set("view engine","ejs");
var option=multer.diskStorage({
    destination:function(req,file,cb){
        if(!(file.mimetype =='image/jpeg')||!(file.mimetype =='image/jpg'))
        {
          return cb('Invalid File format');

        }
        else
        {
          cb(null,'./Upload');

        }
    },
    filename:function(req,file,cb){
        cb(null,(Math.random().toString(30))
        .slice(5,10)+Date.now()
        +path.extname(file.originalname));
    }
});

var upload= multer({ storage: option });
app.get('/',function(req,res){
  res.render("FileUpload");
});


app.post('/single_file_upload', upload.single("singleFile"),function (req, res, next) {
  if(!req.file)
  {
    res.send("please select file");
  }

    res.write("file uploaded");
    res.end();
  
})
app.post('/multiple_file_upload', upload.array("multipleFile",4),function (req, res, next) {
  res.write("file uploaded");
  res.end();
})
app.use(function (err, req, res, next) {
  
  if (err instanceof multer.MulterError) 
   {
     console.log("ERRRR");
     res.status(500).send("file upload  err "+err.message);
   }
   else  
     next(err);
 });


app.listen(8000,function(re,res){
  console.log("server started on port 8000");
  
});