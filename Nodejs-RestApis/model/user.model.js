export default (sequelize, Sequelize) => {
    const User = sequelize.define('user', {
      name: {
      type: Sequelize.STRING
      },
      age: {
        type: Sequelize.INTEGER
      },
      active: {
      type: Sequelize.BOOLEAN, defaultValue: false
      },
    });
    
    return User;
  }