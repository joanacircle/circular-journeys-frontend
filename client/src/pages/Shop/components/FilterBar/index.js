import React from 'react'
import PriceRangeSlider from './PriceRangeSlider'
import CategoryCheckbox from './CategoryCheckbox'
import './FilterBar.scss'

const FilterBar = (props) => {
  const {
    categoryMenu,
    categories,
    setCategories,
    priceRange,
    setPriceRange
  } = props

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
      <h5>
        商品分類
      </h5>

      {categoryMenu.map((value, i) => (
        <CategoryCheckbox
          value={value}
          key={i}
          categories={categories}
          handleSelected={handleSelected}
        />
      ))}
      <button className="btn btn-link btn-sm" onClick={() => setCategories([])}>
        重新選擇
      </button>

      <hr />
      <h4>價格範圍</h4>
      <div className='priceRange'>
        <p>$0</p><p>$10000</p>
      </div>

      <PriceRangeSlider
        priceRange={priceRange}
        setPriceRange={setPriceRange}
      />
    </>
  )
}

export default FilterBar

// {
//   priceRangeMenu.map((value, i) => (
//     <PriceRangeRadio
//       key={i}
//       value={value}
//       priceRange={priceRange}
//       setPriceRange={setPriceRange}
//     />
//   ))
// }
