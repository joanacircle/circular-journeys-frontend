import React from 'react'
import './TourCategory.scss'



const TourCategory = ({ category, onClick }) => {
  const { name, context, img } = category
    return (
    <>
    <div className='tourCategory' onClick={onClick}>
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
