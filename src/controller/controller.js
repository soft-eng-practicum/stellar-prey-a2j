//unfinished


var mysql = require('mysql'); 
      var con = mysql.createConnection({  
        host: "localhost",
        user: "root",
        password: "",
        database: "Stellar"
      });        

      var users = con.query('SELECT * FROM user', (err,rows) => {
      if(err) throw err;
      else{
      var array = [];
      rows.forEach( (row) => {
        array.push(row);
      });
      console.log(rows);
      }
      });
      
      console.log(users);

/*
var sql = require("mssql");

var config = {  
  "server": "localhost",
  "user": "root",
  "password": "",
  "database": "stellar"
};

function getAllRecords(config) {
  // return the entire chain of promises
  return sql.connect(config)
    .then(function() {
      // return this query so we can have access to its value 
      return new sql.Request().query('select * from user')
    .catch(function(err) {
        console.log("Error1", err);
    });
  }).catch(function(err) {
    console.log("Error2", err);
  });
}

// since we're returning a promise we have to consume it using a `.then()`
getAllRecords(config).then(function(value) {
  console.log(value);
});*/
/*var mysql = require('mysql'); 
      var con = mysql.createConnection({  
        host: "localhost",
        user: "root",
        password: "",
        database: "Stellar"
      });        




      //var db = require('./db')

      var user_info = con.get('/user/name');
      console.log(user_info);

      user_info.then(user => {
      const name = user.name;
      console.log(name);
      });*/
     /*var getAllRecord = function getAllRecord()
      {
        return new Promise(function(resolve, reject) {
        // The Promise constructor should catch any errors thrown on
        // this tick. Alternately, try/catch and reject(err) on catch.

          con.query("SELECT * FROM user", function (err, rows, fields) {
            // Call reject on error states,
            // call resolve with results
            var array = [];
            rows.forEach( (row) => {
              array.push(row);
            });
            if (err) {
               reject(err);
            }
            else {
              resolve(array);
            }
          });
        });
      }

      getAllRecord().then(function(result) {
        var p = Promise.resolve(result);
          p.then(function(v) {
          return console.log(v); // 1
        });
      }).catch((err) => setImmediate(() => { throw err; }));
      console.log(getAllRecord());
function stuff() {
  const array = ["dgdsfgsdf","sgsg","ggdsfg"];
  return array;
}
console.log(stuff());
*/
//getAllRecord().then(function(rows) {
    // now you have your rows, you can see if there are <20 of them
    //console.log(rows);
    //return "normal";
   /* var array = [];
    Promise.all(rows)
    .then(rows => {
    //results is a array of the resolved promises
    rows.forEach( (row) => {
      array.push(row);
    });
      //console.log(array);
      return array;
    })
  .catch(err => {})
    .then(() => {
        con.end();
    })

    rows.forEach( (row) => {
      array.push(row);
    });
    console.log(array);
    return array;*/
    
//}).catch((err) => setImmediate(() => { throw err; }));

/*
function getColour(data, callback)
{
    con.query('SELECT * FROM user', function(err, result)
    {
        if (err) {
            callback = result;
            return callback;
        }
        else{
            callback = result;
            return callback;
        }

    });

}

//call Fn for db query with callback
getinfo("yourname",4, function(err,data){
        if (err) {
            // error handling code goes here
            console.log("ERROR : ",err);            
        } else {            
            // code to execute on data retrieval
            console.log("result from db is : ",data);   
        }    

});
console.log(getinfo);*/
/*var user = '';
function get_info(data, cb){
          var sql = "SELECT * from user"
          
          con.query(sql, function(err, results){
                if (err){ 
                  throw err;
                }
                if(cb)return cb(results[0]);
                user = results;
                //console.log(user); 
                return user; // Scope is larger than function
    })
}
var array = '';
get_info(function(result){
  array = result;
  return array;
  //console.log(array);
  //rest of your code goes in here
});
//array = get_info;
console.log(get_info);
*/
/*function foo(){
  console.log("foo");
  return "bar";
}
console.log(foo());*/
//

/*var users = con.query('SELECT * FROM user', (err,rows) => {
    if(err) throw err;
    var array = [];
    rows.forEach( (row) => {
      array.push(row);
    });
    return rows;
    //return array;
  });
console.log(users);*/
/*var users = (req, res) => {
  const title = req.query.title;
  var condition = title ? { title: { [Op.like]: `%${user}%` } } : null;

  Tutorial.findAll({ where: condition })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving tutorials."
      });
    });
};*/
//var users = (con) => {
/*
var user = {
    url: 'http://localhost:3000/rows/'
};

fetch(user)
  .then((res) => {
    if(res.ok) {
      return res.json();
    }
  })
  .catch(console.log);
*/
//module.exports = users;

