import React, { useState, useEffect } from 'react'
import './LoginModal.scss'
import 'animate.css'
import SignupModal from '../Signup/SignupModal'
import Forgot from './Forgot'
import { IoCloseSharp } from 'react-icons/io5'
import { FcGoogle } from 'react-icons/fc'
import { BiShow, BiHide, BiArrowBack } from 'react-icons/bi'
import { useAlert } from 'hooks/useAlert'

import firebase from '../../../components/Firebase/firebase'
import 'firebase/compat/auth'
import axios from 'axios'
import md5 from 'md5'
import validator from 'validator'

const LoginModal = ({ handleToggleLoginModal }) => {

  const [signupModal, setSignupModal] = useState(false)
  const [showPassword, setShowPassword] = useState(false)
  const [userForgot, setUserForgot] = useState(false)
  const { alert, setAlert } = useAlert()
  const [inputChange, setInputChange] = useState({})
  const [animation, setAnimation] = useState({
    postalCode: '',
    contact: ''
  })

  // handle input change
  const handelInputChange = (event) => {
    setInputChange({
      ...inputChange,
      [event.target.name]: event.target.value
    })
  }

  // Login
  const handleLogin = async (event) => {
    event.preventDefault()
    const { userEmail, userPassword } = inputChange
    const encryption = md5(userPassword)
    if (userEmail === '' || userPassword === '') return
    const response = await axios.post(`${process.env.REACT_APP_DEV_URL}/user/login`,
      {
        userEmail,
        userPassword: encryption
      }
    )
    if (response.data.state) {
      setTimeout(() => {
        handleToggleLoginModal()
        // save token to localStorage
        localStorage.setItem('token', response.data.token)
        window.location = '/'
      }, 300)
    } else {
      setAlert({ state: true, message: response.data.message })
    }
  }

  // Login witch google acc
  const SignInWitchGoogle = async () => {
    const provider = new firebase.auth.GoogleAuthProvider()
    const url = `${process.env.REACT_APP_DEV_URL}/user/google/signup`
    try {
      const result = await firebase.auth().signInWithPopup(provider)
      const userProfile = result.additionalUserInfo.profile
      const { name, email, picture, id } = userProfile
      if (result.additionalUserInfo.isNewUser) {
        const signupState = await axios.post(url, {
          userEmail: email,
          userName: name,
          userPicture: picture,
          userId: id
        })
        setTimeout(() => {
          handleToggleLoginModal()
          // save token to localStorage
          localStorage.setItem('token', signupState.data.token)
          window.location = '/'
        }, 300)
      } else {
        const loginUrl = `${process.env.REACT_APP_DEV_URL}/user/google/login`
        const response = await axios.post(loginUrl, { id })
        setTimeout(() => {
          handleToggleLoginModal()
          // save token to localStorage
          localStorage.setItem('token', response.data.token)
          window.location = '/'
        }, 300)
      }
    } catch (err) {
      console.log(err)
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

  const handleFocus = (event, id) => {
    event.currentTarget.id === id &&
      setAnimation({
        ...animation,
        [event.currentTarget.id]: ''
      })
  }

  // handle modal change
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
    <>
      <div
        className="login-modal-background"
        onClick={handleCloseLoginModal}
      >
        <div
          className='login-modal-content animate__animated animate__faster animate__bounceIn'
        >
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
                    setUserForgot={setUserForgot}
                    userForgot={userForgot}
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
                        <h1>登入</h1>
                        <form className='form-place' onSubmit={handleLogin}>
                          <input
                            className={`input-box ${animation.userEmail}`}
                            type="email"
                            name="userEmail"
                            id="userEmail"
                            placeholder='Email'
                            onChange={handelInputChange}
                            onBlur={handleEmailIsTrue}
                            onFocus={(event) => handleFocus(event, event.currentTarget.id)}
                          />
                          <div className='input-password'>
                            <input
                              className={`input-box ${animation.userPassword}`}
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
                            <div className='alert-place'>
                              {alert.state && alert.message}
                            </div>
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
                                onClick={SignInWitchGoogle}
                              >
                                <FcGoogle size={25} />
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
    </>
  )
}

export default LoginModal
