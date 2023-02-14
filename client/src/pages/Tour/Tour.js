import React from 'react'
import TourTitle from './components/TourTitle/TourTitle'
import TourCardList from './components/TourCardList/index'
const Tour = () => {
  return (
    <>
    <div className='tour-page'>
    <TourTitle />
    <TourCardList />
    </div>
    </>
  )
}



export default Tour

