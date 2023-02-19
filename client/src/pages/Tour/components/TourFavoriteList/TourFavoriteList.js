import React, { useState } from 'react'
import TourFavorite from '../TourFavorite/TourFavorite'

export default function TourFavoriteList() {
    const [TourFavoriteList, setTourFavoriteList] = useState([])
    const AddFavorite = (item) => {
        setTourFavoriteList([...TourFavoriteList, item])
      }
  return (
    <>
    <div>
    </div>
    </>
  )
}

