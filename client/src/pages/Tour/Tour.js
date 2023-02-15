import React from 'react'
import TourBanner from './components/TourBanner/TourBanner'
import TourCardList from './components/TourOverview/Tour-index'
import './Tour.scss'
const Tour = () => {
  return (
    <>
    <div className='tour-page'>
    <TourBanner />
    <TourCardList />
    </div>
    </>
  )
}



export default Tour

