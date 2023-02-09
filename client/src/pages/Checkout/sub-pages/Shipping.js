import { useState } from 'react'
import { FaRegAddressBook } from 'react-icons/fa'
import './Shipping.scss'

const Shipping = ({ shippingDetail, setShippingDetail }) => {
  const [selectedAddress, setSelectedAddress] = useState({})

  const handleRadioChange = (event) => {
    setSelectedAddress(shippingDetail[event.target.value])
  }

  return (
    <>
      <div className='shipping'>
        <FaRegAddressBook className='address-book' />
        <h5 className='select-address'>選擇運送地址</h5>

        {shippingDetail.map((address, index) => (
          <div className='address-box2' key={index}>
            {Object.entries(address).map(([key, value], i) => {
              if (key === "province" && i !== 0) return null
              if (key === "zip") return <div key={key}>{`${address.province} ${address.zip}`}</div>
              return <div key={key}>{`${key}: ${value}`}</div>
            })}
          </div>
        ))}

      </div>
    </>
  )
}
export default Shipping

//   < div key = { i } >
//     <input
//       type="radio"
//       value={value}
//       checked={selectedAddress === shippingDetail[value]}
//       onChange={handleRadioChange}
//     />
// { value }
//           </ >
