import React, { useState } from 'react'
import './Forgot.scss'
import { BiShow, BiHide } from 'react-icons/bi'
import 'animate.css'

const Forgot = ({ showPassword, handleShowPasswordButton }) => {
  const [showVerifyInput, setShowVerifyInput] = useState(false)

  const handleShowVerifyInput = () => {
    setShowVerifyInput(!showVerifyInput)
  }

  return (
    <div className="forgot-place">
      <h1>Forgot</h1>
      <form className='form-place'>
        <input
          className='input-box'
          type="email"
          name="userEmail"
          id="userEmail"
          placeholder='Email'
        />
        {
          showVerifyInput &&
          (
            <>
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
              <input
                className='input-box'
                type="text"
                name="verify"
                id="verify"
                placeholder='請輸入驗證碼'
              />
            </>
          )
        }
        <div className="submit-place">
          <input
            className='input-submit'
            type="button"
            value={showVerifyInput ? '重新設定密碼' : '驗證'}
            onClick={handleShowVerifyInput}
          />
        </div>
      </form>
    </div>
  )
}

export default Forgot
