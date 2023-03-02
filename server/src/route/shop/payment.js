
const stripe = require("stripe")(process.env.SECRET_KEY)

module.exports = () => {
  return async (req, res) => {
    let { amount, id } = req.body

    try {
      const payment = await stripe.paymentIntents.create({

        amount: amount.totalPrice,
        currency: "twd",
        description: "Circular Journeys Inc",
        payment_method: id,
        confirm: true
      })
      console.log("Payment", payment)
      res.json({
        message: "Payment successful",
        success: true
      })
    } catch (error) {
      console.log("Error", error)
      res.json({
        message: "Payment failed",
        success: false
      })
    }
  }
}