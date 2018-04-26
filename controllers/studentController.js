var db = require("./../models");

module.exports = function(app) {
    
    // READ
    app.get("/", function(req, res){
        db.Student.findAll({}).then(function(data){
            // res.json(data);
            res.render("index", {students: data});
        });
    });

    // READ
    app.get("/student/:id", function(req, res){
        db.Student.findOne({
            where: {
                id: req.params.id
            }
        }).then(function(data){
            console.log(data.name);
            res.render("student", {student: data});
        });
    });
    
    // CREATE 
    app.post("/api/students", function(req, res){
        db.Student.create({
            name: req.body.name,
            phone: req.body.phone,
            address: req.body.address,
            type: req.body.type,
            quantity_in_lbs: req.body.quantity_in_lbs,
            pickupStart: req.body.pickupStart,
            pickupEnd: req.body.pickupEnd
        }).then(function(data){
            res.json(data);
        });
    });
    
    // UPDATE
    app.put("/api/student/:id", function(req, res){
        db.Student.update({
            name: req.body.name,
            phone: req.body.phone,
            address: req.body.address,
            type: req.body.type,
            quantity_in_lbs: req.body.quantity_in_lbs,
            pickupStart: req.body.pickupStart,
            pickupEnd: req.body.pickupEnd
        }, {
            where: {
                id: req.params.id
            }
        }).then(function(data){
            res.json(data);
        });
    });

    // DELETE
    app.delete("/api/student/:id", function(req, res){
        db.Student.destroy({
            where: {
                id: req.params.id
            }
        }).then(function(data){
            res.json(data);
        });
    });
}