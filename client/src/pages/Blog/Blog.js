import React from 'react'
import './Blog.scss'
import { BiSearch } from 'react-icons/bi'

import Banner from 'images/Blog/blog-banner.jpeg'

const Blog = () => {
  return (
    <>
    <div>
      <div className='blog-banner'>
        <img className='blog-banner-img' src={Banner} alt="Banner"></img>
        <h1 className='blog-h1'>高雄旅遊日誌</h1>
      </div>
      <div className='page-body'>
        <div className='blog-container'>
          <div className='blog-main'></div>
          <div className='blog-aside'>
          <form className='blog-search'>
            <input className='blog-input' placeholder="Search">
            </input>
            <button className='blog-button' type="submit">
            <BiSearch className='search-icon'/>
            </button>
          </form>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Blog
