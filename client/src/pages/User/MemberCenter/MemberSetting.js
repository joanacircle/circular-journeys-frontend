import React, { useState, useEffect } from 'react'
import './MemberSetting.scss'
import DynamicSelect from '../../../components/Select/DynamicSelect'

const MemberSetting = () => {
  const [changeInputType, setChangeInputType] = useState('text')
  const [inputData, setInputData] = useState({})

  const handleInputChange = (event) => {
    setInputData({
      ...inputData,
      [event.target.name]: event.target.value
    })
  }

  return (
    <div className="setting-place animate__animated animate__fadeInDown">
      <h3>帳號設定</h3>
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
            <div className='label-place'>
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
              <label htmlFor="userBirthday">出生日期</label>
              <input
                type={changeInputType}
                name='userBirthday'
                id='userBirthday'
                placeholder='YYYY-MM-DD'
                onFocus={() => setChangeInputType('date')}
                onBlur={() => setChangeInputType()}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className='label-place'>
              <label htmlFor="sex">性別</label>
              <select
                name='sex'
                id='sex'
                onChange={handleInputChange}
                required
              >
                <option>--- 請選擇 ---</option>
                <option value="男">男</option>
                <option value="女">女</option>
                <option value="其他">其他</option>
              </select>
            </div>
          </div>
          <div className='input-place'>
            {
              <DynamicSelect
                inputData={inputData}
                setInputData={setInputData}
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
                onChange={handleInputChange}
                placeholder='忠孝東路一段101號'
                required
              />
            </div>
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
            <div className='label-place'>
              <label htmlFor="userEmail">聯絡 E-mail</label>
              <input
                type="email"
                name="userEmail"
                id="userEmail"
                onChange={handleInputChange}
                placeholder='example@gmail.com'
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
      </div>
    </div>
  )
}

export default MemberSetting
