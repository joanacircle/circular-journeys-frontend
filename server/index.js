const express = require("express")
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')

// individual component
const homeRouter = require('./src/route/home/home')
const user = require('./src/route/user/users')
const shop = require('./src/route/shop/shop')
const paymentRoute = require("./src/route/shop/payment")(cors)
const blogRouter = require('./src/route/blog/blog')

// general middleware
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())

app.use(express.static('public'))

app.get('/', (req, res) => {
  res.json('this is home page')
});

// home
app.use('/home', homeRouter)

// user
app.use('/user', user)


// shop
// payment
app.use('/shop', shop)
app.post('/checkout', paymentRoute)

// blog
app.use('/blog', blogRouter)

const PORT = process.env.PORT || 8080

app.listen(PORT, () => { console.log(`Server is running on http://localhost:${PORT}`) })
