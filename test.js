//File used for testing mysql connection code

var mysql = require('mysql'); 
var con = mysql.createConnection({  
  host: "localhost",
  user: "root",
  password: "",
  database: "Stellar"
});        


var user_id = '';
function get_info(data, cb){
  var sql = "SELECT id from user"
  con.query(sql, function(err, results){
    if (err){ 
      throw err;
    }
    if(cb)return cb(results[0]);
    user1 = results[0];
    console.log(user1); 
  })
}

/*
function get_info(data, callback){
      
    var sql = "SELECT * from user";

    con.query(sql, function(err, results){
          if (err) throw err;

          //console.log(results);
          stuff_i_want = results;
          if(callback) return callback(results);
  })
}
*/

/*
var stuff_i_want = '';

get_info(function(result){
  stuff_i_want = result;
  console.log(stuff_i_want);
});
console.log(get_info);
stuff_i_want = get_info;
console.log(stuff_i_want);*/
/*var user = con.query('Select * from user', function(err, result, fields){
    if(err) throw err;
    console.log(result);
});*/




/*var user = (async function(){

let wewant1 = ["id","name","email"];

function getmydata(callback) {
       var sql = "select * from user";
       con.query(sql, function (err, result, fields) {
        if (err) throw err;
        callback(null,result);
    });
  };
  
  const promises = wewant1.map(it => {
     return new Promise((resolve, reject) => {
       getmydata( function querydata(err, result) {
         if (err) {
           reject(err);
         } else {
           resolve(result);
         }
       });
     })
  });

  Promise.all(promises)
  .then(results => {
    //results is a array of the resolved promises
    id=results[0];
    name=results[1];
    email=results[2];
    })
  .catch(err => {})
    .then(() => {
        con.end();
    })
    return(wewant1);
});
*/