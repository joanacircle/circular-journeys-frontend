import React, { useState } from 'react'
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai"
import './TourFavorite.scss'

export default function TourFavorite() {
    const [TourFavorite, setTourFavorite] = useState()
    const TourFavoriteHandle = () => {
        setTourFavorite(!TourFavorite)
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
