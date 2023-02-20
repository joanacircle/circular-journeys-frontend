import React, { useState, useEffect } from 'react'

export default function TourFavoriteList({ id }) {
    const [TourFavoriteList, setTourFavoriteList] = useState([])
      useEffect(() => {
        for (let i = 0; i < localStorage.length; i++) {
          const key = localStorage.key(i)
          if (key.startsWith("TourFavorite-")) {
            const id = key.substring("TourFavorite-".length)
            const Favorite = JSON.parse(localStorage.getItem(key))
            setTourFavoriteList(prevTourFavoriteList => [...prevTourFavoriteList, { id, Favorite }])
          }
        }
      }, [])
  return (
    <>
    <div>
    </div>
    </>
  )
}

