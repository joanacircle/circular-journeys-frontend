import { useState } from 'react'
import './EditAddress.scss'

const EditAddress = ({ showEditAddress, setShowEditAddress, selectedAddress, setSelectedAddress, setAddresses, userData, setSelectedIndex }) => {

  const [inputData, setInputData] = useState(selectedAddress)

  const handleInputChange = (event) => {
    setInputData({
      ...inputData,
      [event.target.name]: event.target.value
    })
  }

  const handleSubmit = async () => {
    try {
      const memberId = selectedAddress.member_id
      const { id } = selectedAddress
      const response = await fetch(`${process.env.REACT_APP_DEV_URL}/checkout/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ member_id: memberId, ...inputData })
      })
      const updatedAddress = await response.json()
      setAddresses(updatedAddress)
      setSelectedAddress(null)
      setSelectedIndex(null)
      setInputData({})

      setShowEditAddress(false)
    } catch (error) {
      console.log(`Error updating address: ${error}`)
    }
  }

  return (
    <div className="setting-place">
      <h3>編輯地址</h3>
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
                value={inputData.user_name}

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
                value={inputData.address}

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
                value={inputData.nation}
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
                value={inputData.city}
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
                value={inputData.districts}
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
                value={inputData.postal_code}
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
                value={inputData.user_contact}
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
