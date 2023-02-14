import React, { useState } from 'react'
import './SignupModal.scss'
import { BiShow, BiHide } from 'react-icons/bi'
import { useIsLoggedIn } from 'hooks/useIsLoggedIn'
import axios from 'axios'
import md5 from 'md5'

const SignupModal = ({ showPassword, handleShowPasswordButton }) => {
  const [inputData, setInputData] = useState({
    userFirstName: '',
    userLastName: '',
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
    const { userFirstName, userLastName, userEmail, userPassword } = inputData
    const encryption = md5(userPassword)
    if (userFirstName === '' || userLastName === '' || userEmail === '' || userPassword === '') return
    const response = await axios.post('http://localhost:3001/user/signup', {
      userFirstName,
      userLastName,
      userEmail,
      userPassword: encryption
    })
    if (response.data.state) {
      alert(response.data.message)
      localStorage.setItem('token', response.data.token)
      window.location = '/'
    } else {
      alert(response.data.message)
    }
  }
  return (
    <div className="signup-place">
      <h1>Signup</h1>
      <form className='form-place' onSubmit={handleSignup}>
        <div className='input-name-place'>
          <input
            className='input-box input-name'
            type="text"
            name="userFirstName"
            id="userFirstName"
            value={inputData.userFirstName}
            onChange={handleInputData}
            placeholder='姓'
            required
          />
          <input
            className='input-box input-name'
            type="text"
            name="userLastName"
            id="userLastName"
            value={inputData.userLastName}
            onChange={handleInputData}
            placeholder='名'
            required
          />
        </div>
        <input
          className='input-box'
          type="email"
          name="userEmail"
          id="userEmail"
          value={inputData.userEmail}
          onChange={handleInputData}
          placeholder='登入信箱'
          required
        />
        <div className='input-password'>
          <input
            className='input-box'
            type={showPassword ? 'text' : 'password'}
            name="userPassword"
            id="userPassword"
            value={inputData.userPassword}
            onChange={handleInputData}
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
