import React from 'react'

const TagCheckbox = (props) => {
  const { value, handleSelected, categories } = props
  return (
    <>
      <div className="checkbox">
        <label>
          <input
            type="checkbox"
            className="icheck"
            value={value}
            checked={categories.includes(value)}
            onChange={handleSelected}
          />{' '}
          {value}
        </label>
      </div>
    </>
  )
}

export default TagCheckbox
