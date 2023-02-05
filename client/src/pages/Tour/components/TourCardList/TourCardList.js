import React from 'react'
import TourCard from '../TourCard/TourCard'
import './TourCardList.scss'

const TourCardList = (props) => {
    const { cardList } = props
    return (
    <>
    <div>
        {cardList.map((cardList) => (
            <TourCard key={cardList.id}
                cardList = {cardList}
            />
        ))}
    </div>
    </>
    )
  }


export default TourCardList
