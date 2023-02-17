import React, { useEffect, useState } from 'react'
import './TourCard.scss'
import TourFavorite from '../TourFavorite/TourFavorite'


const TourCard = (props) => {
  const { card } = props
  const { id, name, adress, img, tags } = card
    return (
    <>
    <div className='TourCard'>
    <img src={require(`images/Tour/${img}.jpg`)}
    className='TourCardImg' alt='TourCardImg'/>
      <span className='TourCardText'>
      <div className='TourFavoriteLabel'>
    <TourFavorite className='TourFavorite' />
      </div>
      <h4>{ name }</h4>
      <h6>{ adress }</h6>
      </span>
    </div>
    </>
    )
  }


export default TourCard
