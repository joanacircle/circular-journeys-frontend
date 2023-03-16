import React, { useEffect, useState } from 'react'
import TourCard from '../TourCard/TourCard'
import './TourCardList.scss'
import './TourCardList2.scss'
import './TourCardList3.scss'


const TourCardList = ({ cards, onClickCard, listType, cardType }) => {

    const [dragCard, setDragCard] = useState(null)
    function handleOnDrag (e, currentCard) {
      // console.log(currentCard)
      // console.log(e)
       e.dataTransfer.setData("card", JSON.stringify(currentCard))
      setDragCard(currentCard)
    }
    return (
    <>
    <div className={listType}>
      {
        cards.map((card) => (
          <div draggable key={card.id} onDragStart={(e) => { handleOnDrag(e, card) }}>
          <TourCard type={cardType} key={card.id} card={card} onClick={() => onClickCard(card)}/>
          </div>
          ))
      }
    </div>
    </>
    )
  }


export default TourCardList
