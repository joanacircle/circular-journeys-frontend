import React from 'react'
import TourCard from '../TourCard2/TourCard2'
import './TourCardList2.scss'


const TourCardList = (props) => {
    const { cards } = props
    return (
    <>
    <div className='tourCardList'>
      {
        cards.map((card) => (
          <TourCard key={card.id} card={card}/>
          ))
      }
    </div>
    </>
    )
  }


export default TourCardList
