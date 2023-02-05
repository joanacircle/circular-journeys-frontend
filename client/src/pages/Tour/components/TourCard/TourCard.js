import React from 'react'
import './TourCard.scss'

const TourCard = () => {

    return (
    <>
    <div className='TourCard'>
    <img src={require("images/Tour/T06.jpg")}
    className='TourCardImg' alt='TourCardImg'/>
      <span className='TourCardText'>
      <h2>TourCard</h2>
      <h4>NiceOne</h4>
      </span>
    </div>
    </>
    )
  }


export default TourCard
