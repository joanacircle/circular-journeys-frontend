import React from 'react'
import './SearchBar.scss'

const SearchBar = (props) => {
  const { searchWord, setSearchWord } = props
  return (
    <>
      <div className="input-group">
        <input type="text"
          className='form-control'
          placeholder='找商品'
          value={searchWord}
          onChange={(e) => setSearchWord(e.target.value)}
        />
      </div>
    </>
  )
}

export default SearchBar
