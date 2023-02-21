import { useState, useEffect } from 'react'
import { FaRegAddressBook } from 'react-icons/fa'
import { BsPlusSquareDotted } from 'react-icons/bs'
import { VscEdit } from 'react-icons/vsc'
import { RiDeleteBinFill } from 'react-icons/ri'
import EditAddress from './EditAddress'
import './Shipping.scss'


const Shipping = ({ shippingDetail, setShippingDetail, nextStep }) => {

  const [showEditAddress, setShowEditAddress] = useState(false)

  const toggleEditAddress = () => {
    setShowEditAddress(!showEditAddress)
  }

  const [selectedIndex, setSelectedIndex] = useState(-1)

  const handleShippingSelection = (event) => {
    setSelectedIndex(+event.target.value)
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
            <div>
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
                      <div className='edit-delete'>
                        <VscEdit />
                        <RiDeleteBinFill />
                      </div>
                    </div>
                  ))}
                </div>
                <div className='toggle-edit' >
                  <button onClick={toggleEditAddress}><BsPlusSquareDotted className='toggle-edit-icon' /></button>
                </div>

              </div>
              <div className='confirm-button'>
                <button onClick={nextStep}>確認</button>
              </div>
            </div>
          )}
      </div>
    </>
  )
}
export default Shipping
