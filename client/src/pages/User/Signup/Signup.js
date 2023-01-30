import React from 'react'
import { Link } from 'react-router-dom'
import './Signup.scss'

const Signup = () => {
  return (
    <div className="signup-place">
      <div className="col">
        <h1>Signup</h1>
        <form>
          <div>
            <label htmlFor="userFirstName">姓：</label>
            <input
              type="text"
              id="userFirstName"
              name="userFirstName"
              required
            />
            <label htmlFor="userLastName">名：</label>
            <input
              type="text"
              id="userLastName"
              name="userLastName"
              required
            />
          </div>
          <div>
            <label htmlFor="userEmail">信箱：</label>
            <input
              type="email"
              id="userEmail"
              name="userEmail"
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
              required
            />
          </div>
          <div>
            <label htmlFor="userSex">性別：</label>
            <select name="userSex" id="userSex" required>
              <option>請選擇</option>
              <option value="male">男</option>
              <option value="female">女</option>
              <option value="other">其他</option>
            </select>
          </div>
          <div>
            <label htmlFor="userBirthday">生日：</label>
            <input
              type="date"
              id="userBirthday"
              name="userBirthday"
              required
            />
          </div>
          <div>
            <label htmlFor="userCountry">國籍：</label>
            <input
              type="text"
              id="userCountry"
              name="userCountry"
              required
            />
          </div>
          <div>
            <label htmlFor="userCity">城市：</label>
            <input
              type="text"
              id="userCity"
              name="userCity"
              required
            />
          </div>
          <div>
            <label htmlFor="userAddress">地址：</label>
            <input
              type="text"
              id="userAddress"
              name="userAddress"
              required
            />
          </div>
          <div className="btn-place">
            <input className="btn submit-btn" type="submit" value='註冊' />
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
