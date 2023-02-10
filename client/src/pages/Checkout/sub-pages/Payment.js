import { useState } from 'react'
import { StripeContainer } from 'components/Stripe/StripeContainer'
import './Payment.scss'


const Payment = () => {

  const [showItem, setShowItem] = useState(false)


  return (
    <>
      <div className='payment-container'>
        <h5 className='payment-title'>付款資訊</h5>

        <div className='credit-info'>
          <StripeContainer className='stripe-container' />
        </div>
      </div>
    </>
  )
}
export default Payment
