const express = require('express');
const path = require('path');

const app = express();

// for bofy praser.
app.use(express.urlencoded({extended:false}));

//serve static files.
app.use(express.static(path.join(_dirname, 'public')));

//template engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// let' serbve the index page
app.get('/', function(req, res) {
    res.render('index');
});


// settinf up the server
app.listen(8080, () =>{
console.log('Server is running an port 8080...');
});
module.exports = app;
