import React from 'react'
import './Blog.scss'
import { BiSearch } from 'react-icons/bi'

import Banner from 'images/Blog/blog-banner.jpeg'

const Blog = () => {
  return (
    <div className='page'>
      <section className='section blog-banner'>
        <img src={Banner} alt="Banner"></img>
        <h1>高雄旅遊日誌</h1>
      </section>
      <section className='page-body'>
        <div className='blog-section'></div>
        <div className='blog-aside'>
          <form className='blog-search'>
            <input className='blog-input' placeholder="Search">
            </input>
            <button className='blog-button' type="submit">
              <BiSearch className='search-icon'/>
            </button>
          </form>
        </div>
      </section>
    </div>
  )
}

export default Blog
