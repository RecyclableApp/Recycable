var db = require("./../models");

module.exports = function(app) {
    
    // READ
    app.get("/addUser", function(req, res){
        db.User.findAll({}).then(function(data){
            // res.json(data);
            res.render("addUser", {users: data});
        });
    });

    // READ
    app.get("/user/:id", function(req, res){
        db.User.findOne({
            where: {
                id: req.params.id
            }
        }).then(function(data){
            console.log(data.name);
            res.render("user", {user: data});
        });
    });
    
    // CREATE 
    app.post("/api/users", function(req, res){
        db.User.create({
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
    app.put("/api/user/:id", function(req, res){
        db.User.update({
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
    app.delete("/api/user/:id", function(req, res){
        db.User.destroy({
            where: {
                id: req.params.id
            }
        }).then(function(data){
            res.json(data);
        });
    });
}