import React from 'react'
import './SearchBar.scss'

const SearchBar = (props) => {
  const { searches, setSearches } = props
  return (
    <>
      <div className="input-group">
        <input type="text"
          className='form-control'
          placeholder='找商品'
          value={searches}
          onChange={(e) => setSearches(e.target.value)}
        />
      </div>
    </>
  )
}

export default SearchBar
