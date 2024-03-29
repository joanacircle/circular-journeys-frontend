import React from 'react'
import TourCategory from './TourCategory'
import './TourCategoryList.scss'

const TourCategoryList = ({ categories, onClickCard, onClickCancel, selectedCategory }) => {
  return (
    <>
      <div className='tourCategoryList'>
        {categories.map((category) => (
          <TourCategory
            key={category.id}
            category={category}
            onClick={() => onClickCard(category.tags)}
            selectedCategory={selectedCategory}
          />
        ))}
      </div>
    </>
  )
}

export default TourCategoryList
