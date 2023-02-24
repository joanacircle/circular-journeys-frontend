import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import firebase from '../../../components/Firebase/firebase'
import 'firebase/compat/auth'
import './DropdownMenu.scss'
import 'animate.css'

// components
import { userInfo } from 'components/userInfo/UserInfo'

// icon
import { FaRegAddressBook } from 'react-icons/fa'
import { IoSettingsOutline } from 'react-icons/io5'
import { HiOutlineShoppingCart } from 'react-icons/hi'
import { BsPersonBadge, BsCreditCard } from 'react-icons/bs'
import { CiEdit } from 'react-icons/ci'
import { AiOutlineLike } from 'react-icons/ai'
import { CgNotes } from 'react-icons/cg'


const DropdownMenuOptions = {
  info: [
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
    // {
    //   label: '付款設定',
    //   icon: <BsCreditCard size={20} />
    // },
    {
      label: '通訊地址',
      icon: <FaRegAddressBook size={20} />
    },
    {
      label: '帳號設定',
      icon: <IoSettingsOutline size={20} />
    }
  ]
}

const DropdownMenu = ({ handleToggleLoginModal }) => {
  const [dropdownOptions, setDropdownOptions] = useState(DropdownMenuOptions)
  const { userData } = userInfo()

  // handleClickOutside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        !(event.target.id === 'user-menu' && 'user-img') &&
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
    firebase.auth().signOut()
      .then(() => {
        firebase.auth().setPersistence(firebase.auth.Auth.Persistence.NONE)
        document.cookie.split(";").forEach(function (c) {
          document.cookie = c
            .replace(/^ +/, "")
            .replace(/=.*/, "=;expires=" + new Date().toUTCString() + ";path=/")
        })
        localStorage.removeItem('token')
        window.location = '/'
      })
      .catch(error => console.log(error))
  }

  // handle change page
  const handleMenuLocation = (event) => (
    localStorage.setItem('hoverLabel', event.target.id)
  )

  return (
    <div className="user-dropdown-menu animate__animated animate__faster animate__fadeIn">
      <div className='menu-place'>

        <Link className='menu-option' id='帳號設定' to={'member'} onClick={handleMenuLocation}>
          <div className='user-name' id='帳號設定'>
            <img
              className="user-name-photo"
              id='帳號設定'
              src={
                userData.picture
                  ? userData.picture
                  : 'https://react.semantic-ui.com/images/wireframe/image.png'
              }
            />
            <div className='user-info' id='帳號設定'>
              <h5 id='帳號設定'>{userData && userData.user_nickname}</h5>
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
