import React, { useEffect, useState } from 'react'
import './TourCard3.scss'

const TourCard3 = (props) => {
  const { card } = props
  const { id, name, adress, img, tags } = card
    return (
    <>
    <div className='TourCard3'>
    <img src={require(`images/Tour/${img}.jpg`)}
    className='TourCard3Img' alt='TourCard3Img'/>
      <span className='TourCard3Context'>
      <h6>5 Minutes Ago</h6>
      <h3>{ name }</h3>
      <label className='TourCard3Text'>
        lorem loremloremlor emloremloremlore mlorem lorem  loremloreml orem
      </label>
      <a className='TourCard3Btn'>ReadMore</a>
      </span>
    </div>
    </>
    )
  }


export default TourCard3
