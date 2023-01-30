import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import validator from 'validator'
import './Signup.scss'

const url = 'http://localhost:3002/api/user/signup'

const Signup = () => {
  const [inputValue, setInputValue] = useState({})
  // const [error, setError] = useState({})

  const handleInputChange = (event) => {
    const { name, value } = event.target
    setInputValue({ ...inputValue, [name]: value })
  }

  // const validate = () => {
  //   const newErrors = {}
  //   if (!validator.isEmail(inputValue.userEmail)) {
  //     newErrors.email = '輸入無效的信箱，請確認！'
  //   }
  //   if (!validate.isMobilePhone(inputValue.userTelephone, 'zh-TW')) {
  //     newErrors.telephone = '輸入無效的電話！'
  //   }
  //   setError(newErrors)
  //   return Object.keys(newErrors).length === 0
  // }

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
    <div className="signup-place">
      <div className="col">
        <h1>Signup</h1>
        <form method="post">
          <div>
            <label htmlFor="userFirstName">姓：</label>
            <input
              type="text"
              id="userFirstName"
              name="userFirstName"
              onChange={handleInputChange}
              required
            />
            <label htmlFor="userLastName">名：</label>
            <input
              type="text"
              id="userLastName"
              name="userLastName"
              onChange={handleInputChange}
              required
            />
          </div>
          <div>
            <label htmlFor="userEmail">信箱：</label>
            <input
              type="email"
              id="userEmail"
              name="userEmail"
              // value={error.email && error.email}
              onChange={handleInputChange}
              placeholder='example@email.com'
              required
            />
          </div>
          <div>
            <label htmlFor="userPassword">密碼：</label>
            <input
              type="password"
              id="userPassword"
              name="userPassword"
              onChange={handleInputChange}
              required
            />
          </div>
          <div>
            <label htmlFor="userSex">性別：</label>
            <select name="userSex" id="userSex" onChange={handleInputChange} required>
              <option>請選擇</option>
              <option value="m">男</option>
              <option value="f">女</option>
              <option value="o">其他</option>
            </select>
          </div>
          <div>
            <label htmlFor="userTelephone">電話：</label>
            <input
              type="text"
              id="userTelephone"
              name="userTelephone"
              // value={error.telephone && error.telephone}
              onChange={handleInputChange}
              required
            />
          </div>
          <div>
            <label htmlFor="userBirthday">生日：</label>
            <input
              type="date"
              id="userBirthday"
              name="userBirthday"
              onChange={handleInputChange}
              required
            />
          </div>
          <div>
            <label htmlFor="userCountry">國籍：</label>
            <input
              type="text"
              id="userCountry"
              name="userCountry"
              onChange={handleInputChange}
              required
            />
          </div>
          <div>
            <label htmlFor="userCity">城市：</label>
            <input
              type="text"
              id="userCity"
              name="userCity"
              onChange={handleInputChange}
              required
            />
          </div>
          <div>
            <label htmlFor="userAddress">地址：</label>
            <input
              type="text"
              id="userAddress"
              name="userAddress"
              onChange={handleInputChange}
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
  )
}

export default Signup
