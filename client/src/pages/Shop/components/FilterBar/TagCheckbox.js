import React from 'react'

function TagCheckbox(props) {
  const { value, handleChecked, tags } = props
  return (
    <>
      <div className="checkbox">
        <label>
          <input
            type="checkbox"
            className="icheck"
            value={value}
            checked={tags.includes(value)}
            onChange={handleChecked}
          />{' '}
          {value}
        </label>
      </div>
    </>
  )
}

export default TagCheckbox
