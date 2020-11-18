// imported connection
const connection = require('./connection.js');

function printQuestionMarks(num){
    let arr =[];
    for(let i = 0; i < num; i++){
        arr.push("?");
    }
    return arr.toString();
}
function objToSql(object){
     let arr = [];
     for (const key in object){
         let value = object[key];
         if(object.hasOwnProperty.call(object, key)){
             if(typeof value === "string" && value.indexOf("")>=0){
                 value = "'" + value +"'";
             }
             arr.push(key+ "=" + value);
         }
     }
    return arr.toString();
 }
 const orm = {
    all: function (tableInput, cb) {
        var queryString = "SELECT * FROM " + tableInput + ";";
        connection.query(queryString, function(err, res) {
            if (err) throw err;
            cb(res);
        });
    },
    create: function (table, cols, vals, cb) {
        var queryString = "INSERT INTO " + table;
        
        queryString += " (";
        queryString += cols.toString();
        queryString += ") ";
        queryString += "VALUES (";
        queryString += printQuestionMarks(vals.length);
        queryString += ") ";

        console.log(queryString);

        connection.query(queryString, vals, function (err, res) {
            if (err) throw err;
            cb(res);
        });
    },
    update: function (table, objColVals, condition, cb) {
        var queryString = "UPDATE " + table;

        queryString += " SET ";
        queryString += objToSql(objColVals);
        queryString += " WHERE ";
        queryString += condition;

        console.log(queryString);
        connection.query(queryString, function (err, res) {
            if (err) throw err;
            cb(res);
        });
    }
};

module.exports = orm;

