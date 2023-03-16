import React from 'react'
import TourBanner from './components/TourBanner/TourBanner'
import TourOverview from './components/TourOverview/TourOverview'
import './Tour.scss'



const Tour = () => {
  return (
    <>
      <div className='tour-page'>
        <TourBanner />
        <TourOverview/>
      </div>
    </>
  )
}



export default Tour

