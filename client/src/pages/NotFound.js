import { Link } from "react-router-dom"

import './NotFound.scss'

export const NotFound = () => {
  return (
    <>
    <div className="background">
      <div className="words">
        <h3>此頁面放假去了</h3>
        <h3>您也該放個假了</h3>
        <h5>讓我們開始吧</h5>
        <h5>
          <Link to={'/'}>首頁</Link>
        </h5>
      </div>
    </div>
    </>
  )
}
