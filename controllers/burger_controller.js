const express = require("express");
const burger = require("../models/burger.js");
const router = express.Router();

router.get("/", function(req, res){

    burger.selectAll(function(data){
        let burgerObj = {
            burgers: data
        };
        console.log(burgerObj);
        res.render("index", burgerObj);
    });
});

router.post("/api/burger", function(req, res){

    burger.insertOne(req.body.burgerName, function(data){
        res.json({id: data.insertId});
    });
});

router.put("/api/burger/:id", function(req, res){
    burger.updateOne(req.params.id, true, function(data){
        if(data.changedRows === 0) {
            return res.status(404).end();
        }
        return.status(200).end();
    });
});

module.exports = router;