import React from 'react'
import './TourCategory.scss'

const TourCategory = ({ category, onClick, selectedCategory }) => {
  function handleClick() {
    onClick()
  }
  const { name, context, img, tags } = category
  const isSelected = selectedCategory === tags

  return (
    <>
      <div
        className={`tourCategory${isSelected ? 'Clicked' : ''}`}
        onClick={handleClick}
      >
        <img
          src={require(`images/Tour/${img}.jpg`)}
          className='tourCategoryImg'
          alt='TourCardImg'
        />
        <span className='tourCategoryText'>
          <h4>{name}</h4>
          <h6>{context}</h6>
        </span>
      </div>
    </>
  )
}

export default TourCategory
