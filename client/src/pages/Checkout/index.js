import { useState } from 'react'

import Shipping from './sub-pages/Shipping'
import Payment from './sub-pages/Payment'
import OrderDetail from './sub-pages/OrderDetail'

import { CheckoutBar } from './components/CheckoutBar'

import './Checkout.scss'

const Checkout = () => {
  const maxSteps = 3
  const [step, setStep] = useState(1)
  console.log(step)
  const [shippingDetail, setShippingDetail] = useState({
    name: '',
    address: '',
    phone: ''
  })
  const components = [Shipping, Payment, OrderDetail]
  const BlockComponent = components[step - 1]
  const stepNames = ['產品確認', '付款方式', '訂單確認']

  const next = () => {
    // if (step === 2) {
    //   const { name, address, phone } = shippingDetail

    //   const errors = []

    //   if (!name) errors.push('請填入姓名')
    //   if (!address) errors.push('請填入運送地址')
    //   if (!phone) errors.push('請填入連絡電話')
    //   if (errors.length > 0) {
    //     alert(errors.join(','))
    //     return
    //   }
    // }
    if (step < maxSteps) setStep(step + 1)
  }

  const prevStep = () => {
    if (step < maxSteps) setStep(step - 1)
  }

  return (
    <>

      <h1>Circular Journeys.</h1>
      {/* 進度條 */}
      <div>
        <CheckoutBar
          maxSteps={maxSteps}
          step={step}
          stepNames={stepNames}
        />
      </div>

      <div className='order-steps'>
        <BlockComponent
        // shippingDetail={shippingDetail}
        // setShippingDetail={setShippingDetail}
        />
      </div>
      <div>
        <button onClick={prevStep} disabled={step === 1}>
          上一步
        </button>
        <button onClick={next} disabled={step === maxSteps}>
          下一步
        </button>
      </div>

    </>
  )
}

export default Checkout
