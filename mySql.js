var mysql = require('mysql');

var connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Princessfairy97@",
    database: 'Stellar'
 
  });


  connection.connect(function(err) {
    if (err) 
        throw err;
    console.log("Connected!");
  });
  module.exports = connection;

  connection.query('SELECT * FROM user', (err,rows) => {
    if(err) throw err;
  
    console.log('Data received from Db:');
    console.log(rows);
    rows.forEach( (row) => {
      console.log(`${row.name} lives in ${row.email}`);
    });
  });
