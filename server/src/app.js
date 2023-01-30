const express = require('express')
const app = express()
const middleware = require('./middleware')
const user = require('./router/user/users')

require('dotenv').config()

app.use(middleware)
app.use('/api/user',user)

module.exports = app