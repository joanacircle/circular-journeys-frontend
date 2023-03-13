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

  const [list, setlist] = useState([])
  function handleOnDrop(e) {
    e.preventDefault()
    console.log(e)
    console.log(e.dataTransfer.getData("card"))
    const dragCards = JSON.parse(e.dataTransfer.getData("card"))

    console.log(dragCards)
    setlist([...list, dragCards])
    console.log([...list, dragCards])
  }
  function handleDragOver(e) {
    e.preventDefault()
  }

  return (
    <>
    <div>
      <div className='tour-plan-list' onDrop={handleOnDrop} onDragOver={handleDragOver}>
        <from>
        <h1>托放景點</h1>
        {
              <TourCardList key={list.id} cards={list} />
        }
        </from>
      </div>
      <h1>
      TourMapPage
      </h1>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <div style={{ border: "2px solid blue" }}>
          <TourSearchBar />
          <div>
          <TourCardList listType='tourCardList' cardType='TourCard' cards={TourCards} onClickCard={clickEvent}/>
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
