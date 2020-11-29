const express = require("express");
const router = express.Router();

//Model import
const burger = require("../models/burger.js");

// Route
router.get("/", function (req, res) {
  burger.selectAll(function (data) {
    var hbsObject = {
      burgers: data,
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

//Route
router.post("/api/burgers", (req, res) => {
  const burgerName = req.body.burger_name;
  console.log(burgerName);
  burger.insertOne("burger_name", burgerName, (result) => {
    res.json({ id: result.insertId });
  });
});

// Route
router.put("/api/burgers/:id", function (req, res) {
  var id = req.params.id;
  burger.updateOne(id, (result) => {
    if (result.changedRows == 0) {
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});
router.delete("/api/burgers/:id", function (req, res) {
  var condition = "id = " + req.params.id;

  burger.delete(condition, function (result) {
    if (result.affectedRows == 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

module.exports = router;
