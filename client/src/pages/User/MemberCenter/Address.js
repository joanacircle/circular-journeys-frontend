import React, { useState, useEffect } from 'react'
import './Address.scss'
import axios from 'axios'

// components
import DynamicSelect from '../../../components/Select/DynamicSelect'
import { userInfo } from 'components/userInfo/UserInfo'

// icon
import { CiTrash, CiEdit } from 'react-icons/ci'

const Address = () => {
  const [inputData, setInputData] = useState({
    nation: '',
    userAddress: '',
    userPostalCode: ''
  })
  const [addressList, setAddressList] = useState([])

  useEffect(() => {
    const getAddressList = async () => {
      try {
        const list = await axios.post(
          `${process.env.REACT_APP_DEV_URL}/user/address/list`,
          {
            member_id: userData.member_id
          }
        )
        setAddressList(list.data.data)
      } catch (err) {
        console.log(err)
      }
    }
    getAddressList()
  }, [addressList])

  // user info
  const { userData } = userInfo()

  const handleInputChange = (event) => {
    setInputData({
      ...inputData,
      [event.target.name]: event.target.value
    })
  }
  const handelSubmit = async (event) => {
    event.preventDefault()
    const { userAddress, userPostalCode, nation, city, districts } = inputData
    try {
      const response = await axios.post(`${process.env.REACT_APP_DEV_URL}/user/address`,
        {
          member_id: userData.member_id,
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
                <label htmlFor="userAddress">街/道</label>
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
                  value={inputData.userPostalCode || ''}
                  onChange={handleInputChange}
                  placeholder='100'
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
        <hr />
        <div className='table-place'>
          {
            addressList.length > 0 &&
            <table>
              <thead>
                <tr>
                  <td>操作</td>
                  <td>國家</td>
                  <td>城市</td>
                  <td>區域</td>
                  <td>街/道</td>
                  <td>郵遞區號</td>
                </tr>
              </thead>
              <tbody>
                {
                  addressList.map(address => (
                    <tr key={address.id}>
                      <td className='icon-place'>
                        <CiTrash />
                        <CiEdit />
                      </td>
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
          }
        </div>
      </div >
    </div >
  )
}

export default Address
