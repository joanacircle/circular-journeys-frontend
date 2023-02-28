import React, { useEffect, UseState } from 'react'
import TourCard from '../TourCard/TourCard'
import './TourCardList.scss'


const TourCardList = (props) => {
    const { cards } = props
    const dragStart = (e, id) => {
      console.log("Drag has started.")
      // e.dataTransfer.setData("cardId")
    }
    return (
    <>
    <div className='tourCardList'>
      {
        cards.map((card) => (
          <div draggable key={card.id} onDragStart={(e) => dragStart(e, card.id)}>
          <TourCard key={"C" + card.id} card={card}/>
          </div>
          ))
      }
    </div>
    </>
    )
  }


export default TourCardList
