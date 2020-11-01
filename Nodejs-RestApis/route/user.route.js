module.exports = function(app) {
 
    const users = require('../controller/customer.controller.js');
 
    // Create a new Customer
    app.post('/api/user', user.create);
 
    // Retrieve all Customer
    app.get('/api/users', user.findAll);
 
    // Retrieve a single Customer by Id
    app.get('/api/users/:userId', user.findById);
  
  // Retrieve Customers Age
    app.get('/api/user/age/:age', user.findByAge);
 
    // Update a Customer with Id
    app.put('/api/user/:userId', user.update);
 
    // Delete a Customer with Id
    app.delete('/api/user/:userId', user.delete);
}