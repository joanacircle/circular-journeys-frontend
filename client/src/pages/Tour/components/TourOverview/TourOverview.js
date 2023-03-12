import React, { useState, useEffect } from 'react'
import TourCardList from '../TourCardList/TourCardList'
import TourFavoriteList from '../TourFavoriteList/TourFavoriteList'
import { data as TourCards } from '../../data/index'
import './TourOverview.scss'

const App = (p) => {
  const tourTopCards = TourCards
  return (
    <>
  <div className='tour-main-list'>
    <from>
    <TourCardList listType='tourCardList2' cardType='TourCard2' cards={tourTopCards} />
    </from>
  </div>
  <div className='tour-main-list'>
    <h1>熱門景點</h1>
    <from>
    <TourCardList listType='tourCardList' cardType='TourCard' cards={tourTopCards} />
    </from>
  </div>
  <div className='tour-main-list'>
    <h1>探索美食地圖</h1>
    <from>
    <TourCardList listType='tourCardList3' cardType='TourCard3' cards={tourTopCards} />
    </from>
  </div>
  <div className='tour-main-list'>
    <h1>收藏景點</h1>
    <from>
    <TourFavoriteList cardType='TourCard' cards={tourTopCards} />
    </from>
  </div>
  </>
  )
}

export default App
