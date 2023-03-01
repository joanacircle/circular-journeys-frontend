import React, { useEffect, useState, UseState } from 'react'
import TourCard from '../TourCard/TourCard'
import './TourCardList.scss'


const TourCardList = (props) => {
    const { cards } = props

    return (
    <>
    <div className='tourCardList'>
      {
        cards.map((card) => (
          <div draggable key={card.id}>
          <TourCard key={"C" + card.id} card={card}/>
          </div>
          ))
      }
    </div>
    </>
    )
  }


export default TourCardList
