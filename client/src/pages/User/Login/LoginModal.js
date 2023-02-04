import React, { useState, useEffect } from 'react'
import './LoginModal.scss'
import 'animate.css'
import SignupModal from '../Signup/SignupModal'
import Forgot from './Forgot'
import { IoCloseSharp } from 'react-icons/io5'
import { FaFacebookSquare } from 'react-icons/fa'
import { FcGoogle } from 'react-icons/fc'
import { AiFillApple } from 'react-icons/ai'
import { BiShow, BiHide, BiArrowBack } from 'react-icons/bi'

const data = {
  testEmail: 'test@gmail.com',
  testPassword: '123456'
}

const LoginModal = ({ handleToggleLoginModal, setUserState, userState }) => {
  const [signupModal, setSignupModal] = useState(false)
  const [showPassword, setShowPassword] = useState(false)
  const [userForgot, setUserForgot] = useState(false)
  const [inputChange, setInputChange] = useState({})

  const handelInputChange = (event) => {
    setInputChange({
      ...inputChange,
      [event.target.name]: event.target.value
    })
  }
  const handleLoginButton = (event) => {
    event.preventDefault()
    if (inputChange.userEmail === data.testEmail && inputChange.userPassword === data.testPassword) {
      alert('登入成功')
      handleToggleLoginModal()
      setUserState(!userState)
    }
  }
  const handleCloseLoginModal = (event) => {
    if (event.target === event.currentTarget) {
      handleToggleLoginModal()
    }
  }
  const handleShowPasswordButton = () => {
    setShowPassword(!showPassword)
  }

  // Signup modal
  const handleToggleSignupModal = () => {
    if (userForgot) {
      setUserForgot(!userForgot)
    } else {
      setSignupModal(!signupModal)
    }
  }
  // Forgot page
  const handleToggleForgotPage = () => {
    setUserForgot(!userForgot)
  }

  return (
    <div
      className="login-modal-background"
      onClick={handleCloseLoginModal}
    >
      <div
        className='login-modal-content animate__animated animate__faster animate__bounceIn
        '>
        <div className="login-modal-content-background">
          <div className="close-login-button">
            {
              signupModal || userForgot
                ? (
                  <div
                    onClick={handleToggleSignupModal}>
                    <BiArrowBack size={30} />
                  </div>
                )
                : (

                  <div
                    onClick={handleToggleLoginModal}>
                    <IoCloseSharp size={30} />
                  </div>
                )
            }
          </div>
          {
            signupModal
              ? (
                <SignupModal
                  setSignupModal={setSignupModal}
                  showPassword={showPassword}
                  setShowPassword={setShowPassword}
                  handleShowPasswordButton={handleShowPasswordButton}
                  handleToggleSignupModal={handleToggleSignupModal}
                />
              )
              : (
                userForgot
                  ? (
                    <Forgot
                      showPassword={showPassword}
                      handleShowPasswordButton={handleShowPasswordButton}
                    />
                  )
                  : (
                    <div className="login-place">
                      <h1>Login</h1>
                      <form className='form-place'>
                        <input
                          className='input-box'
                          type="email"
                          name="userEmail"
                          id="userEmail"
                          placeholder='Email'
                          onChange={handelInputChange}
                        />
                        <div className='input-password'>
                          <input
                            className='input-box'
                            type={showPassword ? 'text' : 'password'}
                            name="userPassword"
                            id="userPassword"
                            placeholder='Password'
                            onChange={handelInputChange}
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
                        <div className="login-option">
                          <div>
                            <a
                              className='text-style'
                              onClick={handleToggleForgotPage}
                            >
                              忘記密碼？
                            </a>
                          </div>
                        </div>
                        <div className="submit-place">
                          <input
                            className='input-submit'
                            type="submit"
                            value="登入"
                            onClick={handleLoginButton}
                          />
                          <a
                            className='text-style'
                            onClick={handleToggleSignupModal}
                          >
                            還未加入會員嗎？立即註冊！
                          </a>
                          <p className='other-login-text'>其他登入方式</p>
                          <div className='other-login-place'>
                            <button
                              className='other-login-btn btn-google'
                              type="button"
                            >
                              <FcGoogle size={25} />
                            </button>
                            <button
                              className='other-login-btn btn-facebook'
                              type="button"
                            >
                              <FaFacebookSquare color='#fff' size={25} />
                            </button>
                            <button
                              className='other-login-btn btn-apple'
                              type="button"
                            >
                              <AiFillApple color='#fff' size={25} />
                            </button>
                          </div>
                        </div>
                      </form>
                    </div>
                  )
              )
          }
        </div>
      </div>
    </div>
  )
}

export default LoginModal
