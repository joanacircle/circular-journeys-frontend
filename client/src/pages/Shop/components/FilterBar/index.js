import React from 'react'
import PriceRangeRadio from './PriceRangeRadio'
import TagCheckbox from './TagCheckbox'
import './FilterBar.scss'

const FilterBar = (props) => {
  const {
    categoryMenu,
    categories,
    setCategories,
    priceRangeMenu,
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
      <h4>
        商品分類

      </h4>

      {categoryMenu.map((value, i) => (
        <TagCheckbox
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

      <PriceRangeRadio />
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
