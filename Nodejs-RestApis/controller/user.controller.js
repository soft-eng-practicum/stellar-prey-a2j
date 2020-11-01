const db = require('../config/db.config.js');
const user = db.user;
 
// Post a Customer
exports.create = (req, res) => {  
  // Save to MySQL database
  User.create({  
    name: req.body.name,
    age: req.body.age
  }).then(user => {    
    // Send created customer to client
    res.send(user);
  }).catch(err => {
    res.status(500).send("Error -> " + err);
  })
};
 
// FETCH all Customers
exports.findAll = (req, res) => {
    User.findAll().then(user => {
    // Send all customers to Client
    res.send(user);
  }).catch(err => {
    res.status(500).send("Error -> " + err);
  })
};
 
// Find a Customer by Id
exports.findById = (req, res) => {  
    User.findById(req.params.userId).then(user => {
    res.send(user);
  }).catch(err => {
    res.status(500).send("Error -> " + err);
  })
};
 
// Find Customers by Age
exports.findByAge = (req, res) => {
    User.findAll({
    where: {
      age: req.params.age
    }
  }).then(
    user => {
      res.send(user)
    }
  ).catch(err => {
    res.status(500).send("Error -> " + err);
  })
};
 
// Update a Customer
exports.update = (req, res) => {
  var user = req.body;
  const id = req.params.userId;
  User.update( { name: req.body.name, age: req.body.age, active: req.body.active }, 
            { where: {id: req.params.userId} }
           ).then(() => {
            res.status(200).send(user);
           }).catch(err => {
            res.status(500).send("Error -> " + err);
           })
};
 
// Delete a Customer by Id
exports.delete = (req, res) => {
  const id = req.params.userId;
  User.destroy({
    where: { id: id }
  }).then(() => {
    res.status(200).send('User has been deleted!');
  }).catch(err => {
    res.status(500).send("Error -> " + err);
  });
};
