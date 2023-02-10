import { useState } from 'react'
import { FaRegAddressBook } from 'react-icons/fa'
import EditAddress from './EditAddress'
import './Shipping.scss'

const Shipping = ({ shippingDetail, setShippingDetail }) => {

  const [showEditAddress, setShowEditAddress] = useState(false)

  const toggleEditAddress = () => {
    setShowEditAddress(!showEditAddress)
  }

  const [selectedShippingIndex, setSelectedShippingIndex] = useState(0)

  const handleShippingSelection = (index) => {
    setSelectedShippingIndex(index)
  }

  return (
    <>
      <div className='shipping'>
        <FaRegAddressBook className='address-book' />
        <h5 className='select-address'>選擇運送地址</h5>
        {showEditAddress
          ? <EditAddress
            showEditAddress={showEditAddress}
            setShowEditAddress={setShowEditAddress}
          />
          : (
            <div className='address-boxes'>
              <button className='toggleEdit' onClick={toggleEditAddress}>新增地址</button>
              <div className='address-box'>
                {shippingDetail.map((shipping, index) => (
                  <div key={index} className='radio-groups'>
                    <input
                      type='radio'
                      name='shippingAddress'
                      value={index}
                      onChange={handleShippingSelection}
                    />
                    <div style={{ fontWeight: 'bold' }}>{shipping.name}</div>
                    <br />
                    {Object.entries(shipping).map(([key, value], i) => {
                      if (key === "name" || key === "province") return null
                      if (key === "zip") return <div key={key}>{`${shipping.province} ${shipping.zip}`}</div>
                      return <div key={key}>{value}</div>
                    })}
                  </div>
                ))}
              </div>
            </div>
          )}
      </div>
    </>
  )
}
export default Shipping
