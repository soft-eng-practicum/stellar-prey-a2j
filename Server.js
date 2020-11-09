var express    = require("express");
var login = require('./mySql.js');
var bodyParser = require('body-parser');
var app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
var router = express.Router();
// test route
router.get('/', function(req, res) {
    res.json({ message: 'welcome to our upload module apis' });
});
//route to handle user registration
router.post('/register',login.register);
router.post('/login',login.login)
app.post('/user/all', function(req, res){
    Controller.Create
  });
app.use('/api', router);
<<<<<<< HEAD
app.listen(8081);

/*var express = require('express');
var app = express();


app.get('/rows', function (req, res) {
    con.connect();  
    con.query('SELECT * FROM users', function(err, rows, fields) {  
        connection.end();
        if (err) throw err;  
        res.json(rows); 
    });
});

app.get('/', function (req,res){
    res.send('<h1>Hello World</h1>');
});

var mysql = require('mysql'); 
var con = mysql.createConnection({  
    host: "localhost",
    user: "root",
    password: "",
    database: "Stellar"
});        

con.connect(function(err){
    if(err) throw err;
    con.query('Select * from user', function(err, result, fields){
        if(err) throw err;
        console.log(result);
    });
});*/
=======

app.listen(8080);

>>>>>>> 799d3548f936b2dbb2e36e92c072467e71c1fffb
