import React from 'react'
import TourCardList from './TourCardList'
import { data as TourCards } from '../../data/index'
import './Tour-index.scss'

const App = (p) => {
  const cards = TourCards
  return (
  <>
  <div className='tour-main-list'>
    <h1>熱門景點</h1>
    <from>
    <TourCardList cards={cards} />
    </from>
  </div>
  </>
  )
}

export default App
