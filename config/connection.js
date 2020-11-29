// configuration connection
require("dotenv").config();

// requiring my db
var mysql = require("mysql2");

//JAWS DB set up
var connection;

if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "*Itzael2019*",
    database: "burgers_db",
  });
}

// connection
connection.connect((err) => {
  if (err) {
    console.error("error connecting:" + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});
//exporting my connection
module.exports = connection;
