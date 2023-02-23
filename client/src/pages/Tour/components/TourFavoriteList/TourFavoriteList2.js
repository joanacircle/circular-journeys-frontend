import React, { useState, useEffect } from 'react'
import TourCard from '../TourCard/TourCard'

export default function TourFavoriteList(props) {
    const { cards } = props
    const [TourFavoriteList, setTourFavoriteList] = useState([])
    useEffect(() => {
        for (let i = 0; i < localStorage.length; i++) {
          const key = localStorage.key(i)
          if (key.startsWith("TourFavorite-")) {
            const id = key.substring("TourFavorite-".length)
            const Favorite = JSON.parse(localStorage.getItem(key))
            const favoriteCard = cards.find(card => card.id === id)
              if (favoriteCard && (id !== TourFavoriteList.id)) {
                setTourFavoriteList(prevTourFavoriteList => [...prevTourFavoriteList, { id, Favorite }])
              }

          }
        }
      }, [])
    return (
    <>
    <div className='tourCardList'>
    {
      TourFavoriteList.length > 0
        ? (
          TourFavoriteList.map(({ id }) => {
            const favoriteCard = cards.find(card => card.id === id)
            return (<TourCard key={favoriteCard.id + 'Like'} card={favoriteCard} />)
          })
          )
          : (<div><h1>您還沒有收藏任何景點</h1></div>)
    }
    </div>
    </>
  )
}
