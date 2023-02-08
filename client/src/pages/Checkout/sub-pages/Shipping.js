
import { useState } from 'react'
import DynamicSelect from '../../../components/Select/DynamicSelect'
import CartList from '../../../components/ShoppingCart/CartList'
import CartTotal from '../../../components/ShoppingCart/CartTotal'

const Shipping = () => {

  const [changeInputType, setChangeInputType] = useState('text')
  const [inputData, setInputData] = useState({})

  const handleInputChange = (event) => {
    setInputData({
      ...inputData,
      [event.target.name]: event.target.value
    })
  }

  return (
    <>
      <div className="setting-place">
        <h3>運送地址</h3>
        <hr />
        <div className='setting-input-place'>
          <form>
            <div className='input-place'>
              <div className='label-place'>
                <label htmlFor="userFirstName">姓</label>
                <input
                  type="text"
                  name='userFirstName'
                  id='userFirstName'
                  onChange={handleInputChange}
                  placeholder='王'
                />
              </div>
              <div className='label-place' >
                <label htmlFor="userLastName">名</label>
                <input
                  type="text"
                  name='userLastName'
                  id='userLastName'
                  onChange={handleInputChange}
                  placeholder='小明'
                />
              </div>
            </div>
            <div className='input-place'>
              <div className='label-place'>
                <label htmlFor="userAddress">街/道</label>
                <input
                  type="text"
                  name="userAddress"
                  id="userAddress"
                  onChange={handleInputChange}
                  placeholder='忠孝東路一段101號'
                  required
                />
              </div>
            </div>
            <div className='input-place'>
              {
                <DynamicSelect
                  inputData={inputData}
                  handleInputChange={handleInputChange}
                />
              }
            </div>

            <div className='input-place'>
              <div className='label-place'>
                <label htmlFor="userTelephone">電話</label>
                <input
                  type="text"
                  name='userTelephone'
                  id='userTelephone'
                  onChange={handleInputChange}
                  placeholder='0912345678'
                  required
                />
              </div>

            </div>
            {/* <CartList />
            <CartTotal /> */}
            {/* <div className="input-place input-submit">
              <div className="label-place">
                <input type="submit" value="儲存" />
              </div>
            </div> */}
          </form>
        </div >
      </div >


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
