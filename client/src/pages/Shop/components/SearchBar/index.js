import React from 'react'
import './SearchBar.scss'
import { BiSearch } from 'react-icons/bi'
import Banner from 'images/shop/products/shop-banner.jpg'

const SearchBar = (props) => {
  const { searchWord, setSearchWord } = props
  return (
    <>
      <div className='banner-container'>
        <img src={Banner} className="banner-img" alt="banner" />
        <div className="input-group">
          <input type="search"
            className="form-control"
            placeholder="找商品"
            value={searchWord}
            onChange={(e) => setSearchWord(e.target.value)}
          />
          <button type="button" className="btn">
            <BiSearch className='bi-search' />
          </button>
        </div>
      </div>

    </>
  )
}

export default SearchBar
