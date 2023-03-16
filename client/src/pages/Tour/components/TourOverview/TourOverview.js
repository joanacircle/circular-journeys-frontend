import React, { useState } from 'react'
import TourCardList from '../TourCardList/TourCardList'
import TourCategoryList from '../TourCategory/TourCategoryList'
import { data as TourCards } from '../../data/index'
import './TourOverview.scss'
import { Link } from 'react-router-dom'
const categories = [
  { id: "TC001", name: "景點", context: "", img: "T01", tags: "景點" },
  { id: "TC002", name: "美食", context: "", img: "T02", tags: "美食" },
  { id: "TC003", name: "住宿", context: "", img: "T03", tags: "住宿" },
  { id: "TC004", name: "文化", context: "", img: "T04", tags: "文化" },
  { id: "TC005", name: "自然", context: "", img: "T05", tags: "自然" }
]

const TourOverview = () => {
  const [cards, setCards] = useState(TourCards)
  const [selectedCategory, setSelectedCategory] = useState(null)

  const handleCardClick = (tag) => {
    if (selectedCategory === tag) {
      setSelectedCategory(null)
    } else {
      setSelectedCategory(tag)
    }
  }

  const filteredCards = selectedCategory
    ? TourCards.filter((card) => card.tags.includes(selectedCategory))
    : TourCards

  return (
    <>
      <div className='tour-main-list'>
        <TourCategoryList
          categories={categories}
          onClickCard={handleCardClick}
          selectedCategory={selectedCategory}
        />
      </div>
      <Link to={'/tour/tourmappage'}>
        開始規劃行程
      </Link>
      <div className='tour-main-list'>
        <h1>熱門景點</h1>
        <TourCardList listType='tourCardList' cardType='TourCard' cards={filteredCards} />
      </div>
      <div className='tour-main-list'>
        <h1>探索美食地圖</h1>
        <TourCardList listType='tourCardList3' cardType='TourCard3' cards={filteredCards} />
      </div>
    </>
  )
}

export default TourOverview
