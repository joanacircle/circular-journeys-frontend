import React from 'react'
import './Blog.scss'
import { BiSearch } from 'react-icons/bi'

import Banner from 'images/Blog/blog-banner.jpeg'
import Card3 from 'components/Cards/Card3'
import B001 from 'images/Blog/B001.jpeg'


const Blog = () => {
  return (
    <>
    <div>
      <div className='blog-banner'>
        <img className='blog-banner-img' src={Banner} alt="Banner"></img>
        <h1 className='blog-h1'>
          高雄旅遊日誌
        </h1>
      </div>
      <div className='page-body'>
        <div className='blog-container row row-50 row-md-90 justify-content-md-center justify-content-xl-between'>
          <div className='col-md-10 col-lg-8 col-xl-7 text-center'>
            <div className='row row-30'>
              <div className='blog-post col-md-6'>
                <Card3 className='' imgSrc={B001} imgAlt="B001.jpg"
                tags='旅遊'
                avatar='CircleChang'
                title="文章標題" createAt='Feb 27, 2018 at 6:53pm' likes='10k'/>
              </div>
              <div className='blog-post col-md-6'>
                <Card3 className='' imgSrc={B001} imgAlt="B001.jpg"
                tags='旅遊'
                avatar='CircleChang'
                title="文章標題" createAt='Feb 27, 2018 at 6:53pm' likes='10k'/>
              </div>
              <div className='blog-post col-md-6'>
                <Card3 className='' imgSrc={B001} imgAlt="B001.jpg"
                tags='旅遊'
                avatar='CircleChang'
                title="文章標題" createAt='Feb 27, 2018 at 6:53pm' likes='10k'/>
              </div>
              <div className='blog-post col-md-6'>
                <Card3 className='' imgSrc={B001} imgAlt="B001.jpg"
                tags='旅遊'
                avatar='CircleChang'
                title="文章標題" createAt='Feb 27, 2018 at 6:53pm' likes='10k'/>
              </div>
            </div>
          </div>
          <div className='blog-aside col-md-10 col-lg-4'>
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
