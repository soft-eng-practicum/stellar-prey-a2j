//Main file for testing MySql connection
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
  //module.exports = con;

//test query that returns info to console
con.query('SELECT * FROM user', (err,rows) => {
  if(err) throw err;
  console.log('Data received from Db:');
  console.log(rows);
  rows.forEach( (row) => {
    console.log(`${row.name} lives in ${row.email}`);
  });
});
