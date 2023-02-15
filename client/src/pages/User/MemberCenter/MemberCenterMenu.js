import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './MemberCenterMenu.scss'
import { AiFillCamera, AiOutlineLike } from 'react-icons/ai'
import { IoSettingsOutline } from 'react-icons/io5'
import { HiOutlineTicket, HiOutlineShoppingCart } from 'react-icons/hi'
import { MdOutlineAttachMoney } from 'react-icons/md'
import { CgNotes } from 'react-icons/cg'
import axios from 'axios'

// page
import SettingPage from './Setting'
import PointsPage from './Points'
import TicketPage from './Ticket'
import OrderPage from './Order'
import ShopHistoryPage from './ShopHistory'
import LikeHistoryPage from './LikeHistory'


const menuObj = {
  info: [
    {
      state: true,
      label: '帳號設定',
      icon: < IoSettingsOutline />,
      element: <SettingPage />
    },
    {
      state: false,
      label: 'Points',
      icon: <MdOutlineAttachMoney />,
      element: <PointsPage />
    },
    {
      state: false,
      label: '折扣卷',
      icon: <HiOutlineTicket />,
      element: <TicketPage />
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
      label: '我的收藏',
      icon: <AiOutlineLike />,
      element: <LikeHistoryPage />
    }
  ]
}

const MemberCenterMenu = () => {
  const [changePage, setChangePage] = useState(menuObj)
  const [userData, setUserData] = useState()

  // TODO:
  const handleUserInfo = async () => {
    const token = localStorage.getItem('token')
    const response = await axios.post('http://localhost:3001/user/userinfo', { token })
    if (response.status === 200) {
      setUserData(response.data)
    }
  }


  const handleChangePage = (event) => {
    const newInfo = changePage.info.map(item => {
      if (event.target.id === item.label) {
        return { ...item, state: true }
      }
      return { ...item, state: false }
    })
    setChangePage({ ...changePage, info: newInfo })
  }

  useEffect(() => {
    handleUserInfo()
  }, [])
  return (
    <div className="membercenter-place">
      <div className="membercenter-box">
        <div className="col col-1">
          <div className="aside-box">
            <div className="user-img">
              <div className="camera-place">
                <AiFillCamera size={25} />
              </div>
            </div>
            <h4 className="user-name">{userData && userData.first_name + ' ' + userData.last_name}</h4>
            <div className="user-information user-point">{userData && '$' + ' ' + userData.points}</div>
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

export default MemberCenterMenu
