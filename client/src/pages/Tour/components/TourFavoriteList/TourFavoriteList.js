import React, { useState, useEffect } from 'react'
import TourCard from '../TourCard/TourCard'

export default function TourFavoriteListA({ cards, cardType }) {
    const [TourFavoriteList, setTourFavoriteList] = useState([])
    const [data, setData] = useState([])
    useEffect(() => {
      const updateFavorites = () => {
        const newTourFavoriteList = []
        for (let i = 0; i < localStorage.length; i++) {
          const key = localStorage.key(i)
          if (key.startsWith('TourFavorite-')) {
            const id = key.substring('TourFavorite-'.length)
            newTourFavoriteList.push({ id })
          }
        }
        setData(cards.filter(card => newTourFavoriteList.some(({ id }) => id === card.id)))
      }

      updateFavorites() // 初始化

      const handleStorageChange = (e) => {
        if (e.key.startsWith('TourFavorite-')) {
          updateFavorites()
        }
      }

      window.addEventListener('storage', handleStorageChange)
      return () => {
        window.removeEventListener('storage', handleStorageChange)
      }
    }, [])
    return (
    <>
    <div className='tourCardList'>
    {
      data.length > 0
        ? (
          data.map((card) => {
            return (<TourCard type={cardType} key={card.id} card={ card } />)
          })
          )
          : (<div><h1>您還沒有收藏任何景點</h1></div>)
    }
    </div>
    </>
  )
}
