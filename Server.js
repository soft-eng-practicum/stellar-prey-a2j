var express    = require("express");
var login = require('./routes/mySql');
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
app.use('/api', router);
<<<<<<< HEAD
app.listen(8081);
=======
app.listen(3306);
>>>>>>> 1bef32b3c2d2c1ae9394171d8f4c606471d2f260
