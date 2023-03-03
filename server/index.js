const express = require("express")
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')

// individual component
const homeRouter = require('./src/route/home/home')
const user = require('./src/route/user/users')
const userOrders = require('./src/route/user/userOrders')
const userPosts = require('./src/route/user/userPosts')
const shopRouter = require('./src/route/shop/shop')
const checkoutRouter = require('./src/route/shop/checkout')
const paymentRouter = require("./src/route/shop/payment")(cors)
const orderRouter = require('./src/route/shop/orders')
const blogRouter = require('./src/route/blog/blog')

// general middleware
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())

app.use(express.static('public'))

// home
app.use('/home', homeRouter)

// user
app.use('/user', user)
app.use('/userorders', userOrders)
app.use('/userposts', userPosts)

// shop
// payment
app.use('/shop', shopRouter)
app.use('/checkout', checkoutRouter)
app.use('/orders', orderRouter)
app.post('/payment', paymentRouter)

// blog
app.use('/blog', blogRouter)

const PORT = process.env.PORT || 8080

app.listen(PORT, () => { console.log(`Server is running on http://localhost:${PORT}`) })
