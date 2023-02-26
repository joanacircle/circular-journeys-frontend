import { useState } from 'react'
import DynamicSelect from '../../../components/Select/DynamicSelect'
import './EditAddress.scss'


const EditAddress = ({ showEditAddress, setShowEditAddress, handleEditAddress, selectedAddress, userData }) => {

  const [inputData, setInputData] = useState(selectedAddress)

  const handleInputChange = (event) => {
    setInputData({
      ...inputData,
      [event.target.name]: event.target.value
    })
  }

  const handleSubmit = async () => {
    try {
      const memberId = userData.member_id
      const { id } = selectedAddress
      const response = await fetch(`${process.env.REACT_APP_DEV_URL}/checkout/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ member_id: memberId, ...inputData })
      })
      const updatedAddress = await response.json()
      handleEditAddress(updatedAddress)
      setShowEditAddress(false)
    } catch (error) {
      console.log(`Error updating address: ${error}`)
    }
  }

  return (
    <div className="setting-place">
      <h3>運送地址</h3>
      <hr />


      <div className='setting-input-place'>
        <form>
          <div className='input-place'>

            <div className='label-place' >
              <label htmlFor="userName">姓名</label>
              <input
                type="text"
                name='userName'
                id='userName'
                onChange={handleInputChange}
                placeholder='王小明'
                value={inputData.userName}
              />
            </div>
          </div>
          <div className='input-place'>
            <div className='label-place'>
              <label htmlFor="address">街/道</label>
              <input
                type="text"
                name="address"
                id="address"
                onChange={handleInputChange}
                placeholder='忠孝東路一段101號'

                required
              />
            </div>
            <div className='label-place'>
              <label htmlFor="nation">國家</label>
              <input
                type="text"
                name="nation"
                id="nation"
                onChange={handleInputChange}
                placeholder='臺灣'
                required
              />
            </div>
            <div className='label-place'>
              <label htmlFor="city">城市</label>
              <input
                type="text"
                name="city"
                id="city"
                onChange={handleInputChange}
                placeholder='台北市'
                required
              />
            </div>
            <div className='label-place'>
              <label htmlFor="district">區域</label>
              <input
                type="text"
                name="district"
                id="district"
                onChange={handleInputChange}
                placeholder='中正區'
                required
              />
            </div>
            <div className='label-place'>
              <label htmlFor="postalCode">郵遞區號</label>
              <input
                type="text"
                name="postalCode"
                id="postalCode"
                onChange={handleInputChange}
                placeholder='100'
                required
              />
            </div>

          </div>


          <div className='input-place'>
            <div className='label-place'>
              <label htmlFor="telephone">電話</label>
              <input
                type="text"
                name='telephone'
                id='telephone'
                onChange={handleInputChange}
                placeholder='0912345678'
                required
              />
            </div>

          </div>

        </form>
      </div >
      <div className='button-group'>
        <button className='address-cancel' onClick={() => setShowEditAddress(false)}>取消</button>
        <button className='address-save' onClick={handleSubmit}>儲存</button>
      </div>

    </div >
  )
}

export default EditAddress
