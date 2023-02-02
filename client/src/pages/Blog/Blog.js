import React from 'react'
import { Link } from 'react-router-dom'
import { BiSearch } from 'react-icons/bi'
import './Blog.scss'

import Banner from 'images/Blog/blog-banner.jpeg'
import Card3 from 'components/Cards/Card3'
import B001 from 'images/Blog/B001.jpeg'


const Blog = () => {
  const pages = [1, 2, 3, 4, 5]
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
        <div className='blog-container row justify-content-md-center justify-content-xl-between'>
          <div className='col-md-10 col-lg-8 col-xl-7 text-center'>
            <div className='row'>
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
              <div className='blog-pagination'>
                <ul>
                    {pages.map((v, i) => {
                        return (<li key={v}>{v}</li>)
                    })}
                </ul>
              </div>
            </div>
          </div>
          <div className='blog-aside col-md-10 col-lg-4'>
            <div className='blog-aside-item'>
              <form className='blog-search'>
                <input className='blog-input' placeholder="Search">
                </input>
                <button className='blog-button' type="submit">
                  <BiSearch className='search-icon'/>
                </button>
              </form>
            </div>
            <div className='blog-aside-item'>
              <h4>分類</h4>
              <ul className='blog-categories'>
                <Link to='/blog' title='Blog'>
                  <li>熱門</li>
                </Link>
                <Link to='/blog' title='Blog'>
                  <li>最新</li>
                </Link>
                <Link to='/blog' title='Blog'>
                  <li>美食</li>
                </Link>
                <Link to='/blog' title='Blog'>
                  <li>景點</li>
                </Link>
                <Link to='/blog' title='Blog'>
                  <li>住宿</li>
                </Link>
              </ul>
            </div>
            <div className='blog-aside-item'>
              <h4>探索</h4>
              <ul className='blog-aside-tags'>
                <li>左營</li>
                <li>高雄港</li>
                <li>壽山</li>
                <li>旗津</li>
                <li>一日遊</li>
                <li>夜市</li>
                <li>新開幕</li>
                <li>熱門打卡</li>
                <li>親子餐廳</li>
                <li>各種</li>
                <li>標籤</li>
                <li>想不到</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Blog
