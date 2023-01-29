import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js"
import axios from "axios"
import React, { useState } from 'react'

const apiKey = process.env.SECRET_KEY

const CARD_OPTIONS = {
  iconStyle: "solid",
  style: {
    base: {
      iconColor: "#c4f0ff",
      color: "#000",
      fontWeight: 500,
      fontFamily: "Roboto, Open Sans, Segoe UI, sans-serif",
      fontSize: "16px",
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
export default function PaymentForm() {
  const [success, setSuccess] = useState(false)
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
        const { id } = paymentMethod

        await axios.post("https://api.stripe.com/v1/charges", {
          amount: 1000,
          currency: "usd",
          source: id,
          description: "Example charge"
        }, {
          headers: {
            Authorization: `Bearer ${apiKey}`
          }
        })

        setSuccess(true)
      } catch (error) {
        console.error(error)
      }
    } else {
      console.error(error.message)
    }
  }

  return (
    <>
      {!success
        ? <form onSubmit={handleSubmit}>
          <fieldset className="FormGroup">
            <div className="FormRow">
              <CardElement options={CARD_OPTIONS} />
            </div>
          </fieldset>
          <button>Pay</button>
        </form>
        : <div>
          <h2>You just bought a sweet spatula congrats</h2>
        </div>
      }
    </>
  )
}
