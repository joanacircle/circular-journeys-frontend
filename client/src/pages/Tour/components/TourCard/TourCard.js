import React from 'react'
import './TourCard.scss'

const TourCard = () => {

    return (
    <>
    <div className='TourCard'>
    <img src={require("images/Tour/T01.jpg")} className='TourCardImg' alt='TourCardImg'/>
      <div>TourCard</div>
    </div>
    </>
    )
  }


export default TourCard
