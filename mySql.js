var mysql = require('mysql');

var connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "2562@William"/*"Princessfairy97@"*/
  });
  
  connection.connect(function(err) {
    if (err) 
        throw err;
    console.log("Connected!");
  });
  module.exports = connection;