import { database, username, password, host as _host, dialect as _dialect, max as _max, pool as _pool } from './env.js';
 //const env = require('./env.js'); before converting to ES6
import Sequelize from 'sequelize';
const sequelize = new Sequelize(database, username, password, {
  host: _host,
  dialect: _dialect,
  operatorsAliases: false,
 
  pool: {
    max: _max,
    min: _pool.min,
    acquire: _pool.acquire,
    idle: _pool.idle
  }
});
 
const db = {};
 
db.Sequelize = Sequelize;
db.sequelize = sequelize;
 
//Models/tables
db.users = require('../model/user.model.js').default(sequelize, Sequelize);
 
 
export default db;