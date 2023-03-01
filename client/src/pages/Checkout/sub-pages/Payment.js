
import { useState } from 'react'
import { StripeContainer } from 'components/Stripe/StripeContainer'
import './Payment.scss'
import CartList from '../../../components/ShoppingCart/CartList'


const Payment = ({ prevStep, nextStep, selectedAddress }) => {

  const cartDetail = JSON.parse(localStorage.getItem('cart')) || []

  const [products, setProducts] = useState(cartDetail.map((v, i) => ({
    ...v, count: 1
  })))

  return (
    <>
      <div className='payment-container'>
        <h5 className='payment-title'>請輸入信用卡資訊</h5>


        <div className='credit-info'>
          {/* Handle Payment */}
          <StripeContainer
            className='stripe-container'
            // cartTotal={cartTotal}
            nextStep={nextStep}
          />
        </div>

        <div className="confirm-container">
          <div className="confirm-info">
            <div className="confirm-address">

              <div className='title-group'>
                <div style={{ fontWeight: 'bold' }}>{selectedAddress.user_name}</div>
                <div>
                  <button className='previous-button' onClick={prevStep}>更改地址</button>
                </div>
              </div>
              <br />
              {Object.entries(selectedAddress).map(([key, value], i) => {

                return <div key={key}>{value}</div>
              })}

            </div>
            <div className="confirm-products">
              <CartList
                cartItems={products}
                setCartItems={setProducts}
              />
            </div>
          </div>
        </div>

      </div>
    </>
  )
}
export default Payment
