const Sequelize = require('sequelize');

const sequelize = new Sequelize('pkh', 'root', '', {
  host: process.env.HOST,
  dialect: 'mysql',
  pool: {
    max: 5,
    min: 0,
    idle: 10000,
  },
  logging: () => {},
});

module.exports = sequelize;
