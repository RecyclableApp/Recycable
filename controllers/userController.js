var db = require("./../models");

module.exports = function (app) {

    // READ: this just renders the homepage
    app.get("/", function (req, res) {
        res.render("index");
    });

    // READ: this renders the pickup request page for the user (what kinds of recyclables they want picked up, address, time, etc...)
    // We should definitely RENAME this LATER once everything is up and running, suggest naming it /pickupRequest
    app.get("/addUser", function (req, res) {
        db.User.findAll({}).then(function (data) {
            // res.json(data);
            res.render("addUser", { users: data });
        });
    });

    // READ: This renders a "create new account" page for brand new users to create login email and password (THIS IS NEW, I JUST ADDED IT!)
    app.get("/newUser", function (req, res) {
        res.render("newUser");
    });

    // READ: This renders a login page that later checks to make sure their email matches the password and later gives them permission to see only their own private information like address and phone number (THIS IS NEW, I JUST ADDED IT!)
    app.get("/login", function (req, res) {
        res.render("login");
    });

    // READ: This gets all the pickup request info for the user by id 
    app.get("/user/:id", function (req, res) {
        db.User.findOne({
            where: {
                id: req.params.id
            }
        }).then(function (data) {
            console.log(data.name);
            res.render("user", { user: data });
        });
    });

    // CREATE: This saves the information from the "create new account" page above for brand new users (THIS IS NEW, I JUST ADDED IT!)
    app.post("/api/newUser", function (req, res) {
        db.newUser.create({
            name: req.body.name,
            email: req.body.email,
            address: req.body.address,
            password: req.body.password
        }).then(function (data) {
            res.json(data);
        });
    });

    // CREATE: This saves the information from the pickup request page (name, address, type recylcable, time, etc...)
    // Suggest we RENAME this LATER once everything is up and running, suggested name: /api/pickupRequests
    app.post("/api/users", function (req, res) {
        db.User.create({
            name: req.body.name,
            phone: req.body.phone,
            address: req.body.address,
            type: req.body.type,
            quantity_in_lbs: req.body.quantity_in_lbs,
            pickupStart: req.body.pickupStart,
            pickupEnd: req.body.pickupEnd
        }).then(function (data) {
            res.json(data);
        });
    });

    // UPDATE: This allows users to edit their pickup request
    // Problem right now: radios aren't showing up with new formatting
    app.put("/api/user/:id", function (req, res) {
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
            }).then(function (data) {
                res.json(data);
            });
    });

    // DELETE: This allows the user to delete their request to confirm our drivers have been by to pick up their recyclables
    // Sugget renaming the button to: "Pickup complete" or something along those lines
    app.delete("/api/user/:id", function (req, res) {
        db.User.destroy({
            where: {
                id: req.params.id
            }
        }).then(function (data) {
            res.json(data);
        });
    });

    // VERIFY: This checks to  make sure user login email matches user password (THIS IS NEW, I JUST ADDED IT!)
    // Travis said we use post when checking passwords instead of get bc of sensitive info
    app.post("/api/login", function (req, res) {
        // get the user from database by their email 
        db.newUser.findOne({
            where: {
                email: req.body.email
            }
        }).then(function (data) {
            // check if the user password user has typed in login page matches password from database
            if (req.body.password === data.password){
                res.json(data);
                // let the user continue to the next page (need to add this step below this comment)
            }
            else {
                // some kind of "wrong password" message
                res.status(400).send("Wrong Password");
            }

        });


    });

}