const mysql = require('mysql2')
require('dotenv').config()

const user = process.env.DATABASEUSER_DEV
const password = process.env.DATABASEPASSWORD_DEV
const port = process.env.DATABASE_PORT_DEV
const database = process.env.DATABASE_DEV

const pool = mysql.createPool({
  host:'localhost',
  user,
  password,
  port,
  database,
  waitForConnections: true,
  connectionLimit: 5,
  queueLimit: 0
})

module.exports = pool.promise();