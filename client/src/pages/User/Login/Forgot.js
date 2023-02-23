import React, { useState } from 'react'
import './Forgot.scss'
import { BiShow, BiHide, BiJoystickAlt } from 'react-icons/bi'
import emailjs from 'emailjs-com'
import axios from 'axios'
import md5 from 'md5'
import validator from 'validator'
import { useAlert } from 'hooks/useAlert'

const SERVICE_ID = process.env.REACT_APP_EMAILJS_SERVICE_ID
const TEMPLATE_ID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID
const USER_ID = process.env.REACT_APP_EMAILJS_USER_ID

const Forgot = ({ showPassword, handleShowPasswordButton }) => {
  const { alert, setAlert } = useAlert()
  const [showVerifyInput, setShowVerifyInput] = useState(false)
  const [showChangePassword, setShowChangePassword] = useState(false)
  const [inputData, setInputData] = useState({
    userEmail: '',
    userPassword: '',
    verify: ''
  })
  const [animation, setAnimation] = useState({
    userEmail: '',
    userPassword: ''
  })

  const handleInputChange = event => (
    setInputData({
      ...inputData,
      [event.target.name]: event.target.value
    })
  )

  // forget system
  const handleForgetPassword = async (event) => {
    event.preventDefault()
    const { userEmail, userPassword, verify } = inputData
    const encryption = md5(userPassword)
    if (inputData.userEmail === '') return ''
    if (!showVerifyInput && !showChangePassword) {
      const checkUserEmail = await axios.post(`${process.env.REACT_APP_DEV_URL}/user/forget`, { userEmail })
      const { state, message, userLastName, key } = checkUserEmail.data
      if (state) {
        setAlert({ state: true, message })
        handleSendEmail(userLastName, key, userEmail)
        setShowVerifyInput(!showVerifyInput)
      } else {
        setAlert({ state: true, message })
      }
    } else if (showVerifyInput && !showChangePassword) {
      if (inputData.verify === '') return ''
      const checkKey = await axios.post(`${process.env.REACT_APP_DEV_URL}/user/forget/checkkey`, { verify })
      const { state, message } = checkKey.data
      if (state) {
        setAlert({ state: true, message })
        setShowVerifyInput(!showVerifyInput)
        setShowChangePassword(!showPassword)
      } else {
        setAlert({ state: true, message })
      }
    } else if (!showVerifyInput && showChangePassword) {
      if (inputData.userPassword === '') return ''
      const changeUserPassword = await axios.post(`${process.env.REACT_APP_DEV_URL}/user/changepassword`, {
        userEmail,
        userPassword: encryption
      })
      const { state, message } = changeUserPassword.data
      if (state) {
        setAlert({ state: true, message })
        location.reload()
        window.location = '/'
        localStorage.removeItem('token')
      }
    }
  }

  // send email
  const handleSendEmail = (userLastName, key, userEmail) => {
    emailjs.send(SERVICE_ID, TEMPLATE_ID, {
      userLastName,
      key,
      userEmail
    }, USER_ID)
  }

  // validator
  const handleEmailIsTrue = (event) => {
    const email = event.target.value
    if (!validator.isEmail(email)) {
      setAnimation({
        ...animation,
        [event.currentTarget.id]: 'animate__animated animate__shakeX alert-style'
      })
      setAlert({ state: true, message: `信箱格式錯誤！` })
    }
  }
  const handlePassword = (event) => {
    const password = event.target.value
    if (!validator.isStrongPassword(password, {
      minLength: 8,
      minUppercase: 1,
      minNumbers: 1
    })) {
      setAnimation({
        ...animation,
        [event.currentTarget.id]: 'animate__animated animate__shakeX alert-style'
      })
      setAlert({ state: true, message: `密碼長度須為 8 位並包含大寫字母及數字` })
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
    <div className="forgot-place">
      <h1>忘記密碼</h1>
      <form className='form-place' autoComplete='off' onSubmit={handleForgetPassword}>
        <input
          className={`input-box ${animation.userEmail}`}
          type="email"
          name="userEmail"
          id="userEmail"
          placeholder='Email'
          value={inputData.userEmail}
          onChange={handleInputChange}
          onBlur={handleEmailIsTrue}
          onFocus={(event) => handleFocus(event, event.currentTarget.id)}
          autoComplete='off'
          required
          readOnly={showVerifyInput || showChangePassword}
        />
        {
          showVerifyInput &&
          (
            <>
              <input
                className='input-box'
                type="text"
                name="verify"
                id="verify"
                placeholder='請輸入驗證碼'
                value={inputData.verify}
                onChange={handleInputChange}
                autoComplete='off'
                required
              />
            </>
          )
        }
        {
          showChangePassword &&
          (
            <div className='input-password' >
              <input
                className={`input-box ${animation.userPassword}`}
                type={showPassword ? 'text' : 'password'}
                name="userPassword"
                id="userPassword"
                placeholder='請輸入新密碼'
                value={inputData.userPassword}
                onChange={handleInputChange}
                onBlur={handlePassword}
                onFocus={(event) => handleFocus(event, event.currentTarget.id)}
                autoComplete='off'
                required
              />
              {
                showPassword
                  ? (
                    <BiHide
                      className='show-password-icon'
                      size={25}
                      onClick={handleShowPasswordButton}
                    />
                  )
                  : (
                    <BiShow
                      className='show-password-icon'
                      size={25}
                      onClick={handleShowPasswordButton}
                    />
                  )
              }
            </div >
          )
        }
        <div className="submit-place">
          <input
            className='input-submit'
            type="submit"
            value={
              !showVerifyInput && !showChangePassword
                ? '寄出驗證碼'
                : (
                  showVerifyInput && !showChangePassword
                    ? '證碼'
                    : (!showVerifyInput && showChangePassword && '更改密碼')
                )}
          />
        </div>
        <div className='alert-place'>
          {alert && alert.message}
        </div>
      </form>
    </div>
  )
}

export default Forgot
