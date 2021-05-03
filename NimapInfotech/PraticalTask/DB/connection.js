const Sequelize = require('sequelize').Sequelize;

const sequelize = new Sequelize(process.env.DATABASE_NAME, process.env.DATABASE_USER_NAME, process.env.DATABASE_PASSWORD, {
  host: process.env.DATABASE_HOST,
  dialect: 'postgres',
  port: process.env.DATABASE_PORT,
  logging: false,
});

module.exports = sequelize;
