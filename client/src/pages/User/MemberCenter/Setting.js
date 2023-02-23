import React, { useState, useEffect } from 'react'
import './Setting.scss'

// library
import dayjs from 'dayjs'
import axios from 'axios'
import validator from 'validator'

// components
import { userInfo } from 'components/userInfo/UserInfo'
import { useAlert } from 'hooks/useAlert'

const SettingPage = () => {
  // get user data
  const { userData } = userInfo()
  // alert
  const { alert, setAlert } = useAlert()

  useEffect(() => {
    const { user_name, user_nickname, birthday, sex, telephone, contact_email } = userData
    setInputData({
      userName: user_name || '',
      userNickName: user_nickname || '',
      userBirthday: dayjs(birthday).format('YYYY-MM-DD') || '',
      sex: sex || '',
      userTelephone: telephone || '',
      userContactEmail: contact_email || ''
    })
  }, [userData])

  const [inputData, setInputData] = useState({
    userName: '',
    userNickName: '',
    userBirthday: new Date().toISOString().slice(0, 10),
    sex: '',
    userTelephone: '',
    userContactEmail: ''
  })

  // set animation
  const [animation, setAnimation] = useState({
    userTelephone: '',
    userContactEmail: ''
  })

  // handle change
  const handleInputChange = (event) => {
    setInputData({
      ...inputData,
      [event.target.name]: event.target.value
    })
  }

  // handle edit info
  const handleSubmit = async (event) => {
    event.preventDefault()
    const { member_id } = userData
    const { userName, userNickName, userBirthday, sex, userTelephone, userContactEmail } = inputData
    try {
      const response = await axios.post(`${process.env.REACT_APP_DEV_URL}/user/setting`, {
        member_id,
        userName,
        userNickName,
        userBirthday: dayjs(userBirthday).format('YYYY-MM-DD'),
        sex,
        userTelephone,
        userContactEmail
      })
      const { state, message } = response.data
      state &&
        setAlert({ state: true, message })
      setTimeout(() => {
        location.reload()
      }, 500)
    } catch (err) {
      console.log(err)
    }
  }

  // validator
  const handleContactIsTrue = (event) => {
    const contact = event.target.value
    !validator.isMobilePhone(contact, 'zh-TW') &&
      setAnimation({
        ...animation,
        [event.currentTarget.id]: 'animate__animated animate__shakeX alert-style'
      })
  }
  const handleEmailIsTrue = (event) => {
    const email = event.target.value
    if (!validator.isEmail(email)) {
      setAnimation({
        ...animation,
        [event.currentTarget.id]: 'animate__animated animate__shakeX alert-style'
      })
    }
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
      <h3>帳號設定</h3>
      <hr />
      <div className='input-place'>
        <form onSubmit={handleSubmit}>
          <div className='input-place'>
            <div className='label-place'>
              <label htmlFor="userName">姓名</label>
              <input
                type="text"
                name='userName'
                id='userName'
                value={inputData.userName || ''}
                onChange={handleInputChange}
                placeholder='王小明'
                maxLength={10}
              />
            </div>
            <div className='label-place'>
              <label htmlFor="userNickName">暱稱</label>
              <input
                type="text"
                name='userNickName'
                id='userNickName'
                value={inputData.userNickName || ''}
                onChange={handleInputChange}
                placeholder='阿明'
                maxLength={10}
              />
            </div>
          </div>
          <div className='input-place'>
            <div className='label-place'>
              <label htmlFor="userBirthday">出生日期</label>
              <input
                type='date'
                name='userBirthday'
                id='userBirthday'
                title='YYYY-MM-DD'
                value={inputData.userBirthday || ''}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className='label-place'>
              <label htmlFor="sex">性別</label>
              <select
                name='sex'
                id='sex'
                value={inputData.sex || ''}
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
            <div className='label-place'>
              <label htmlFor="userTelephone">電話</label>
              <input
                type="text"
                name='userTelephone'
                id='userTelephone'
                className={animation.userTelephone}
                value={inputData.userTelephone || ''}
                onChange={handleInputChange}
                onBlur={handleContactIsTrue}
                onFocus={(event) => handleFocus(event, event.currentTarget.id)}
                placeholder='0912345678'
                required
              />
            </div>
            <div className='label-place'>
              <label htmlFor="userContactEmail">聯絡 E-mail</label>
              <input
                type="email"
                name="userContactEmail"
                id="userContactEmail"
                className={animation.userContactEmail}
                value={inputData.userContactEmail || ''}
                onChange={handleInputChange}
                onBlur={handleEmailIsTrue}
                onFocus={(event) => handleFocus(event, event.currentTarget.id)}
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
          <div className='alert'>
            {alert.state && alert.message}
          </div>
        </form>
      </div >
    </div >
  )
}

export default SettingPage
