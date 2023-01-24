import React from 'react'
import PriceRangeRadio from './PriceRangeRadio'
import TagCheckbox from './TagCheckbox'

function FilterBar(props) {
  const {
    priceRangeTypes,
    priceRange,
    setPriceRange,
    tagTypes,
    tags,
    setTags
  } = props

  const handleChecked = (e) => {
    const value = e.target.value
    if (!tags.includes(value)) return setTags([...tags, value])

    if (tags.includes(value)) {
      const newTags = tags.filter((v) => v !== value)
      setTags(newTags)
    }
  }
  return (
    <>
      <h2 className="grid-title">
        <i className="fa fa-filter"></i> 過濾
      </h2>
      <hr />

      <h4>價格</h4>

      {priceRangeTypes.map((value, i) => (
        <PriceRangeRadio
          key={i}
          value={value}
          priceRange={priceRange}
          setPriceRange={setPriceRange}
        />
      ))}

      <hr />

      <h4>
        標籤
        <button className="btn btn-link btn-sm" onClick={() => setTags([])}>
          重設
        </button>
      </h4>

      <p>有包含勾選標籤均會顯示</p>
      {tagTypes.map((value, i) => (
        <TagCheckbox
          value={value}
          key={i}
          tags={tags}
          handleChecked={handleChecked}
        />
      ))}

      <div className="padding"></div>
    </>
  )
}

export default FilterBar
