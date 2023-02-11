import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const OrderDetail = () => {
  const navigate = useNavigate()

  const handleLinkClick = (path) => {
    navigate(path)
  }

  return (
    <>
      <h5>完成付款</h5>
      <p>您的購物單為 xxx</p>
      <Link to='/shop' onClick={() => handleLinkClick('/shop')}>繼續購物</Link>
      <Link to='/' onClick={() => handleLinkClick('/')}>回到Circular Circle 首頁</Link>
    </>
  )
}

export default OrderDetail
