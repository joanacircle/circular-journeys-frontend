import React, { useState } from "react"
import "./CardImage.scss"

const formatCardNumber = (cardNumber) => {
  let formattedCardNumber = ""
  for (let i = 0; i < cardNumber.length; i++) {
    if (i !== 0 && i % 4 === 0) {
      formattedCardNumber += " "
    }
    formattedCardNumber += cardNumber[i]
  }
  return formattedCardNumber
}

const CreditCard = ({ cardNumber }) => {
  return (
    <div className="credit-card">
      <div className="card-front">
        <div className="card-number-container">
          <label>Card Number:</label>
          <div>{cardNumber}</div>
        </div>
      </div>
    </div>
  )
}

const CardImage = () => {


  const [cardNumber, setCardNumber] = useState("0000 0000 0000 0000")

  return (


    <div className="app">
      <input
        type="text"
        value={cardNumber.replace(/ /g, "")}
        onChange={(e) => setCardNumber(formatCardNumber(e.target.value))}
      />
      <CreditCard cardNumber={cardNumber} />
    </div>

  )
}

export default CardImage
