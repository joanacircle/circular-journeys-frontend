import { useState } from 'react'

import Shipping from './sub-pages/Shipping'
import EditAddress from './sub-pages/EditAddress'
import Payment from './sub-pages/Payment'
import OrderDetail from './sub-pages/OrderDetail'

import { CheckoutBar } from './components/CheckoutBar'

import './Checkout.scss'

const Checkout = () => {

  const [shippingDetail, setShippingDetail] = useState([
    {
      name: 'Kevin La',
      address: '56 Starbuck St',
      city: 'Staten Island',
      province: 'NY',
      zip: '10304',
      country: 'USA',
      phone: '0917666666'
    },
    {
      name: 'Kevin La',
      address: '56 Starbuck St',
      city: 'Staten Island',
      province: 'NY',
      zip: '10304',
      country: 'USA',
      phone: '0917666666'
    }
  ])

  const maxSteps = 3
  const [step, setStep] = useState(1)
  const stepNames = ['產品確認', '付款方式', '訂單確認']

  const components = [Shipping, Payment, OrderDetail, EditAddress]
  const BlockComponent = components[step - 1]


  const nextStep = () => {
    if (step < maxSteps) setStep(step + 1)
  }

  const prevStep = () => {
    if (step <= maxSteps) setStep(step - 1)
  }

  return (
    <>
      <div className='checkout-container'>
        <h3 className='title'>Circular Journeys</h3>

        <div>
          <CheckoutBar
            maxSteps={maxSteps}
            step={step}
            stepNames={stepNames}
          />
        </div>

        <div className='order-steps'>
          <BlockComponent
            shippingDetail={shippingDetail}
            setShippingDetail={setShippingDetail}
          />
        </div>
        <div>
          <button onClick={prevStep} disabled={step === 1}>
            上一步
          </button>
          <button onClick={nextStep} disabled={step === maxSteps}>
            下一步
          </button>
        </div>
      </div>

    </>
  )
}

export default Checkout
