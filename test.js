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
                user_id = results[0];
                console.log(user_id);  // Scope is larger than function
    })
}

/*
function get_info(data, callback){
      
    var sql = "SELECT * from user";

    con.query(sql, function(err, results){
          if (err) throw err;

          //console.log(results); // good
          stuff_i_want = results; // Scope is larger than function
          if(callback) return callback(results);
  })
}
*/

//usage

var stuff_i_want = '';

get_info(function(result){
  stuff_i_want = result;
  console.log(stuff_i_want);
  //rest of your code goes in here
});
//console.log(get_info);
stuff_i_want = get_info;
console.log(stuff_i_want);
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
    console.log(invoices);
    })
  .catch(err => {})
    .then(() => {
        con.end();
    })
    return(wewant1);
});

console.log("Result " + user);

var position = {
    current: {
      coordinates: '2408,1822',
      name: 'start',
      premiumPoints: 0,
      points: 0,
      backward: "0,0"
    },
    some: {
      coordinates: '2409,1822',
      name: 'Some Start',
      premiumPoints: 0,
      points: 0,
      backward: "0,0"
    },
     more: {
      coordinates: '2400,1822',
      name: 'more Start',
      premiumPoints: 0,
      points: 0,
      backward: "0,0"
    }
  };*/
  
 /* function searchObj(obj, query) {
    var data ='';
    for (var property in obj) {
      if (obj.hasOwnProperty(property)) {
        if (typeof obj[property] === "object") {
         data = searchObj(obj[property], query);       
          if(data !='') return data; 
        }
        else {
          if (obj[property] === query) {         
            return  obj["name"];               
          }
        }
      }
    } 
    
    return data;
  }
  
  var data = searchObj(position, "2400,1822")
  console.log("Result : " +data)*/