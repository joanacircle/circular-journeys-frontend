import React from 'react'
import TourCardList from '../TourCardList/TourCardList'
import TourCardList2 from '../TourCardList2/TourCardList2'
import { data as TourCards } from '../../data/index'
import './Tour-index.scss'

const App = (p) => {
  const tourTopCards = TourCards
  return (
  <>
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
    <TourCardList2 cards={tourTopCards} />
    </from>
  </div>
  </>
  )
}

export default App
