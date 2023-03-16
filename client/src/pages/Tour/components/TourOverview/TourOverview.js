import React, { useState } from 'react'
import TourCardList from '../TourCardList/TourCardList'
import TourCategoryList from '../TourCategory/TourCategoryList'
import { data as TourCards } from '../../data/index'
import { collectionData } from '../../data/collection'
import './TourOverview.scss'
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

      <div className='tour-main-list'>
        <h1>熱門行程</h1>
        <h6>收藏最熱門的旅遊行程吧!</h6>
        <TourCardList listType='tourCardList' cardType='TourCard' cards={collectionData} />
      </div>
      <div className='tour-main-list'>
        <h1>熱門景點</h1>
        <h6>快來收藏景點安排行程吧!</h6>
        <TourCardList listType='tourCardList3' cardType='TourCard3' cards={filteredCards} />
      </div>
      <div className='tour-main-list'>
        <h1>探索美食地圖</h1>
        <h6>製作專屬你的美食地圖!</h6>
        <TourCardList listType='tourCardList3' cardType='TourCard3' cards={filteredCards} />
      </div>
      <div className='tour-main-list'>
        <h1>住宿</h1>
        <h6>快來確認距離最近的旅店吧!</h6>
        <TourCardList listType='tourCardList3' cardType='TourCard3' cards={filteredCards} />
      </div>
      <div className='tour-main-list'>
        <h1>特色文化</h1>
        <h6>趕快加入體驗在地文化特色!</h6>
        <TourCardList listType='tourCardList3' cardType='TourCard3' cards={filteredCards} />
      </div>
      <div className='tour-main-list'>
        <h1>自然景觀</h1>
        <h6>在大自然中好好放鬆!</h6>
        <TourCardList listType='tourCardList3' cardType='TourCard3' cards={filteredCards} />
      </div>
    </>
  )
}

export default TourOverview
