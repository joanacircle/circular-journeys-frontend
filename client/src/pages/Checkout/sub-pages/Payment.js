
import { useState } from 'react'
import { StripeContainer } from 'components/Stripe/StripeContainer'
import './Payment.scss'
import CardList from '../../../components/ShoppingCart/CartList'

const sampleProductData = [
  {
    id: 1,
    name: '白色T-shirt',
    price: 100,
    img: 'https://i.imgur.com/ba3tvGm.jpg'
  },
  {
    id: 2,
    name: '黑色T-shirt',
    price: 200,
    img: 'https://i.imgur.com/pHQ3xT3.jpg'
  },
  {
    id: 3,
    name: '咖啡色T-shirt',
    price: 300,
    img: 'https://i.imgur.com/1GrakTl.jpg'
  }
]

const Payment = () => {

  const [products, setProducts] = useState(sampleProductData.map((v, i) => ({
    ...v, count: 1
  })))

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
              <CardList
                products={products}
                setProducts={setProducts}

              />
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
