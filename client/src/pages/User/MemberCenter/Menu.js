import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './Menu.scss'
import axios from 'axios'

// components
import CustomFileInput from 'components/Camera/Camera'
import { userInfo } from 'components/userInfo/UserInfo'

// icon
import { AiOutlineLike } from 'react-icons/ai'
import { IoSettingsOutline } from 'react-icons/io5'
import { HiOutlineShoppingCart } from 'react-icons/hi'
import { BsCreditCard } from 'react-icons/bs'
import { CgNotes } from 'react-icons/cg'
import { FaRegAddressBook } from 'react-icons/fa'

// page
import SettingPage from './Setting'
import Card from './Card'
import OrderPage from './Order'
import ShopHistoryPage from './ShopHistory'
import LikeHistoryPage from './LikeHistory'
import Address from './Address'

const MenuOptions = {
  info: [
    {
      state: false,
      label: '我的收藏',
      icon: <AiOutlineLike />,
      element: <LikeHistoryPage />
    },
    {
      state: false,
      label: '訂單管理',
      icon: <CgNotes />,
      element: <OrderPage />
    },
    {
      state: false,
      label: '消費紀錄',
      icon: <HiOutlineShoppingCart />,
      element: <ShopHistoryPage />
    },
    {
      state: false,
      label: '通訊地址',
      icon: <FaRegAddressBook />,
      element: <Address />
    },
    // {
    //   state: false,
    //   label: '付款設定',
    //   icon: <BsCreditCard />,
    //   element: <Card />
    // },
    {
      state: false,
      label: '帳號設定',
      icon: < IoSettingsOutline />,
      element: <SettingPage />
    }
  ]
}

const Menu = () => {
  const [changePage, setChangePage] = useState(MenuOptions)
  const [localData, setLocalData] = useState(localStorage.getItem('hoverLabel'))
  const [picture, setPicture] = useState({})
  const { userData } = userInfo()

  // handle Menu state
  const handleMenuState = () => {
    const newInfo = changePage.info.map(item => {
      if (localData === item.label) {
        return { ...item, state: true }
      }
      return { ...item, state: false }
    })
    setChangePage({ ...changePage, info: newInfo })
  }

  // handle change page
  const handleChangePage = (event) => {
    const newInfo = changePage.info.map(item => {
      if (event.target.id === item.label) {
        return { ...item, state: true }
      }
      return { ...item, state: false }
    })
    setChangePage({ ...changePage, info: newInfo })
    localStorage.setItem('hoverLabel', event.target.id)
  }
  useEffect(() => {
    handleMenuState()
  }, [])

  return (
    <div className="membercenter-place">
      <div className="membercenter-box">
        <div className="col col-1">
          <div className="aside-box">
            <div className="user-img">
              <div className="camera-place">
                <CustomFileInput picture={picture} setPicture={setPicture} />
              </div>
            </div>
            <h4 className="user-name">{userData && userData.user_name}</h4>
          </div>
          <ul className="page-menu" onClick={handleChangePage}>
            {
              changePage.info.map(item => (
                <li key={item.label} id={item.label} className="list-item">
                  <Link id={item.label} className={item.state ? 'link-hover' : 'link'}>
                    {item.icon}
                    <span id={item.label} className="link-content">{item.label}</span>
                  </Link>
                </li>
              ))
            }
          </ul>
        </div>
        <div className="col col-2">
          {
            changePage.info.map(item => (
              item.state &&
              <div key={item.label}>
                {item.element}
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default Menu
