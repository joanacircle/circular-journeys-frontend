import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './DropdownMenu.scss'
import 'animate.css'
import { FaLessThanEqual, FaUserAlt } from 'react-icons/fa'
import { AiOutlineLike } from 'react-icons/ai'
import { IoSettingsOutline, IoNotificationsOutline } from 'react-icons/io5'
import { HiOutlineTicket, HiOutlineShoppingCart } from 'react-icons/hi'
import { MdOutlineAttachMoney } from 'react-icons/md'
import { CgNotes } from 'react-icons/cg'
// import { BiMessageRoundedCheck } from 'react-icons/bi'

const DropdownMenu = ({ handleToggleLoginModal }) => {
  // handleClickOutside
  useEffect(() => {
    const handleClickOutside = (event) => {
      // console.log(event.target.id)
      // console.log(event.target.tagName)
      if (
        !(event.target.id === 'user-menu') &&
        !(event.target.tagName === 'path')
      ) {
        handleToggleLoginModal()
      }
    }
    window.addEventListener('click', handleClickOutside)
    return () => {
      window.removeEventListener('click', handleClickOutside)
    }
  }, [])
  return (
    <div className="user-dropdown-menu animate__animated animate__faster animate__fadeIn">
      <div className='menu-place'>
        <Link className='menu-option' to='/member'>
          <div className='user-name'>
            <FaUserAlt size={35} />
            <div>
              <h5>Alan Chou</h5>
              <h6>管理者</h6>
            </div>
          </div>
          <IoSettingsOutline size={20} />
        </Link>
        <div className='divider'></div>
        <Link className='menu-option' to='/member'>
          <div className='user-name'>
            <MdOutlineAttachMoney size={20} />
            <p>Points</p>
          </div>
          <div className='points'>$9,457</div>
        </Link>
        {/* <Link className='menu-option' to='/member'>
            <div className='user-name'>
              <IoNotificationsOutline size={20} />
              <p>通知</p>
            </div>
            <div className='message'>10</div>
          </Link> */}
        <Link className='menu-option' to='/member'>
          <div className='user-name'>
            <HiOutlineTicket size={20} />
            <p>折扣卷</p>
          </div>
          <div className='ticket'>3</div>
        </Link>
        <div className='divider'></div>
        {/* <Link className='menu-option' to='/member'>
            <div className='user-name'>
              <BiMessageRoundedCheck size={20} />
              <p>訊息管理</p>
            </div>
          </Link> */}
        <Link className='menu-option' to='/member'>
          <div className='user-name'>
            <CgNotes size={20} />
            <p>訂單管理</p>
          </div>
        </Link>
        <Link className='menu-option' to='/member'>
          <div className='user-name'>
            <HiOutlineShoppingCart size={20} />
            <p>消費紀錄</p>
          </div>
        </Link>
        <Link className='menu-option' to='/member'>
          <div className='user-name'>
            <AiOutlineLike size={20} />
            <p>我的收藏</p>
          </div>
        </Link>
        <div className='divider'></div>
        <Link className='menu-option logout-button' to='#'>
          <div className='user-name'>
            <div>登出</div>
          </div>
        </Link>
      </div>
    </div>
  )
}

export default DropdownMenu
