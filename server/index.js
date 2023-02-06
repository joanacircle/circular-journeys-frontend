const express = require("express")
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')

// require("dotenv").config()

// individual component
const user = require('./src/route/user/users')
const paymentRoute = require("./src/route/shop/payment")(cors)

// general middleware
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())

// user
app.use('/api/user', user)

// payment
app.post('/payment', paymentRoute)

const PORT = process.env.PORT || 8080

app.listen(PORT, () => { console.log(`Server is running on http://localhost:${PORT}`) })
