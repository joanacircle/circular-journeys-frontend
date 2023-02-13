import React from 'react'
import TourCardList from './TourCardList'
import { data as TourCards } from '../../data/index'

const App = (p) => {
  const cards = TourCards
  return (
  <>
  <TourCardList cards={cards} />
  </>
  )
}

export default App
