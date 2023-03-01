import React, { useEffect, useState } from 'react'
import TourCard from '../TourCard/TourCard'
import './TourCardList.scss'


const TourCardList = (props) => {
    const { cards } = props
    const [dragCard, setDragCard] = useState(null)
    function handleOnDrag (e, currentCard) {
      console.log(currentCard)
      console.log(e)
       e.dataTransfer.setData("card", JSON.stringify(currentCard))
      setDragCard(currentCard)
    }
    return (
    <>
    <div className='tourCardList'>
      {
        cards.map((card) => (
          <div draggable key={card.id} onDragStart={(e) => { handleOnDrag(e, card) }}>
          <TourCard key={card.id} card={card}/>
          </div>
          ))
      }
    </div>
    </>
    )
  }


export default TourCardList
