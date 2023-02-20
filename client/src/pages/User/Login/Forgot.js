import React, { useState } from 'react'
import './Forgot.scss'
import { BiShow, BiHide, BiJoystickAlt } from 'react-icons/bi'
import emailjs from 'emailjs-com'
import axios from 'axios'
import md5 from 'md5'
import { useAlert } from 'hooks/useAlert'

const SERVICE_ID = 'service_5e8lybs'
const TEMPLATE_ID = 'template_2lwe4ki'
const USER_ID = '-vbZj77MLC0lL8jeQ'

const Forgot = ({ showPassword, handleShowPasswordButton }) => {
  const { alert, setAlert } = useAlert()
  const [showVerifyInput, setShowVerifyInput] = useState(false)
  const [showChangePassword, setShowChangePassword] = useState(false)
  const [inputData, setInputData] = useState({
    userEmail: '',
    userPassword: '',
    verify: ''
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
      const checkUserEmail = await axios.post('http://localhost:3001/user/forget', { userEmail })
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
      const checkKey = await axios.post('http://localhost:3001/user/forget/checkkey', { verify })
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
      const changeUserPassword = await axios.post('http://localhost:3001/user/changepassword', {
        userEmail,
        userPassword: encryption
      })
      const { state, message } = changeUserPassword.data
      if (state) {
        setAlert({ state: true, message })
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

  return (
    <div className="forgot-place">
      <h1>忘記密碼</h1>
      <form className='form-place' autoComplete='off' onSubmit={handleForgetPassword}>
        <input
          className='input-box'
          type="email"
          name="userEmail"
          id="userEmail"
          placeholder='Email'
          value={inputData.userEmail}
          onChange={handleInputChange}
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
                className='input-box'
                type={showPassword ? 'text' : 'password'}
                name="userPassword"
                id="userPassword"
                placeholder='請輸入新密碼'
                value={inputData.userPassword}
                onChange={handleInputChange}
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
