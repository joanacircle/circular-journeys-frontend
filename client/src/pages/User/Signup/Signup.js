import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import './Signup.scss'

const url = 'http://localhost:3002/api/user/signup'

const Signup = () => {
  const [inputValue, setInputValue] = useState({})
  const [inputType, setInputType] = useState('text')

  const handleInputChange = (event) => {
    const { name, value } = event.target
    setInputValue({ ...inputValue, [name]: value })
  }

  const isObjectEmpty = (obj) => {
    for (const key in obj) {
      if (!obj[key]) return false
    }
    return true
  }

  const handleSubmitButton = () => {
    if (isObjectEmpty(inputValue)) return
    axios.post(url, inputValue)
      .then(res => {
        const data = res.data
        console.log(data)
        if (data.state) {
          alert(data.message)
          location.href = '/'
        } else {
          alert(data.message)
          location.href = '/signup'
        }
      })
    setInputValue({})
  }

  return (
    <div className="background">
      <div className="background-rgba">
        <div className="background-img">
          <div className="signup-place">
            <div className="row">
              <div className="col">
                <h1>Signup</h1>
                <form method="post">
                  <div>
                    <input
                      type="text"
                      id="userFirstName"
                      name="userFirstName"
                      onChange={handleInputChange}
                      placeholder='姓'
                      required
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      id="userLastName"
                      name="userLastName"
                      onChange={handleInputChange}
                      placeholder='名'
                      required
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      id="userEmail"
                      name="userEmail"
                      onChange={handleInputChange}
                      placeholder='信箱'
                      required
                    />
                  </div>
                  <div>
                    <input
                      type="password"
                      id="userPassword"
                      name="userPassword"
                      onChange={handleInputChange}
                      placeholder='密碼'
                      required
                    />
                  </div>
                  <div>
                    <select name="userSex" id="userSex" onChange={handleInputChange} required>
                      <option disabled selected>性別</option>
                      <option value="m">男</option>
                      <option value="f">女</option>
                      <option value="o">其他</option>
                    </select>
                  </div>
                  <div>
                    <input
                      type="text"
                      id="userTelephone"
                      name="userTelephone"
                      onChange={handleInputChange}
                      placeholder='電話'
                      required
                    />
                  </div>
                  <div>
                    <input
                      type={inputType}
                      id="userBirthday"
                      name="userBirthday"
                      onChange={handleInputChange}
                      onFocus={() => setInputType('date')}
                      onBlur={() => setInputType('text')}
                      placeholder={inputType === 'date' ? '' : '生日'}
                      required
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      id="userCountry"
                      name="userCountry"
                      onChange={handleInputChange}
                      placeholder='國籍'
                      required
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      id="userCity"
                      name="userCity"
                      onChange={handleInputChange}
                      placeholder='城市'
                      required
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      id="userAddress"
                      name="userAddress"
                      onChange={handleInputChange}
                      placeholder='地址'
                      required
                    />
                  </div>
                  <div className="btn-place">
                    <input
                      className="btn submit-btn"
                      type="submit"
                      value='註冊'
                      onClick={handleSubmitButton}
                    />
                    <Link to="/login">
                      <input className="btn backto-btn" type="button" value='返回登入' />
                    </Link>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Signup
