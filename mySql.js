var mysql = require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "Stellar"
  });


 /* con.connect(function(err) {
    if (err) 
      console.log("Not Connected!");
    else
      console.log("Connected!");
  });*/
  module.exports = con;

