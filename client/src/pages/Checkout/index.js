import { useState } from 'react'
import { Link } from 'react-router-dom'

import Shipping from './sub-pages/Shipping'
import Payment from './sub-pages/Payment'
import OrderDetail from './sub-pages/OrderDetail'
import { CheckoutBar } from './components/CheckoutBar'
import './Checkout.scss'

const Checkout = () => {

  const [selectedAddress, setSelectedAddress] = useState(null)
  const maxSteps = 3
  const [step, setStep] = useState(1)
  const stepNames = ['運送地址', '付款確認', '下單完成!']

  const components = [Shipping, Payment, OrderDetail]
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
        <Link to='/'>
          <h3 className='title'>Circular Journeys</h3>
        </Link>


        <div>
          <CheckoutBar
            maxSteps={maxSteps}
            step={step}
            stepNames={stepNames}
          />
        </div>

        <div className='order-steps'>
          <BlockComponent
            selectedAddress={selectedAddress}
            setSelectedAddress={setSelectedAddress}
            prevStep={prevStep}
            nextStep={nextStep}
          />
        </div>
        <div className='step-controller'>
          <button onClick={prevStep} disabled={step === 1}>
            上一步
          </button>
          <button onClick={nextStep} disabled={step === maxSteps}>
            下一步
          </button>
        </div>
        <div className='checkout-footer'>
          <p>© 2023 Circular Journeys</p>
        </div>
      </div>

    </>
  )
}

export default Checkout
