import React, { useEffect, useState } from 'react'
import './TourCard.scss'
import { data } from '../../data/index'

const TourCard = (p) => {

const { id, name, adress, img, tags } = p.card
    return (
    <>
    <div className='TourCard'>
    <img src={require(`images/Tour/${img}`)}
    className='TourCardImg' alt='TourCardImg'/>
      <span className='TourCardText'>
      <h3>{name}</h3>
      <h5>{adress}</h5>
      </span>
    </div>
    </>
    )
  }


export default TourCard
