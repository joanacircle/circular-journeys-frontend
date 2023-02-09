import { useState } from 'react'
import { StripeContainer } from 'components/Stripe/StripeContainer'


const Payment = () => {

  const [showItem, setShowItem] = useState(false)


  return (
    <>
      <h1>付款資訊 - Payment</h1>

      <div className='pay'>

        {showItem
          ? <StripeContainer />
          : <div>
            <h3>$100.00</h3><button onClick={() => setShowItem(true)}>Purchase</button>
          </div>
        }
      </div>
    </>
  )
}
export default Payment
