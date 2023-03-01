import React, { useState, useEffect, useContext } from 'react'
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai"
import './TourFavorite.scss'
// import MyContext from '../TourFavoriteList/TourFavoriteContext'


export default function TourFavorite(props) {
    const [TourFavorite, setTourFavorite] = useState(false)
    // const { count, setCount } = useContext(MyContext)
    const { id } = props
    /// 如果localstorage有該ID 會顯示愛心
    useEffect(() => {
      if (localStorage.getItem(`TourFavorite-${id}`) === "true") {
        setTourFavorite(true)
      }
    }, [])

    /// 如果點擊愛心會 顯示收藏並儲存ID到localstorage
    const TourFavoriteHandle = () => {
        setTourFavorite(!TourFavorite)
        if (!TourFavorite) {
          localStorage.setItem(`TourFavorite-${id}`, JSON.stringify(!TourFavorite))
        } else {
          localStorage.removeItem(`TourFavorite-${id}`)
        }
    }
  return (
    <>
    <div>
      {/* {count} */}
    <button
    onClick={() => {
      TourFavoriteHandle()
    }
    }>{ TourFavorite ? <AiFillHeart className='TourBtn'/> : <AiOutlineHeart className='TourBtn'/>}</button>
    </div>
    </>
  )
}
