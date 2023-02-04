import React from 'react'
import './MemberSetting.scss'

const MemberSetting = () => {
  return (
    <div className="setting-place">
      <h3>帳號設定</h3>
      <div className='setting-input-place'>
        <div className='input-place'>
          <div className='label-place'>
            <label htmlFor="userFirstName">姓</label>
            <input type="text" name='userFirstName' id='userFirstName' />
          </div>
          <div className='label-place'>
            <label htmlFor="userLastName">名</label>
            <input type="text" name='userLastName' id='userLastName' />
          </div>
          <div className='label-place'>
            <label htmlFor="sex">性別</label>
            <select name='sex' id='sex'>
              <option>-請選擇-</option>
              <option value="m">男</option>
              <option value="f">女</option>
              <option value="o">其他</option>
            </select>
          </div>
        </div>
        <div className='input-place'>
          <div className='label-place'>
            <label htmlFor="userBirthday">出生日期</label>
            <input type="date" name='userBirthday' id='userBirthday' />
          </div>
          <div className='label-place'>
            <label htmlFor="nation">國家</label>
            <select name='nation' id='nation'>
              <option value="taiwan">台灣</option>
            </select>
          </div>
        </div>
        <div className='input-place'>
          <div className='label-place'>
            <label htmlFor="userTelephone">電話</label>
            <input type="number" name='userTelephone' id='userTelephone' />
          </div>
          <div className='label-place'>
            <label htmlFor="userEmail">聯絡 E-mail</label>
            <input type="email" name="userEmail" id="userEmail" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default MemberSetting
