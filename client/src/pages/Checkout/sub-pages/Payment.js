
import { StripeContainer } from 'components/Stripe/StripeContainer'
import './Payment.scss'


const Payment = () => {

  const sampleData = {
    name: 'Kevin La',
    address: '56 Starbuck St',
    city: 'Staten Island',
    province: 'NY',
    zip: '10304',
    country: 'USA',
    phone: '0917666666'
  }


  return (
    <>
      <div className='payment-container'>
        <h5 className='payment-title'>付款資訊</h5>

        <div className="confirm-container">
          <div className="confirm-info">
            <div className="confirm-address">

              <div style={{ fontWeight: 'bold' }}>{sampleData.name}</div>
              <br />
              {Object.entries(sampleData).map(([key, value], i) => {
                if (key === "name" || key === "province") return null
                if (key === "zip") return <div key={key}>{`${sampleData.province} ${sampleData.zip}`}</div>
                return <div key={key}>{value}</div>
              })}

            </div>
            <div className="confirm-products">

            </div>
          </div>
        </div>
        <div className='credit-info'>
          <StripeContainer className='stripe-container' />
        </div>
      </div>
    </>
  )
}
export default Payment
