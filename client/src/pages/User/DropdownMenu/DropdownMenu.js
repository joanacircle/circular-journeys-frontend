import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './DropdownMenu.scss'
import 'animate.css'
import { FaUserAlt } from 'react-icons/fa'
import { AiOutlineLike } from 'react-icons/ai'
import { IoSettingsOutline, IoNotificationsOutline } from 'react-icons/io5'
import { HiOutlineTicket } from 'react-icons/hi'
import { MdOutlineAttachMoney } from 'react-icons/md'
import { CgNotes } from 'react-icons/cg'
import { BiMessageRoundedCheck } from 'react-icons/bi'
import { SlBadge } from 'react-icons/sl'


const DropdownMenu = ({ userMenu, setUserMenu }) => {
  const handleToggleUserMenu = (event) => {
    if (event.target === event.currentTarget) {
      setUserMenu(!userMenu)
    }
  }
  return (
    <div className='dropdown-background'
      onClick={handleToggleUserMenu}
    >
      <div className="user-dropdown-menu">
        <div className='menu-place'>
          <Link className='menu-option' to='#'>
            <div className='user-name'>
              <FaUserAlt size={35} />
              <h5>Alan Chou</h5>
            </div>
            <IoSettingsOutline size={20} />
          </Link>
          <div className='divider'></div>
          <Link className='menu-option' to='#'>
            <div className='user-name'>
              <SlBadge size={20} />
              <p>Points</p>
            </div>
            <div className='points'>$2,500</div>
          </Link>
          <Link className='menu-option' to='#'>
            <div className='user-name'>
              <IoNotificationsOutline size={20} />
              <p>通知</p>
            </div>
            <div className='message'>10</div>
          </Link>
          <Link className='menu-option' to='#'>
            <div className='user-name'>
              <HiOutlineTicket size={20} />
              <p>折扣卷</p>
            </div>
            <div className='ticket'>3</div>
          </Link>
          <Link className='menu-option' to='#'>
            <div className='user-name'>
              <BiMessageRoundedCheck size={20} />
              <p>訊息管理</p>
            </div>
          </Link>
          <Link className='menu-option' to='#'>
            <div className='user-name'>
              <CgNotes size={20} />
              <p>訂單管理</p>
            </div>
          </Link>
          <Link className='menu-option' to='#'>
            <div className='user-name'>
              <MdOutlineAttachMoney size={20} />
              <p>消費紀錄</p>
            </div>
          </Link>
          <Link className='menu-option' to='#'>
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
    </div>
  )
}

export default DropdownMenu
