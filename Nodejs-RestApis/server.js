import express from 'express';
var app = express();
import { json } from 'body-parser';
app.use(json())
 
import cors from 'cors';
const corsOptions = {
  origin: 'http://localhost:4200',
  optionsSuccessStatus: 200
}
app.use(cors(corsOptions));
import { sequelize } from './app/config/db.config.js';
  
// force: true will drop the table if it already exists
sequelize.sync({force: true}).then(() => {
  console.log('Drop and Resync with { force: true }');
});
 
require('./app/route/customer.route.js')(app);
 
// Create a Server
var server = app.listen(8080, function () {
 
  var host = server.address().address
  var port = server.address().port
 
  console.log("App listening at http://%s:%s", host, port)
})
