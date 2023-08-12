
const mysql = require('mysql');
const { Sequelize } = require('sequelize');

// MySQL Connection Configuration
// const dbConfig = {
//   host: 'localhost',
//   user: 'root',
//   password: '',
//   database: 'airbnb'
// };

// function initializeDatabase() {
//   return mysql.createConnection(dbConfig);
// }

const sequelize = new Sequelize(`${process.env.database}`, `${process.env.root}`, '', {
  host: `${process.env.host}`,
  dialect: 'mysql'
});

module.exports={sequelize}

// module.exports = initializeDatabase;