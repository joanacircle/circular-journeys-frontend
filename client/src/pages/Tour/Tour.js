import React from 'react'
import TourBanner from './components/TourBanner/TourBanner'
import TourOverview from './components/TourOverview/TourOverview'
import './Tour.scss'
import { Link } from 'react-router-dom'


const Tour = () => {
  return (
    <>
      <div className='tour-page'>
        <TourBanner />
      <Link to={'/tour/tourmappage'}>
        GOGO
      </Link>
        <TourOverview/>
      </div>
    </>
  )
}



export default Tour

