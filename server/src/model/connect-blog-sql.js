const mysql = require('mysql2');
require('dotenv').config();

const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  databases: process.env.DB_NAME,
  waitForConnections: true,  // 忙碌時叫他等待
  connectionLimit: 5,  
  queueLimit: 0
})

module.exports = pool.promise();
