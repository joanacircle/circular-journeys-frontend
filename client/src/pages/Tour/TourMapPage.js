import React, { useState, useEffect } from 'react'
import TourMap from './components/TourMap/TourMap'
import TourSearchBar from './components/TourSearchBar/TourSearchBar'
import TourCardList from './components/TourCardList/TourCardList'
import { data as TourCards } from './data/index'
import TourFavoriteList from './components/TourFavoriteList/TourFavoriteList'
import './TourMapPage.scss'
import TourCategoryList from './components/TourCategory/TourCategoryList'

export default function TourMapPage() {

  const [selectedCard, setselectedCard] = useState(null)

 function clickEvent(card) {
  console.log('11', card.name)
  console.log('12', card.adress)
  setselectedCard(`${card.adress}${card.name}`)
  console.log('14', selectedCard)
  }

  const [list, setlist] = useState([])
  function handleOnDrop(e) {
    e.preventDefault()
    console.log(e)
    console.log(e.dataTransfer.getData("card"))
    const dragCards = JSON.parse(e.dataTransfer.getData("card"))

    console.log(dragCards)
    setlist([...list, dragCards])
    console.log([...list, dragCards])
  }
  function handleDragOver(e) {
    e.preventDefault()
  }
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
      setData(TourCards.filter(card => newTourFavoriteList.some(({ id }) => id === card.id)))
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

    const categories = [
      { id: "TC001", name: "景點", context: "", img: "T01", tags: "景點" },
      { id: "TC002", name: "美食", context: "", img: "T02", tags: "美食" },
      { id: "TC003", name: "住宿", context: "", img: "T03", tags: "住宿" },
      { id: "TC004", name: "文化", context: "", img: "T04", tags: "文化" },
      { id: "TC005", name: "自然", context: "", img: "T05", tags: "自然" }
    ]
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
      ? data.filter((card) => card.tags.includes(selectedCategory))
      : data
  return (
    <>
    <div className='tour-main-list'>
        <TourCategoryList
          categories={categories}
          onClickCard={handleCardClick}
          selectedCategory={selectedCategory}
        />
      </div>
      <div className="container">
        <div className="left">
          <div className="draggable-card-list">
            <TourCardList listType="tourCardList3" cardType="TourCard3" cards={filteredCards} onClickCard={clickEvent
            } />
          </div>
          <div className="tour-plan-list" onDrop={handleOnDrop} onDragOver={handleDragOver}>
            <h1>拖放景點</h1>
            <TourCardList key={list.id} cards={list} listType="tourCardList3" cardType="TourCard3" onClickCard={clickEvent
            }/>
          </div>
        </div>
        <div className="right">
          <div className="tour-map">
            <TourMap selectedCard={selectedCard} />
          </div>
        </div>
      </div>
    </>
  )
}
