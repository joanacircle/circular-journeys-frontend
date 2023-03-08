import React, { useState } from 'react'
import TourMap from './components/TourMap/TourMap'
import TourSearchBar from './components/TourSearchBar/TourSearchBar'
import TourCardList from './components/TourCardList/TourCardList'
import { data as TourCards } from './data/index'

export default function TourMapPage() {

  const [selectedCard, setselectedCard] = useState(null)

 function clickEvent(card) {
  console.log('11', card.name)
  console.log('12', card.adress)
  setselectedCard(`${card.adress}${card.name}`)
  console.log('14', selectedCard)
  }

  return (
    <>
    <div>
      <h1>
      TourMapPage
      </h1>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <div style={{ border: "2px solid blue" }}>
          <TourSearchBar />
          <div>
          <TourCardList cards={TourCards} onClickCard={clickEvent}/>
          </div>
        </div>
        <div style={{ border: "2px solid blue", width: "60vw", height: "380px", zIndex: 9 }}>
          <TourMap selectedCard={selectedCard}/>
        </div>
      </div>
    </div>
    </>
  )
}
