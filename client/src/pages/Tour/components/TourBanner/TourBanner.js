import React from 'react'
import './TourBanner.scss'
import { BiSearch } from 'react-icons/bi'
import Banner from 'images/Tour/T001.jpg'
import TourDatePicker from '../TourDatePicker/TourDatePicker'
// import DatePicker from "react-datepicker"
// import "react-datepicker/dist/react-datepicker.css"

const TourBanner = () => {
  return (
    <>
    <div className='tour-banner'>
      <img className='tour-banner-img' src={Banner} alt="Banner"></img>
      <div className='title-section'>
        <h1 className='tour-h1'>探索行程</h1>
        <div className='tour-search-row'>
          <form className='tour-search'>
            <input className='tour-input' placeholder="Search">
            </input>
            <button className='tour-button' type="submit">
            <BiSearch className='tour-search-icon'/>
            </button>
          </form>
          <TourDatePicker/>
        </div>
      </div>
    </div>
    </>
  )
}

export default TourBanner

