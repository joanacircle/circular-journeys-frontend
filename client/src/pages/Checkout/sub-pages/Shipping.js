import { StripeContainer } from 'components/Stripe/StripeContainer'
import { useState } from 'react'

const Shipping = () => {
  const [showItem, setShowItem] = useState(false)
  return (
    <>
      <h1>訂購內容 + 運送地址</h1>

      <div className='pay'>

        {showItem
          ? <StripeContainer />
          : <div>
            <h3>$10.00</h3><button onClick={() => setShowItem(true)}>Purchase</button>
          </div>
        }
      </div>
    </>
  )
}
export default Shipping



// function Shipping(props) {
//   const { shippingDetail, setShippingDetail } = props

//   const handleFieldChange = (e) => {
//     const newShipping = { ...shippingDetail, [e.target.name]: e.target.value }
//     setShippingDetail(newShipping)

//     console.log(newShipping)
//   }

//   return (
//     <>
//       <h1>運送資訊 - Shipping</h1>
//       <div>
//         <label>姓名</label>
//         <input
//           type='text'
//           name='name'
//           value={shippingDetail.name}
//           onChange={handleFieldChange}
//         />
//       </div>
//       <div>
//         <label>住址</label>
//         <input
//           type='text'
//           name='address'
//           value={shippingDetail.address}
//           onChange={handleFieldChange}
//         />
//       </div>
//       <div>
//         <label>電話</label>
//         <input
//           type='text'
//           name='phone'
//           value={shippingDetail.phone}
//           onChange={handleFieldChange}
//         />
//       </div>
//     </>
//   )
// }

// export default Shipping
