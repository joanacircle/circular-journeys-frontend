import React, { useEffect, useState } from 'react'
import './TourCard2.scss'


const TourCard2 = (props) => {
  const { card } = props
  const { id, name, adress, img, tags } = card
    return (
    <>
    <div className='TourCard2'>
    <img src={require(`images/Tour/${img}.jpg`)}
    className='TourCard2Img' alt='TourCard2Img'/>
      <span className='TourCard2Text'>
      <h4>{ name }</h4>
      <h6>{ adress }</h6>
      </span>
    </div>
    </>
    )
  }


export default TourCard2
