import { useState, useEffect } from 'react'
import { FaRegAddressBook } from 'react-icons/fa'
import { BsPlusSquareDotted } from 'react-icons/bs'
import { VscEdit } from 'react-icons/vsc'
import { RiDeleteBinFill } from 'react-icons/ri'
import EditAddress from './EditAddress'
import AddAddress from './AddAddress'
import './Shipping.scss'
import { userInfo } from 'components/userInfo/UserInfo'


const Shipping = ({ nextStep, selectedAddress, setSelectedAddress }) => {

  const [showAddAddress, setShowAddAddress] = useState(false)
  const [showEditAddress, setShowEditAddress] = useState(false)
  const [selectedIndex, setSelectedIndex] = useState(0)
  // const [selectedAddress, setSelectedAddress] = useState(null)
  const [addresses, setAddresses] = useState([])

  // user data
  const { userData } = userInfo()
  const [userAddresses, setUserAddresses] = useState([])

  useEffect(() => {

    const fetchAddress = async () => {
      try {
        const memberId = userData.member_id

        const response = await fetch(`${process.env.REACT_APP_DEV_URL}/checkout?member_id=${memberId}`)
        // const response = await fetch(`${process.env.REACT_APP_DEV_URL}/checkout?member_id=104709174078800080046`)
        const data = await response.json()
        console.log('user data is', { data })
        setUserAddresses(data)
      } catch (error) {
        console.log(`address responded with ${error}`)
      }
    }
    fetchAddress()
  }, [userData.member_id, addresses])


  const toggleEditAddress = () => {
    setShowEditAddress(!showEditAddress)
  }

  const toggleAddAddress = () => {
    setShowAddAddress(!showAddAddress)
  }

  const handleShippingSelection = (event) => {
    setSelectedIndex(+event.target.value)
  }
  const handleRadioSelection = (index) => {
    setSelectedIndex(index)
    setSelectedAddress(userAddresses[index])
  }

  const handleDelete = async () => {
    try {
      const memberId = userData.member_id
      // const memberId = '104709174078800080046'
      const selectedAddress = userAddresses[selectedIndex]

      await fetch(`${process.env.REACT_APP_DEV_URL}/checkout/${selectedAddress.id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ member_id: memberId })
      })
      setUserAddresses(userAddresses.filter((address, index) =>
        index !== selectedIndex
      ))
      setSelectedIndex(0)
    } catch (error) {
      console.log(`Error deleting address: ${error}`)
    }
  }

  return (
    <>
      <div className='shipping'>
        <FaRegAddressBook className='address-book' />
        <h5 className='select-address'>請選擇運送地址</h5>
        {showAddAddress
          ? <AddAddress
            showAddAddress={showAddAddress}
            setShowAddAddress={setShowAddAddress}
            userId={userData.member_id}
            setAddresses={setAddresses}
          />
          : showEditAddress
            ? <EditAddress
              showEditAddress={showEditAddress}
              setShowEditAddress={setShowEditAddress}
              selectedAddress={selectedAddress}
              setAddresses={setAddresses}
            />
            : (
              <div>
                <div className='address-boxes'>

                  <div className='address-box'>
                    {userAddresses.map((shipping, index) => (


                      <div
                        key={shipping.id}
                        className={`radio-groups ${selectedIndex === index ? 'selected' : ''}`}
                        onClick={() => handleRadioSelection(index)}
                      >
                        <input

                          type='radio'
                          name='shippingAddress'
                          value={index}
                          checked={index === selectedIndex}
                          onChange={handleShippingSelection}
                        />

                        <div className='address-name'>{shipping.user_name}</div>
                        <br />
                        <div>{shipping.address}</div>
                        <div>{shipping.city}</div>
                        <div>{shipping.district}</div>
                        <div>{shipping.nation}</div>
                        <div>{shipping.postal_code}</div>
                        <div>{shipping.user_contact}</div>

                        {/* toggle Edit & Delete */}
                        {selectedIndex === index && (
                          <div className='edit-delete'>
                            <VscEdit onClick={toggleEditAddress} />
                            <RiDeleteBinFill onClick={handleDelete} />
                          </div>

                        )}
                      </div>
                    ))}
                  </div>
                  <div className='toggle-edit' >
                    <BsPlusSquareDotted className='toggle-edit-icon' onClick={toggleAddAddress} />
                  </div>

                </div>
                {userAddresses.length !== 0 && (
                  <div className='confirm-button'>
                    <button onClick={nextStep}>確認</button>
                  </div>
                )}
              </div>
            )}
      </div>
    </>
  )
}
export default Shipping
