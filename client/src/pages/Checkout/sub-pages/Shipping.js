import { useState } from 'react'
import { FaRegAddressBook } from 'react-icons/fa'
import { BsPlusSquareDotted } from 'react-icons/bs'
import EditAddress from './EditAddress'
import './Shipping.scss'

const Shipping = ({ shippingDetail, setShippingDetail }) => {



  const [showEditAddress, setShowEditAddress] = useState(false)

  const toggleEditAddress = () => {
    setShowEditAddress(!showEditAddress)
  }

  const [selectedShippingIndex, setSelectedShippingIndex] = useState(0)
  const [selectedIndex, setSelectedIndex] = useState(null)

  // const handleShippingSelection = (index) => {
  //   setSelectedShippingIndex(index)
  // }
  const handleShippingSelection = (event) => {
    setSelectedIndex(event.target.value)
  }

  return (
    <>
      <div className='shipping'>
        <FaRegAddressBook className='address-book' />
        <h5 className='select-address'>請選擇運送地址</h5>
        {showEditAddress
          ? <EditAddress
            showEditAddress={showEditAddress}
            setShowEditAddress={setShowEditAddress}
          />
          : (
            <div className='address-boxes'>

              <div className='address-box'>
                {shippingDetail.map((shipping, index) => (
                  <div key={index} className={`radio-groups ${selectedIndex === index ? 'selected' : ''}`}>
                    <input
                      type='radio'
                      name='shippingAddress'
                      value={index}
                      onChange={handleShippingSelection}
                    />

                    <div className='address-name'>{shipping.name}</div>
                    <br />
                    {Object.entries(shipping).map(([key, value], i) => {
                      if (key === "name" || key === "province") return null
                      if (key === "zip") return <div key={key}>{`${shipping.province} ${shipping.zip}`}</div>
                      return <div key={key}>{value}</div>
                    })}

                  </div>

                ))}
              </div>

              <button className='toggle-edit' onClick={toggleEditAddress}><BsPlusSquareDotted className='toggle-edit-icon' /></button>
            </div>
          )}
      </div>
    </>
  )
}
export default Shipping
