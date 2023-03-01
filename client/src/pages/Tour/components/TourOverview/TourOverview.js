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
  const [widgets, setwidgets] = useState([])
  function handleOnDrag (e, widgetsType) {
    e.dataTransfer.setData("widgetType", widgetsType)
  }
  function handleOnDrop(e) {
    const widgetType = e.dataTransfer.getData("widgetType")
    setwidgets([...widgets, widgetType])
}
  function handleDragOver(e) {
    e.preventDefault()
  }
  return (
  <>
 <div className='widget' draggable onDragStart={(e) => handleOnDrag(e, "Widget A")}>
  widget A
  </div>
  <div className='widget' draggable onDragStart={(e) => handleOnDrag(e, "Widget B")}>
  widget B
  </div>
  <div className='widget' draggable onDragStart={(e) => handleOnDrag(e, "Widget C")}>
  widget C
  </div>
  <div className='page' onDrop={handleOnDrop} onDragOver={handleDragOver}>
    {
      widgets.map((widget, index) => {
        return (
        <div className='widget' key={index}>
          {widget}
        </div>
        )
      })
    }
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
