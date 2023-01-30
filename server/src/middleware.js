const express = require('express')
const app = express()
const stripe = require("stripe")(process.env.SECRET_KEY)
const bodyParser = require('body-parser')
const cors = require('cors')

app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())

module.exports = app