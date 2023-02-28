import MyContext from './TourFavoriteContext'
import React, { useState, useEffect } from 'react'
import TourCard from '../TourCard/TourCard'

export default function TourFavoriteListA(props) {
    const { cards } = props
    const [TourFavoriteList, setTourFavoriteList] = useState([])
    const [count, setCount] = useState(0)
    const [data, setData] = useState([])
    const MyContext = React.createContext()
    useEffect(() => {
      for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i)
        if (key.startsWith("TourFavorite-")) {
          const id = key.substring("TourFavorite-".length)
          const isExit = TourFavoriteList.find(item => item.id === id)
          const favoriteCard = cards.find(card => card.id === id)
          if (favoriteCard) {
            if (!isExit) {
              setTourFavoriteList(prevTourFavoriteList => [...prevTourFavoriteList, { id }])
            }
          }
        }
        // else {
        // setData(prevTourFavoriteList => prevTourFavoriteList.filter(item => item !== prevTourFavoriteList))
        // }
      }
      setData(cards.filter(card => TourFavoriteList.some(({ id }) => id === card.id)))
    }, [])
    return (
    <>
      {/* <MyContext.Provider value={{ count, setCount }}></MyContext.Provider> */}
    <div className='tourCardList'>
    {
      data.length > 0
        ? (
          data.map((card) => {
            return (<TourCard key={card.id} card={ card } />)
          })
          )
          : (<div><h1>您還沒有收藏任何景點</h1></div>)
    }
    </div>
    </>
  )
}
