import React, { useState } from 'react'
import './SignupModal.scss'
import { BiShow, BiHide } from 'react-icons/bi'
import axios from 'axios'
import md5 from 'md5'
import validator from 'validator'
import { useAlert } from 'hooks/useAlert'

const SignupModal = ({ showPassword, handleShowPasswordButton }) => {
  const { alert, setAlert } = useAlert()
  const [inputData, setInputData] = useState({
    userName: '',
    userNickName: '',
    userEmail: '',
    userPassword: ''
  })
  const [animation, setAnimation] = useState({
    userEmail: '',
    userPassword: ''
  })
  const handleInputData = (event) => {
    setInputData({
      ...inputData,
      [event.target.name]: event.target.value
    })
  }
  const handleSignup = async (event) => {
    event.preventDefault()
    const { userName, userNickName, userEmail, userPassword } = inputData
    const encryption = md5(userPassword)
    if (userName === '' || userNickName === '' || userEmail === '' || userPassword === '') return
    const response = await axios.post(`${process.env.REACT_APP_DEV_URL}/user/signup`, {
      userName,
      userNickName,
      userEmail,
      userPassword: encryption
    })
    if (response.data.state) {
      localStorage.setItem('token', response.data.token)
      window.location = '/'
    } else {
      setAlert({ state: true, message: response.data.message })
    }
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
    <div className="signup-place">
      <h1>註冊</h1>
      <form className='form-place' onSubmit={handleSignup}>
        <div className='input-name-place'>
          <input
            className='input-box input-name'
            type="text"
            name="userName"
            id="userName"
            value={inputData.userName}
            onChange={handleInputData}
            placeholder='姓名'
            required
          />
          <input
            className='input-box input-name'
            type="text"
            name="userNickName"
            id="userNickName"
            value={inputData.userNickName}
            onChange={handleInputData}
            placeholder='暱稱'
            required
          />
        </div>
        <input
          className={`input-box ${animation.userEmail}`}
          type="email"
          name="userEmail"
          id="userEmail"
          value={inputData.userEmail}
          onChange={handleInputData}
          onBlur={handleEmailIsTrue}
          onFocus={(event) => handleFocus(event, event.currentTarget.id)}
          placeholder='登入信箱'
          required
        />
        <div className='input-password'>
          <input
            className={`input-box ${animation.userPassword}`}
            type={showPassword ? 'text' : 'password'}
            name="userPassword"
            id="userPassword"
            value={inputData.userPassword}
            onChange={handleInputData}
            onBlur={handlePassword}
            onFocus={(event) => handleFocus(event, event.currentTarget.id)}
            placeholder='登入密碼'
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
        </div>
        <p className='alert-place'>{alert && alert.message}</p>
        <div className="submit-place">
          <input
            className='input-submit'
            type="submit"
            value="註冊"
          />
        </div>
      </form>
    </div>
  )
}

export default SignupModal
