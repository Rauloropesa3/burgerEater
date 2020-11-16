const express = require('express');

const router = express.Router();

//Model import
const burger = require("../models/burger,js");

// Route
router.get("/", function(req,res){
    burger.selectAll(funtion(data){
        const burgr = {
        burgers:Data 
    };
    console.log(burgr);
    res.render("index", burgr);
  });
});

//Route
router.post("/api/burgers", function(req res){
    console.log(req.body)
    burger.insertOne(["burger_name"], [req.body.name], function (result){
        res.json({id: result.insertId});
    });
});

// Route
router.put("/api/burgers/:id", function(req,, res){
    var condition = "id = " + req.params.id;
    console.log("condition", condition);

    const burgrObject = {
        devoured: req.body.devoured
    }
    burger.updateOne(burgrObject, condition, function(result){
        console.log(result)
        if(result.changeRows == 0){
            return res.status(404).end();
        }else{
            res.status(200).end();
        }
    });
});
module.exports =router
