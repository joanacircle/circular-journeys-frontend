import React from 'react'
import './TourTitle.scss'
import { BiSearch } from 'react-icons/bi'
import Banner from 'images/Tour/T001.jpg'

const TourTitle = () => {
  return (
    <>
        <div className='tour-banner'>
      {/* alt 下關鍵字 */}
      <img className='tour-banner-img' src={Banner} alt="Banner"></img>
      <div className='title-section'>
        <h1 className='tour-h1'>探索行程</h1>
        <form className='tour-search'>
          <input className='tour-input' placeholder="Search">
          </input>
          <button className='tour-button' type="submit">
            <BiSearch className='tour-search-icon'/>
          </button>
        </form>
      </div>
    </div>
    {/* <div className=''>
    <form className=''>
      <input className='' type="search" placeholder="Search" />
      <button className='' type="submit">Search</button>
    </form>
  </div> */}
    </>
  )
}

export default TourTitle
