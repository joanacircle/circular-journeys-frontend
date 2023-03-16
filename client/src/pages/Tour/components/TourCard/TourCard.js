import React, { useEffect, useState } from 'react'
import TourFavorite from '../TourFavorite/TourFavorite'
import './TourCard.scss'
import './TourCard2.scss'
import './TourCard3.scss'


const TourCard = ({ card, onClick, type }) => {
  const { id, name, adress, img, tags } = card
    return (
    <>
    <div className={type} onClick={onClick}>
    <img src={require(`images/Tour/${img}.jpg`)}
    className={`${type}Img`} alt='TourCardImg'/>
      <span className={`${type}Text`}>
      <div className='TourFavoriteLabel'>
    <TourFavorite id={id} className='TourFavorite' />
      </div>
      <h4>{ name }</h4>
      <h6>{ adress }</h6>
      </span>
    </div>
    </>
    )
  }


export default TourCard
