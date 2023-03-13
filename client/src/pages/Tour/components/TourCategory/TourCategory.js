import React, { useState } from 'react'
import './TourCategory.scss'



const TourCategory = ({ category, onClick }) => {

  const [clicked, setClicked] = useState()
  function handleClick () {
    setClicked(!clicked)
    onClick()
  }
  const { name, context, img } = category
    return (
    <>
    <div className={`tourCategory${clicked ? 'Clicked' : ''}`} onClick={handleClick}>
    <img src={require(`images/Tour/${img}.jpg`)}
    className='tourCategoryImg' alt='TourCardImg'/>
      <span className='tourCategoryText'>
      <h4>{ name }</h4>
      <h6>{ context }</h6>
      </span>
    </div>
    </>
    )
  }


export default TourCategory
