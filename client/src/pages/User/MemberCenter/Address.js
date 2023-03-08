import React, { useState, useEffect, useContext } from 'react'
import './Address.scss'
import axios from 'axios'
import validator from 'validator'

// components
import DynamicSelect from '../../../components/Select/DynamicSelect'
import Context from 'components/Context'

// icon
import { TfiTrash } from 'react-icons/tfi'

const Address = () => {
  const [inputData, setInputData] = useState({
    nation: '',
    userAddress: '',
    userPostalCode: ''
  })
  const [addressList, setAddressList] = useState([])
  const [animation, setAnimation] = useState({
    userEmail: ''
  })

  // user info
  const { isLogin } = useContext(Context)

  // get address list
  useEffect(() => {
    const getAddressList = async () => {
      try {
        const list = await axios.post(
          `${process.env.REACT_APP_DEV_URL}/user/address/list`,
          {
            member_id: isLogin?.userData.member_id
          }
        )
        setAddressList(list.data.data)
      } catch (err) {
        console.log(err)
      }
    }
    getAddressList()
  }, [addressList])

  const handleInputChange = (event) => {
    setInputData({
      ...inputData,
      [event.target.name]: event.target.value
    })
  }

  // handle submit
  const handelSubmit = async (event) => {
    event.preventDefault()
    const { userName, userAddress, userContact, userPostalCode, nation, city, districts } = inputData
    try {
      const response = await axios.post(`${process.env.REACT_APP_DEV_URL}/user/address`,
        {
          member_id: isLogin?.userData.member_id,
          userName,
          userContact,
          userAddress,
          userPostalCode,
          nation,
          city,
          districts
        })
      setAddressList(response.data.data)
      setInputData({
        nation: ''
      })
    } catch (err) {
      console.log(err)
    }
  }

  // handle delete
  const handleDelete = async (id) => {
    try {
      await axios.delete(`${process.env.REACT_APP_DEV_URL}/user/address/delete/${id}`)
    } catch (err) {
      console.log(err)
    }
  }

  // validator
  const handlePostalCodeIsTrue = (event) => {
    const postalCode = event.target.value
    !validator.isPostalCode(postalCode, 'TW') &&
      setAnimation({
        ...animation,
        [event.currentTarget.id]: 'animate__animated animate__shakeX alert-style'
      })
  }
  const handleContactIsTrue = (event) => {
    const contact = event.target.value
    !validator.isMobilePhone(contact, 'zh-TW') &&
      setAnimation({
        ...animation,
        [event.currentTarget.id]: 'animate__animated animate__shakeX alert-style'
      })
  }
  const handleFocus = (event, id) => {
    event.currentTarget.id === id &&
      setAnimation({
        ...animation,
        [event.currentTarget.id]: ''
      })
  }



  return (
    <div className="top-place animate__animated animate__fadeInDown animate__faster">
      <h3>通訊地址</h3>
      <hr />
      <div className='input-place'>
        {
          addressList.length < 2 &&
          <form onSubmit={handelSubmit}>
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
                <label htmlFor="userAddress">街 / 道</label>
                <input
                  type="text"
                  name="userAddress"
                  id="userAddress"
                  value={inputData.userAddress || ''}
                  onChange={handleInputChange}
                  placeholder='忠孝東路一段101號'
                  required
                />
              </div>
            </div>
            <div className='input-place'>
              <div className='label-place'>
                <label htmlFor="userPostalCode">郵遞區號</label>
                <input
                  type="text"
                  name="userPostalCode"
                  id="userPostalCode"
                  className={animation.userPostalCode}
                  value={inputData.userPostalCode || ''}
                  onChange={handleInputChange}
                  onBlur={handlePostalCodeIsTrue}
                  onFocus={(event) => handleFocus(event, event.currentTarget.id)}
                  placeholder='100'
                  required
                />
              </div>
              <div className='label-place'>
                <label htmlFor="userName">收件人姓名</label>
                <input
                  type="text"
                  name="userName"
                  id="userName"
                  value={inputData.userName || ''}
                  onChange={handleInputChange}
                  placeholder='王小明'
                  required
                />
              </div>
            </div>
            <div className='input-place'>
              <div className='label-place'>
                <label htmlFor="userContact">收件人電話</label>
                <input
                  type="text"
                  name="userContact"
                  id="userContact"
                  className={animation.userContact}
                  value={inputData.userContact || ''}
                  onChange={handleInputChange}
                  onBlur={handleContactIsTrue}
                  onFocus={(event) => handleFocus(event, event.currentTarget.id)}
                  placeholder='0912345678'
                  required
                />
              </div>
            </div>
            <div className="input-place input-submit">
              <div className="label-place">
                <input type="submit" value="儲存" />
              </div>
            </div>
          </form>
        }
        <div className='table-place'>
          {
            addressList.length > 0 &&
            <>
              <hr />
              <table>
                <thead>
                  <tr>
                    <th></th>
                    <th>收件人</th>
                    <th>電話</th>
                    <th>國家</th>
                    <th>城市</th>
                    <th>區域</th>
                    <th>街 / 道</th>
                    <th>郵遞區號</th>
                  </tr>
                </thead>
                <tbody>
                  {
                    addressList.map(address => (
                      <tr className='tr-hover' key={address.id}>
                        <td className='icon-place'>
                          {<TfiTrash color='red' onClick={() => { handleDelete(address.id) }} />}
                        </td>
                        <td>{address.user_name}</td>
                        <td>{address.user_contact}</td>
                        <td>{address.nation}</td>
                        <td>{address.city}</td>
                        <td>{address.districts}</td>
                        <td>{address.address}</td>
                        <td>{address.postal_code}</td>
                      </tr>
                    ))
                  }
                </tbody>
              </table>
            </>
          }
        </div>
      </div >
    </div >
  )
}

export default Address
