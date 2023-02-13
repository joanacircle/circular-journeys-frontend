import React from 'react'
import TourCard from '../TourCard/TourCard'
import './TourCardList.scss'


const TourCardList = (props) => {
    const { cards } = props
    return (
    <>
    <div className='tourCardList'>
      {
        cards.map((card, id) => (
          <TourCard key={id} card={card}/>
          ))
      }
    </div>
    </>
    )
  }


export default TourCardList
