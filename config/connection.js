// configuration connection
//require("dotenv").config();
// requiring my db
let mysql = require("mysql2");

//JAWS DB set up
let connection;
connection = mysql.createConnection(process.env.JAWSDB_URL);

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
