import React from 'react'
import './SignupModal.scss'
import { BiShow, BiHide } from 'react-icons/bi'

const SignupModal = ({ setSignupModal, showPassword, setShowPassword, handleShowPasswordButton, handleToggleSignupModal }) => {
  return (
    <div className="signup-place">
      <h1>Signup</h1>
      <form className='form-place'>
        <div className='input-name-place'>
          <input
            className='input-box input-name'
            type="text"
            name="userFirstName"
            id="userFirstName"
            placeholder='姓'
          />
          <input
            className='input-box input-name'
            type="text"
            name="userLastName"
            id="userLastName"
            placeholder='名'
          />
        </div>
        <input
          className='input-box'
          type="email"
          name="userEmail"
          id="userEmail"
          placeholder='登入信箱'
        />
        <div className='input-password'>
          <input
            className='input-box'
            type={showPassword ? 'text' : 'password'}
            name="userPassword"
            id="userPassword"
            placeholder='登入密碼'
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
