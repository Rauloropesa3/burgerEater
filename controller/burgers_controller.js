let express = require("express");

let router = express.Router();

//Model import
let burger = require("../models/burger.js");

// Route
router.get("/", function(req, res){
    burger.all(function(data){
        let hbsObject = {
        burgers: data, 
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

//Route
router.post("/api/burgers", function(req, res){
    burger.create(
        ["burger_name", "devoured"],
        [req.body.burger_name, req.body.devoured], 
        function (result){
        res.json({id: result.insertId});
        }
    );
});

// Route
router.put("/api/burgers/:id", function(req, res){
    let condition = "id = " + req.params.id;
    console.log("condition", condition);

    burger.update(
        {
        devoured: req.body.devoured,
        },
    condition,
    function (result){
        if (result.changeRows == 0) {
            return res.status(404).end();
        }else{
            res.status(200).end();
        }
      }
    );
    router.delete("/api/burgers/:id", (req, res)=>{
        let burgerId = req.params.id;
        console.log(burgerId);

        cat.delete(burgerId, function (result){
            console.log(result);
            if (result.affectecRows == 0){
                return res.status(404).end();
            }else{
                res.status(200).end();
            }
        });
    
    });
});
module.exports = router;
