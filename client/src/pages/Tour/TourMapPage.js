import React, { useState } from 'react'
import TourMap from './components/TourMap/TourMap'
import TourSearchBar from './components/TourSearchBar/TourSearchBar'
import TourCardList from './components/TourCardList/TourCardList'
import { data as TourCards } from './data/index'
import TourFavoriteList from './components/TourFavoriteList/TourFavoriteList'
import './TourMapPage.scss'
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
      <div className="container">
        <div className="left">
          <div className="draggable-card-list">
            <TourFavoriteList listType="tourCardList3" cardType="TourCard3" cards={TourCards} onClickCard={clickEvent} />
            <TourCardList listType="tourCardList" cardType="TourCard" cards={TourCards} onClickCard={clickEvent} />
          </div>
          <div className="tour-plan-list" onDrop={handleOnDrop} onDragOver={handleDragOver}>
            <h1>托放景點</h1>
            <TourCardList key={list.id} cards={list} />
          </div>
        </div>
        <div className="right">
          <div className="tour-map">
            <TourMap selectedCard={selectedCard} />
          </div>
        </div>
      </div>
    </>
  )
}
