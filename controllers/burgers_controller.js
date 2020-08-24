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
        res.json({ id: data.insertId });
    });
});

// PUT (update) devoured boolean for the corresponding ID
router.put("/api/burger/:id", function (req, res) {
    burger.updateOne(req.params.id, true, function (data) {
        if (data.changedRows === 0) {
            return res.status(404).end();
        }

        res.status(200).end();
    });
});

// DELETE selected burger by ID
router.delete("/api/burger/:id", function (req, res) {
    let condition = "id = " + req.params.id;
    burger.deleteOne(condition, function (result) {
        if (result.affectedRows === 0) {
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
});

module.exports = router;