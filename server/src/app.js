const express = require('express')
const app = express()
const middleware = require('./middleware')
require('dotenv').config()

app.use(middleware)

app.get('/', (req, res) => {
  res.send('Server!')
})

module.exports = app