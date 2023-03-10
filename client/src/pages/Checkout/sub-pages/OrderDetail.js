import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { userInfo } from 'components/userInfo/UserInfo'
import './OrderDetail.scss'

const OrderDetail = () => {
  const navigate = useNavigate()
  const { userData } = userInfo()
  const memberId = userData.member_id
  const orderNumber = `${Date.now()}${memberId}`

  const handleLinkClick = (path) => {
    navigate(path)
  }

  return (
    <>
      <div className='receipt'>
        <h5>訂單已送出!</h5>
        <h5>您的購物單號為 {orderNumber}</h5>
      </div>
      <div className='home-links'>
        <Link
          className='home-link-button'
          to='/'
          onClick={() => handleLinkClick('/')}>回到首頁
        </Link>
        <Link
          className='home-link-button'
          to='/shop'
          onClick={() => handleLinkClick('/shop')}>
          繼續購物
        </Link>

      </div>
    </>
  )
}

export default OrderDetail
