import { Link } from "react-router-dom"

import './NotFound.scss'

export const NotFound = () => {
  return (
  <div>
    <div className="background">
      <div className="words">
        <h2>此頁面放假去了</h2>
        <h2>您也該放個假了</h2>
        <h3>讓我們開始吧</h3>
        <h5>
          <Link to={'/'}>首頁</Link>
        </h5>
      </div>
    </div>
  </div>
  )
}
