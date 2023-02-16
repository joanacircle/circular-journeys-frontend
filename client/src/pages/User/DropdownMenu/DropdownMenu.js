import React, { useState, useEffect } from 'react'
import { Link, Navigate } from 'react-router-dom'
import axios from 'axios'
import './DropdownMenu.scss'
import 'animate.css'

// icon
import { FaUserAlt } from 'react-icons/fa'
import { IoSettingsOutline } from 'react-icons/io5'
import { HiOutlineShoppingCart } from 'react-icons/hi'
import { BsPersonBadge, BsCreditCard } from 'react-icons/bs'
import { CiEdit } from 'react-icons/ci'
import { AiOutlineLike } from 'react-icons/ai'
import { TfiAnnouncement } from 'react-icons/tfi'
import { CgNotes } from 'react-icons/cg'


const DropdownMenuOptions = {
  info: [
    {
      label: '最新消息',
      icon: <TfiAnnouncement size={20} />
    },
    {
      label: '我的收藏',
      icon: <AiOutlineLike size={20} />
    },
    {
      label: '訂單管理',
      icon: <CgNotes size={20} />
    },
    {
      label: '消費紀錄',
      icon: <HiOutlineShoppingCart size={20} />
    },
    {
      label: '付款設定',
      icon: <BsCreditCard size={20} />
    },
    {
      label: '帳號設定',
      icon: <IoSettingsOutline size={20} />
    }
  ]
}

const DropdownMenu = ({ handleToggleLoginModal }) => {
  const [dropdownOptions, setDropdownOptions] = useState(DropdownMenuOptions)
  const [userData, setUserData] = useState()

  // TODO:
  const handleUserInfo = async () => {
    const token = localStorage.getItem('token')
    const response = await axios.post('http://localhost:3001/user/userinfo', { token })
    if (response.status === 200) {
      setUserData(response.data)
    }
  }

  // handleClickOutside
  useEffect(() => {
    handleUserInfo()
    const handleClickOutside = (event) => {
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

  // handle logout
  const handleLogoutButton = () => {
    // alert('已登出')
    setUserData('')
    localStorage.removeItem('token')
    window.location = '/'
  }

  // handle change page
  const handleMenuLocation = (event) => {
    localStorage.setItem('hoverLabel', event.target.id)
  }

  return (
    <div className="user-dropdown-menu animate__animated animate__faster animate__fadeIn">
      <div className='menu-place'>

        <Link className='menu-option'>
          <div className='user-name'>
            <FaUserAlt size={35} />
            <div className='user-info'>
              <h5>{userData && userData.first_name + ' ' + userData.last_name}</h5>
              <div className='points'>{userData && '$' + ' ' + userData.points}</div>
            </div>
          </div>
        </Link>

        <div className='divider'></div>

        <div>
          {
            dropdownOptions.info.map((item, index) => (
              <Link
                className='menu-option'
                key={index}
                id={item.label}
                to='member'
                onClick={handleMenuLocation}
              >
                <div className='user-name' id={item.label}>
                  {item.icon}
                  <p id={item.label}>{item.label}</p>
                </div>
              </Link>
            ))
          }
        </div>

        <div className='divider'></div>

        {/* for ' circle circle ' */}
        <Link className='menu-option'>
          <div className='user-name'>
            <BsPersonBadge size={20} />
            <p>個人首頁</p>
          </div>
        </Link>

        <Link className='menu-option'>
          <div className='user-name'>
            <CiEdit size={20} />
            <p>撰寫日誌</p>
          </div>
        </Link>
        {/* ------------------ */}

        <div className='divider'></div>

        <Link className='menu-option logout-button' to='#' onClick={handleLogoutButton}>
          <div className='user-name'>
            <div>登出</div>
          </div>
        </Link>

      </div>
    </div >
  )
}

export default DropdownMenu
