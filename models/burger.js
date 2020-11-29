const orm = require("../config/orm.js");

const burger = {
  selectAll: function (cb) {
    orm.selectAll("burgers", function (res) {
      cb(res);
    });
  },
  insertOne: function (col, val, cb) {
    orm.insertOne("burgers", col, val, function (res) {
      cb(res);
    });
  },
  updateOne: function (id, cb) {
    orm.updateOne("burgers", "devoured", true, id, function (res) {
      cb(res);
    });
  },
  delete: function (con, cb) {
    orm.delete("burgers", con, function (res) {
      cb(res);
    });
  },
};

module.exports = burger;
