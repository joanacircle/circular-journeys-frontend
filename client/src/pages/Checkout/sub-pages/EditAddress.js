import { useState } from 'react'
import DynamicSelect from '../../../components/Select/DynamicSelect'
import './EditAddress.scss'


const EditAddress = ({ showEditAddress, setShowEditAddress }) => {

  const [inputData, setInputData] = useState({})

  const handleInputChange = (event) => {
    setInputData({
      ...inputData,
      [event.target.name]: event.target.value
    })
  }
  return (
    <div className="setting-place">
      <h3>運送地址</h3>
      <hr />


      <div className='setting-input-place'>
        <form>
          <div className='input-place'>
            <div className='label-place'>
              <label htmlFor="userFirstName">姓</label>
              <input
                type="text"
                name='userFirstName'
                id='userFirstName'
                onChange={handleInputChange}
                placeholder='王'
              />
            </div>
            <div className='label-place' >
              <label htmlFor="userLastName">名</label>
              <input
                type="text"
                name='userLastName'
                id='userLastName'
                onChange={handleInputChange}
                placeholder='小明'
              />
            </div>
          </div>
          <div className='input-place'>
            <div className='label-place'>
              <label htmlFor="userAddress">街/道</label>
              <input
                type="text"
                name="userAddress"
                id="userAddress"
                onChange={handleInputChange}
                placeholder='忠孝東路一段101號'
                required
              />
            </div>
            <div className='label-place'>
              <label htmlFor="userAddress">郵遞區號</label>
              <input
                type="text"
                required
              />
            </div>
          </div>
          <div className='input-place'>
            {
              <DynamicSelect
                className='d-select'
                inputData={inputData}
                handleInputChange={handleInputChange}
              />
            }
          </div>

          <div className='input-place'>
            <div className='label-place'>
              <label htmlFor="userTelephone">電話</label>
              <input
                type="text"
                name='userTelephone'
                id='userTelephone'
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
        <button className='address-save' onClick={() => setShowEditAddress(false)}>儲存</button>
      </div>

    </div >
  )
}

export default EditAddress
