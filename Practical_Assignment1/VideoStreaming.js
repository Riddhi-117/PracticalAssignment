const express=require ('express');
const fs=require('fs');
const app=express();

app.get("/",function(req,res){
    res.sendFile(__dirname+"/index1.html");
});
app.get("/video",function(req,res){
    const range =req.headers.range;
    if(!range)
    {
        res.status(400).send("Requires Range Header");
    }
    const videoPath="demo.mp4";
    const videoSize=fs.statSync(videoPath).size;

    //chunk
    var positions = range.replace(/bytes=/,"").split("-");
    var start = parseInt(positions[0]);
    var end = positions[1] ? parseInt(positions[1]) :videoSize - 1;
    var chunksize = (end - start) + 1;

    const headers={
        "Content-Range": "bytes " + start + "-" + end + "/" + videoSize,
        "Accept-Ranges": "bytes",
        "Content-Length": chunksize,
        "Content-Type": "video/mp4"
    };
    res.writeHead(206,headers);

    const videoStream=fs.createReadStream(videoPath,{start,end,videoSize})
    videoStream.pipe(res);
                       
})
app.listen(8000,function(){
    console.log("Server is started");
});