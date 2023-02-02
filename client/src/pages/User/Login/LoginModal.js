import React, { useState } from 'react'
import './LoginModal.scss'
import SignupModal from '../Signup/SignupModal'
import { IoCloseSharp } from 'react-icons/io5'
import { FaFacebookSquare } from 'react-icons/fa'
import { FcGoogle } from 'react-icons/fc'
import { AiFillApple } from 'react-icons/ai'
import { BiShow, BiHide, BiArrowBack } from 'react-icons/bi'


const LoginModal = ({ handleToggleLoginModal }) => {
  const [signupModal, setSignupModal] = useState(false)
  const [showPassword, setShowPassword] = useState(false)

  // Signup modal
  const handleToggleSignupModal = () => {
    setSignupModal(!signupModal)
  }

  const handleCloseLoginModal = (event) => {
    if (event.target === event.currentTarget) {
      handleToggleLoginModal()
    }
  }

  const handleShowPasswordButton = () => {
    setShowPassword(!showPassword)
  }

  return (
    <div
      className="login-modal-background"
      onClick={handleCloseLoginModal}
    >
      <div className="login-modal-content">
        <div className="login-modal-content-background">
          <div className="close-login-button">
            {
              signupModal
                ? (

                  <button
                    onClick={handleToggleSignupModal}>
                    <BiArrowBack size={25} />
                  </button>
                )
                : (

                  <button
                    onClick={handleToggleLoginModal}>
                    <IoCloseSharp size={25} />
                  </button>
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

                <div className="login-place">
                  <h1>Login</h1>
                  <form className='form-place'>
                    <input
                      className='input-box'
                      type="email"
                      name="userEmail"
                      id="userEmail"
                      placeholder='Email'
                    />
                    <div className='input-password'>
                      <input
                        className='input-box'
                        type={showPassword ? 'text' : 'password'}
                        name="userPassword"
                        id="userPassword"
                        placeholder='Password'
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
                      <div className="check-box">
                        <input
                          type="checkbox"
                          name="remember"
                          id="remember"
                        />
                        <label className='text-style' htmlFor='remember'>
                          記住我
                        </label>
                      </div>
                      <div>
                        <a
                          className='text-style'
                          onClick={handleToggleSignupModal}
                        >
                          加入會員？
                        </a>
                        <a className='text-style' href="#">忘記密碼？</a>
                      </div>
                    </div>
                    <div className="submit-place">
                      <input
                        className='input-submit'
                        type="submit"
                        value="登入"
                      />
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
          }
        </div>
      </div>
    </div>
  )
}

export default LoginModal
