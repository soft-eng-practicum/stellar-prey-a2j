var mysql = require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "2562William!"/*"Princessfairy97@"*/,
    database: 'Stellar'
  });


var user = con.query('SELECT * FROM user', (err,rows) => {
        if(err) throw err;
        rows.forEach( (row) => {
          return(`${row.id} ${row.name} ${row.email}`);
        });
      });
