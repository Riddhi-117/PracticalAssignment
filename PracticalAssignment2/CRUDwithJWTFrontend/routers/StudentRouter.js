const router=require("express").Router();
const students=require("../models/student");

router.get("/home",function(req, res){
    students.find()
    .then(studs => {
        res.render('list.ejs', { results: studs })
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving students."
        });
    });
});
router.get("/create",function(req,res){
    res.render("create");
});
router.post("/create",function(req,res){
   
    var s1 = new students({
        Sid: req.body.Sid ,
        Sname: req.body.Sname, 
        Gender:req.body.Gender, 
        City:req.body.City
    });
    s1.save()
    .then(data => {
     res.redirect("/students/home");
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating the Student."
        });
        });
});

router.get("/search/:Sid",function(req, res){
    students.findById(req.params.Sid)
    .then(stud => {
        if(!stud) {
            return res.status(404).send({
                message: "Student not found with id " + req.params.rno
            });            
        }
        res.render('Edit.ejs', { result: stud })
        
        //res.send(stud);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Student not found with id " + req.params.rno
            });                
        }
        return res.status(500).send({
            message: "Error retrieving Student with id " + req.params.rno
        });
    });
});

router.post("/update",function(req,res){
    students.findByIdAndUpdate(req.body._id, {
        Sid:req.body.Sid,
        Sname: req.body.Sname, 
        Gender: req.body.Gender, 
        City: req.body.City 
    }, {new: true})
    .then(s1 => {
        if(!s1) {
            return res.status(404).send({
                message: "Student not found with id " + req.body.id
            });
        }
        res.redirect("/students/home");
        //res.send(s1);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Student not found with id " + req.body.id
            });                
        }
        return res.status(500).send({
            message: "Error updating Student with id " + req.params.id
        });
    });
});

router.get( "/delete/:Sid",function(req, res) {
    students.findByIdAndRemove(req.params.Sid)
    .then(stud => {
        if(!stud) {
            return res.status(404).send({
                message: "student not found with id " + req.params.Sid
            });
        }
        res.redirect("/students/home");
        //res.send({message: "student deleted successfully!"});
    }).catch(err => {
        if(err.kind === 'ObjectId' || err.name === 'NotFound') {
            return res.status(404).send({
                message: "student not found with id " + req.params.Sid
            });                
        }
        return res.status(500).send({
            message: "Could not delete student with id " + req.params.Sid
        });
    });
});
module.exports=router;