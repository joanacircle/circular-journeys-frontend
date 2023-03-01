import React, { useState, useEffect } from 'react'
import TourCardList from '../TourCardList/TourCardList'
import TourCardList2 from '../TourCardList2/TourCardList2'
import TourCardList3 from '../TourCardList3/TourCardList3'
import TourFavoriteList2 from '../TourFavoriteList/TourFavoriteList2'
import TourFavoriteList from '../TourFavoriteList/TourFavoriteList'
import { data as TourCards } from '../../data/index'
import './TourOverview.scss'

const App = (p) => {
  const tourTopCards = TourCards
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
  <div className='tour-main-list' onDrop={handleOnDrop} onDragOver={handleDragOver}>
  <from>
    <h1>托放景點</h1>
    {
          <TourCardList key={list.id} cards={list} />
    }
    </from>
  </div>
  <div className='tour-main-list'>
    <from>
    <TourCardList2 cards={tourTopCards} />
    </from>
  </div>
  <div className='tour-main-list'>
    <h1>熱門景點</h1>
    <from>
    <TourCardList cards={tourTopCards} />
    </from>
  </div>
  <div className='tour-main-list'>
    <h1>探索美食地圖</h1>
    <from>
    <TourCardList3 cards={tourTopCards} />
    </from>
  </div>
  <div className='tour-main-list'>
    <h1>收藏景點</h1>
    <from>
    <TourFavoriteList2 cards={tourTopCards} />
    </from>
  </div>
  </>
  )
}

export default App
