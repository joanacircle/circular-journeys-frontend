import { useState } from 'react'
import './EditAddress.scss'


const AddAddress = ({ showAddAddress, setShowAddAddress, setAddresses, userId }) => {

  const [inputData, setInputData] = useState({})

  const handleInputChange = (event) => {
    setInputData({
      ...inputData,
      [event.target.name]: event.target.value
    })
  }

  const handleSubmit = async () => {
    try {
      // const memberId = userId
      const memberId = '104709174078800080046'
      const response = await fetch(`${process.env.REACT_APP_DEV_URL}/checkout`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ member_id: memberId, ...inputData })
      })
      const newAddress = await response.json()
      setAddresses(newAddress)
      setInputData({})
      setShowAddAddress(false)
    } catch (error) {
      console.log(`Error adding address: ${error}`)
    }
  }

  return (
    <div className="setting-place">
      <h3>新增地址</h3>
      <hr />
      <div className='setting-input-place'>
        <form>
          <div className='input-place'>

            <div className='label-place' >
              <label htmlFor="user_name">姓名</label>
              <input
                type="text"
                name='user_name'
                id='user_name'
                onChange={handleInputChange}
                placeholder='王小明'

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
              <label htmlFor="districts">區域</label>
              <input
                type="text"
                name="districts"
                id="districts"
                onChange={handleInputChange}
                placeholder='中正區'
                required
              />
            </div>
            <div className='label-place'>
              <label htmlFor="postal_code">郵遞區號</label>
              <input
                type="text"
                name="postal_code"
                id="postal_code"
                onChange={handleInputChange}
                placeholder='100'
                required
              />
            </div>

          </div>


          <div className='input-place'>
            <div className='label-place'>
              <label htmlFor="user_contact">電話</label>
              <input
                type="text"
                name='user_contact'
                id='user_contact'
                onChange={handleInputChange}
                placeholder='0912345678'
                required
              />
            </div>

          </div>

        </form>
      </div >
      <div className='button-group'>
        <button className='address-cancel' onClick={() => setShowAddAddress(false)}>取消</button>
        <button className='address-save' onClick={handleSubmit}>儲存</button>
      </div>

    </div >
  )
}

export default AddAddress
