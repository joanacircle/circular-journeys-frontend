import React, { useState, useEffect, useContext } from 'react'
import { Link } from 'react-router-dom'
import './DropdownMenu.scss'
import 'animate.css'
import { FaUserAlt } from 'react-icons/fa'
import { IoSettingsOutline } from 'react-icons/io5'
import { HiOutlineTicket } from 'react-icons/hi'
import { MdOutlineAttachMoney } from 'react-icons/md'
import { BsPersonBadge } from 'react-icons/bs'
import { CiEdit } from 'react-icons/ci'
import { UserContext } from 'hooks/UserContext'
import axios from 'axios'

const DropdownMenu = ({ handleToggleLoginModal, userState, setUserState }) => {
  const [userData, setUserData] = useState()
  const { context } = useContext(UserContext)
  // TODO:
  const handleUserInfo = async () => {
    const id = context
    const response = await axios.post('http://localhost:3001/user/userinfo', { id })
    if (response.status === 200) {
      setUserData(response.data)
      console.log(response.data)
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

  const handleLogoutButton = () => {
    if (userState) {
      alert('已登出')
      setUserState(!userState)
      handleToggleLoginModal()
    }
  }
  return (
    <div className="user-dropdown-menu animate__animated animate__faster animate__fadeIn">
      <div className='menu-place'>
        <Link className='menu-option' to='/member'>
          <div className='user-name'>
            <FaUserAlt size={35} />
            <div>
              <h5>{userData && userData.first_name + ' ' + userData.last_name}</h5>
            </div>
          </div>
          <IoSettingsOutline size={20} />
        </Link>
        <div className='divider'></div>
        <div className='menu-option'>
          <div className='user-name'>
            <MdOutlineAttachMoney size={20} />
            <p>Points</p>
          </div>
          <div className='points'>{userData && '$' + ' ' + userData.points}</div>
        </div>
        <div className='menu-option'>
          <div className='user-name'>
            <HiOutlineTicket size={20} />
            <p>折扣卷</p>
          </div>
          <div className='ticket'>{userData && userData.ticket}</div>
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
    </div>
  )
}

export default DropdownMenu
