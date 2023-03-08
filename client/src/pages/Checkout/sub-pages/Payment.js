
import { useContext, useState } from 'react'
import { CartCountContext } from '../../../components/ShoppingCart/CartCountProvider'
import { StripeContainer } from 'components/Stripe/StripeContainer'
import './Payment.scss'
import PaymentCartList from '../../../components/ShoppingCart/PaymentCartList'


const Payment = ({ prevStep, nextStep, selectedAddress }) => {

  const cartDetail = JSON.parse(localStorage.getItem('cart')) || []
  const [cartItems, setCartItems] = useState(cartDetail.map((v, i) => ({
    ...v
  })))

  const { total } = useContext(CartCountContext)
  const { updateTotal } = useContext(CartCountContext)
  updateTotal(cartItems)

  return (
    <>
      <div className='payment-container'>
        <h5 className='payment-title'>請輸入信用卡資訊</h5>

        <div className='credit-info'>
          {/* Handle Payment */}
          <StripeContainer
            className='stripe-container'
            total={total}
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
              <div>{selectedAddress.address}</div>
              <div>{selectedAddress.city}</div>
              <div>{selectedAddress.district}</div>
              <div>{selectedAddress.nation} {selectedAddress.postal_code}</div>
              <div>tel: {selectedAddress.user_contact}</div>
            </div>
            <div className="confirm-products">
              <PaymentCartList
                cartItems={cartItems}
                setCartItems={setCartItems}
              />
            </div>
          </div>
        </div>

      </div>
    </>
  )
}
export default Payment
