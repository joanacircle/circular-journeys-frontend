import React, { useState, useEffect } from 'react'
import PriceRangeSlider from './PriceRangeSlider'
import CategoryCheckbox from './CategoryCheckbox'
import { useLocation } from 'react-router-dom'
import './FilterBar.scss'

const FilterBar = ({
  categoryMenu,
  categories,
  setCategories,
  priceRange,
  setPriceRange
}) => {

  const location = useLocation()
  const preCate = location.state?.categoryTitle

  const [preValue, setPreValue] = useState(preCate)

  useEffect(() => {
    handleInitialSelected()
  }, [])

  const handleInitialSelected = () => {
    let value = ''
    if (preValue) {
      value = preValue
      setPreValue('')
    } else {
      return
    }
    if (!categories.includes(value)) return setCategories([...categories, value])

    if (categories.includes(value)) {
      const newCategories = categories.filter((v) => v !== value)
      setCategories(newCategories)
    }
  }

  const handleSelected = (e) => {

    const value = e.target.value

    if (!categories.includes(value)) return setCategories([...categories, value])
    if (categories.includes(value)) {
      const newCategories = categories.filter((v) => v !== value)
      setCategories(newCategories)
    }
  }

  return (
    <>
      <div className='cate-title'>
        <h4>
          商品分類
        </h4>
        <button className="cate-clear-button" onClick={() => setCategories([])}>
          清除選項
        </button>
      </div>

      <div className='cate-checkbox-component'>
        {categoryMenu.map((value, i) => (
          <CategoryCheckbox
            value={value}
            key={i}
            categories={categories}
            handleSelected={handleSelected}
          />
        ))}
      </div>

      <div className='cate-range-component'>
        <h4>價格範圍</h4>
        <div className='priceRange'>
          <p className='cate-range-p'>最少$0</p>
          <p className='cate-range-p'>最大$5000</p>
        </div>

        <PriceRangeSlider
          priceRange={priceRange}
          setPriceRange={setPriceRange}
        />
      </div>
    </>
  )
}

export default FilterBar

