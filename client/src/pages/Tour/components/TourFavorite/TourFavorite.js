import React, { useState } from 'react'
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai"
import './TourFavorite.scss'

export default function TourFavorite(props) {
    const [TourFavorite, setTourFavorite] = useState()
    const { id } = props
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
    <button
    onClick={TourFavoriteHandle}>{ TourFavorite ? <AiFillHeart className='TourBtn'/> : <AiOutlineHeart className='TourBtn'/>}</button>
    </div>
    </>
  )
}
