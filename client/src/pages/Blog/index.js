import React from 'react'
import { Link } from 'react-router-dom'
import { BiSearch } from 'react-icons/bi'
import Pagination from 'rc-pagination'

import './Blog.scss'
import Banner from 'images/Blog/blog-banner.jpeg'
import Card3 from 'components/Cards/Card3'
import BlogCategory from 'components/BlogCategory'
import TagsCategory from 'components/TagsCategory'
import B001 from 'images/Blog/B001.jpg'


const Blog = () => {
  // 從 database 取得
  const tagsCategory = ['左營', '高雄港', '壽山', '旗津', '一日遊', '夜市', '新開幕', '熱門打卡', '親子餐廳']
  // Card3 props:
  const tags = ['旅遊', '旅遊', '旅遊']
  const postId = 'p123'
  const imgSrc = B001
  const imgAlt = 'imgAlt'
  const tagId = 't123' // 先抓到 tag value 在找到該 tag 的 id
  const memberId = '12348'
  const avatar = 'CircleChang'
  const title = '假設文章標題上限為二十個字應該可以吧嗎吧'
  const createAt = 'Feb 27, 2018 at 6:53pm'
  const likes = '10k'

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
                <Card3
                tags={tags}
                postId={postId}
                imgSrc={imgSrc}
                imgAlt={imgAlt}
                tagId={tagId}
                memberId={memberId}
                avatar={avatar}
                title={title}
                createAt={createAt}
                likes={likes}/>
              </div>
              <div className='blog-post col-md-6'>
              <Card3
                tags={tags}
                postId={postId}
                imgSrc={imgSrc}
                imgAlt={imgAlt}
                tagId={tagId}
                memberId={memberId}
                avatar={avatar}
                title={title}
                createAt={createAt}
                likes={likes}/>
              </div>
              <div className='blog-post col-md-6'>
              <Card3
                tags={tags}
                postId={postId}
                imgSrc={imgSrc}
                imgAlt={imgAlt}
                tagId={tagId}
                memberId={memberId}
                avatar={avatar}
                title={title}
                createAt={createAt}
                likes={likes}/>
              </div>
              <div className='blog-post col-md-6'>
              <Card3
                tags={tags}
                postId={postId}
                imgSrc={imgSrc}
                imgAlt={imgAlt}
                tagId={tagId}
                memberId={memberId}
                avatar={avatar}
                title={title}
                createAt={createAt}
                likes={likes}/>
              </div>
              <div className='blog-pagination'>
                <Pagination />
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
              <BlogCategory />
            </div>
            <div className='blog-aside-item'>
              <TagsCategory tags={tagsCategory}/>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Blog
