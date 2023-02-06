import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './MemberCenterMenu.scss'
import { AiFillCamera, AiOutlineLike } from 'react-icons/ai'
import { IoSettingsOutline } from 'react-icons/io5'
import { HiOutlineTicket, HiOutlineShoppingCart } from 'react-icons/hi'
import { MdOutlineAttachMoney } from 'react-icons/md'
import { CgNotes } from 'react-icons/cg'
// import { BiMessageRoundedCheck } from 'react-icons/bi'

import MemberSetting from './MemberSetting'


const MemberCenterMenu = () => {
  const [changePage, setChangePage] = useState(false)
  const handleChangePage = () => {
    setChangePage(!changePage)
  }

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
            <h4 className="user-name">Alan Chou</h4>
            <div className="user-information">管理者</div>
            <div className="user-information user-point">$9,457</div>
          </div>
          <ul className="page-menu">
            <li className="list-item">
              <Link className={changePage ? 'link-hover' : 'link'} onClick={handleChangePage} >
                <IoSettingsOutline />
                <span className="link-content">帳號設定</span>
              </Link>
            </li>
            <li className="list-item">
              <Link className="link" to='#' >
                <MdOutlineAttachMoney />
                <span className="link-content">Points</span>
              </Link>
            </li>
            <li className="list-item">
              <Link className="link" to='#' >
                <HiOutlineTicket />
                <span className="link-content">折扣卷</span>
              </Link>
            </li>
            <li className="list-item">
              <Link className="link" to='#' >
                <CgNotes />
                <span className="link-content">訂單管理</span>
              </Link>
            </li>
            <li className="list-item">
              <Link className="link" to='#' >
                <HiOutlineShoppingCart />
                <span className="link-content">消費紀錄</span>
              </Link>
            </li>
            {/* <li className="list-item">
              <Link className="link" to='#' >
                <BiMessageRoundedCheck />
                <span className="link-content">訊息管理</span>
              </Link>
            </li> */}
            <li className="list-item">
              <Link className="link" to='#' >
                <AiOutlineLike />
                <span className="link-content">我的收藏</span>
              </Link>
            </li>
          </ul>
        </div>
        <div className="col col-2">
          {
            changePage &&
            <MemberSetting />
          }
        </div>
      </div>
    </div>
  )
}

export default MemberCenterMenu
