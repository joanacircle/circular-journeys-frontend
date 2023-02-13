import React from 'react'
import TourCard from '../TourCard/TourCard'
import './TourCardList.scss'


const TourCardList = (p) => {
    const { card } = p
    return (
    <>
    <div>
        <TourCard img={"T01.jpg"} name={"蓮池潭"} adress={"高雄市左營區"}/>
    </div>
    </>
    )
  }


export default TourCardList
