import React, { useState } from 'react'
import './LoginModal.scss'
import { IoCloseSharp } from 'react-icons/io5'
import { FaFacebookSquare } from 'react-icons/fa'
import { FcGoogle } from 'react-icons/fc'
import { AiFillApple, AiOutlineMail } from 'react-icons/ai'


const LoginModal = ({ handleToggleLoginModal }) => {
  const [signupModal, setSignupModal] = useState(false)

  // Signup modal
  const handleToggleSignupModal = () => {
    setSignupModal(!signupModal)
  }

  const handleCloseLoginModal = (event) => {
    if (event.target === event.currentTarget) {
      handleToggleLoginModal()
    }
  }

  return (
    <div
      className="login-modal-background"
      onClick={handleCloseLoginModal}
    >
      <div className="login-modal-content">
        <div className="login-modal-content-background">
          <div className="close-login-button">
            <button
              onClick={handleToggleLoginModal}>
              <IoCloseSharp size={25} />
            </button>
          </div>
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
              <input
                className='input-box'
                type="password"
                name="userPassword"
                id="userPassword"
                placeholder='Password'
              />
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
        </div>
      </div>
    </div>
  )
}

export default LoginModal
