import React, { useState } from 'react'
import './MemberSetting.scss'
import DynamicSelect from '../../../components/Select/DynamicSelect'

const MemberSetting = () => {
  const [changeInputType, setChangeInputType] = useState('text')

  return (
    <div className="setting-place">
      <h3>帳號設定</h3>
      <hr />
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
        </div>
        <div className='input-place'>
          <div className='label-place'>
            <label htmlFor="userBirthday">出生日期</label>
            <input
              type={changeInputType}
              name='userBirthday'
              id='userBirthday'
              placeholder='YYYY-MM-DD'
              onFocus={() => setChangeInputType('date')}
              onBlur={() => setChangeInputType()}
            />
          </div>
          <div className='label-place'>
            <label htmlFor="sex">性別</label>
            <select name='sex' id='sex'>
              <option>--- 請選擇 ---</option>
              <option value="男">男</option>
              <option value="女">女</option>
              <option value="其他">其他</option>
            </select>
          </div>
        </div>
        <div className='input-place'>
          <div className='label-place'>
            <label htmlFor="nation">國家</label>
            <select name='nation' id='nation'>
              <option value="taiwan">臺灣</option>
            </select>
          </div>
          {
            <DynamicSelect />
          }
        </div>
        <div className='input-place'>
          <div className='label-place'>
            <label htmlFor="userAddress">地址</label>
            <input type="text" name="userAddress" id="userAddress" />
          </div>
        </div>
        <div className='input-place'>
          <div className='label-place'>
            <label htmlFor="userTelephone">電話</label>
            <input type="text" name='userTelephone' id='userTelephone' />
          </div>
          <div className='label-place'>
            <label htmlFor="userEmail">聯絡 E-mail</label>
            <input type="email" name="userEmail" id="userEmail" />
          </div>
        </div>
        <div className="input-place">
          <div className="label-place">
            <input type="submit" value="儲存" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default MemberSetting
