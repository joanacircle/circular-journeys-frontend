import React, { useState, useEffect, useContext } from 'react'
import './Setting.scss'
import DynamicSelect from '../../../components/Select/DynamicSelect'
import dayjs from 'dayjs'
import { UserContext } from 'hooks/UserContext'

const SettingPage = () => {
  const [changeInputType, setChangeInputType] = useState('text')
  const [inputData, setInputData] = useState({})
  const { context, setContext } = useContext(UserContext)


  const handleInputChange = (event) => {
    setInputData({
      ...inputData,
      [event.target.name]: event.target.value
    })
  }
  useEffect(() => {
    if (context) {
      setInputData({
        ...inputData,
        userFirstName: context.first_name,
        userLastName: context.last_name,
        userBirthday: dayjs(context.birthday).format('YYYY-MM-DD'),
        sex: context.sex,
        userAddress: context.address,
        userTelephone: context.telephone,
        userEmail: context.email
      })
    }
  }, [context])

  return (
    <div className="setting-place animate__animated animate__fadeInLeft animate__faster">
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
                value={inputData.userFirstName}
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
                value={inputData.userLastName}
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
                value={inputData.userBirthday}
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
                value={inputData.sex}
                onChange={handleInputChange}
                required
              >
                <option>--- 請選擇 ---</option>
                <option value="m">男</option>
                <option value="f">女</option>
                <option value="o">其他</option>
              </select>
            </div>
          </div>
          <div className='input-place'>
            {
              <DynamicSelect
                inputData={inputData}
                setInputData={setInputData}
                context={context}
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
                value={inputData.userAddress}
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
                value={inputData.userTelephone}
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
                value={inputData.userEmail}
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
      </div >
    </div >
  )
}

export default SettingPage
