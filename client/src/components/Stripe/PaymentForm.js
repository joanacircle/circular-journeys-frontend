import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js"
import axios from "axios"
import React, { useState, useContext } from 'react'
import { CartCountContext } from '../ShoppingCart/CartCountProvider'
import './PaymentForm.scss'

import ssl from '../../images/payment/ssl.png'
import visa from '../../images/payment/visa.png'
import master from '../../images/payment/master.png'


import { userInfo } from '../../components/userInfo/UserInfo'

const CARD_OPTIONS = {
  iconStyle: "solid",
  style: {
    base: {

      iconColor: "#c4f0ff",
      color: "#000",
      fontWeight: 500,
      fontFamily: "Roboto, Open Sans, Segoe UI, sans-serif",
      fontSize: "20px",
      fontSmoothing: "antialiased",
      ":-webkit-autofill": { color: "#fce883" },
      "::placeholder": { color: "#87bbfd" }
    },
    invalid: {
      iconColor: "#ffc7ee",
      color: "#ffc7ee"
    }
  }
}

export default function PaymentForm({ total, nextStep }) {

  const { updateCount } = useContext(CartCountContext)
  const { userData } = userInfo()
  const totalPrice = Number(total.toString() + '00')
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState(null)
  const stripe = useStripe()
  const elements = useElements()

  const handleSubmit = async (e) => {
    e.preventDefault()
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardElement)
    })

    if (!error) {
      try {
        console.log('PaymentForm:' + paymentMethod)
        const { id } = paymentMethod
        const response = await axios.post(`${process.env.REACT_APP_DEV_URL}/payment`, {
          amount: { totalPrice },
          id
        })

        if (response.data.success) {
          console.log("Successful payment")
          setSuccess(true)
          saveOrderToDatabase()
          updateCount(0)
          localStorage.removeItem('cart')
          nextStep()
        } else {
          setError('付費失敗')
        }

      } catch (error) {
        console.log("Error", error)
      }
    } else {
      setError(error.message)
    }
  }

  const saveOrderToDatabase = async () => {
    try {
      const cart = JSON.parse(localStorage.getItem('cart'))
      const member_id = userData.member_id
      const orderNumber = `${Date.now()}${member_id}`
      const response = await axios.post(`${process.env.REACT_APP_DEV_URL}/orders`, {
        member_id,
        total_price: total,
        is_paid: 1,
        order_numbers: orderNumber,
        cartItems: cart
      })
      console.log('123', response.data)
    } catch (error) {
      console.log("Error", error)
    }
  }

  return (
    <>

      <form onSubmit={handleSubmit}>
        <fieldset className="FormGroup">
          <div className="FormRow">
            <CardElement className="card-element" options={CARD_OPTIONS} />

          </div>
        </fieldset>
        <div className="certifications">
          <div className="cert-img">
            <img src={ssl} alt="ssl" />

          </div>
          <div className="cert-img">
            <img src={visa} alt="visa" />
            <img src={master} alt="master" />
          </div>
        </div>
        <div className="payment-summary">

          <h5>金額總計 NT ${total} 元</h5>
          <button>確認付費</button>
          {error && <div className="error">{error}</div>}
        </div>

      </form>


    </>
  )
}
