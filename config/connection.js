// configuration connection
require("dotenv").config();
// requiring my db
let mysql =require("mysql");

//JAWS DB set up
let connection;

if(process.env.JAWSDB_URL){
    connection = mysql.createConnection(process.env.JAWSDB_URL)
}else{
    connection = mysql.createConnection({
        host: "localhost",
        port: 3306,
       
        //userName
        user: process.env.DB_USERNAME,

        // password
        user: process.env.DB_PASSWORD,
        
        // database
        database: process.env.DB_DATABASE,
        
    });
}
// connection
connection.connect((err)=>{
    if(err){
        console.error('error connecting:'+ err.stack);
        return;
    }
    console.log('connected as id '+ connection.threadId);
});
//exporting my connection
module.exports = connection;