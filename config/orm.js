// imported connection
const connection = require("./connection.js");

const orm = {
  selectAll: function (tableName, cb) {
    var query = `SELECT * FROM ${tableName}`;
    connection.query(query, function (err, res) {
      if (err) throw err;
      cb(res);
    });
  },
  insertOne: function (tableName, column, value, cb) {
    var query = `INSERT INTO ${tableName}(${column})VALUES("${value}")`;

    console.log(query);

    connection.query(query, value, function (err, res) {
      if (err) throw err;
      cb(res);
    });
  },
  updateOne: function (tableName, column, condition, value, cb) {
    var query = `UPDATE ${tableName} SET ${column} = ${condition} WHERE id= ${value}`;

    console.log(query);

    connection.query(query, function (err, res) {
      if (err) throw err;
      cb(res);
    });
  },
  delete: function (table, condition, cb) {
    var query = `DELETE FROM ${table} WHERE ${condition}`;

    connection.query(query, function (err, res) {
      if (err) throw err;
      cb(res);
    });
  },
};

module.exports = orm;
