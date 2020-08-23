const express = require("express");
const burger = require("../models/burger.js");
const router = express.Router();

// GET all data from table and render it to index.handlebars
router.get("/", function (req, res) {

    burger.selectAll(function (data) {
        let burgerObj = {
            burgers: data
        };
        console.log(burgerObj);
        res.render("index", burgerObj);
    });
});

// POST user input/new burger
router.post("/api/burger", function (req, res) {

    burger.insertOne(req.body.burgerName, function (data) {
        res.redirect("/");
    });
});

// PUT (update) devoured boolean for the corresponding ID
router.put("/api/burger/:id", function (req, res) {
    let condition = req.params.id;
    console.log(condition);
    burger.updateOne(
        {
            devoured: req.body.devoured
        },
        condition, function (result) {
            if (result.changeRows === 0) {
                return res.status(404).end();
            } else {
                res.status(200).end();
            }
        });
    }); 

// DELETE selected burger by ID
router.delete("/api/burgers/:id", function(req, res){
    let condition = "id = " + req.params.id;
    burger.deleteOne(condition, function(result){
        if(result.affectedRows === 0){
            return res.status(404).end();
        }else {
            res.status(200).end();
        }
    });
});

module.exports = router;