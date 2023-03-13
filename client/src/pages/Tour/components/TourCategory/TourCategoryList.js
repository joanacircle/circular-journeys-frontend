import React, { useEffect, useState } from 'react'
import TourCategory from './TourCategory'
import './TourCategoryList.scss'


const TourCategoryList = ({ categories, onClickCard }) => {

    return (
    <>
    <div className='tourCategoryList'>
      {
        categories.map((category) => (
          <TourCategory key={category.id} category={category} onClick={() => onClickCard(category.tags)}/>
          ))
      }
    </div>
    </>
    )
  }


export default TourCategoryList
