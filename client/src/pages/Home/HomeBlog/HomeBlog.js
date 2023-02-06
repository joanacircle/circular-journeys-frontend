import React from 'react'
import './HomeBlog.scss'
import { Container, Row, Col } from 'Styles/styled'
import { BsFillArrowRightCircleFill, BsFillArrowLeftCircleFill } from 'react-icons/bs'
import { BiSearch } from 'react-icons/bi'

import Card from 'components/Cards/Card'
import Card2 from 'components/Cards/Card2'
import Banner from 'images/Blog/home-banner.jpg'
import B001 from 'images/Blog/B001.jpeg'
import B002 from 'images/Blog/B002.jpeg'
import B003 from 'images/Blog/B003.jpeg'
import B004 from 'images/Blog/B004.jpeg'


const HomeBlog = () => {
  // Card props:
  const postId = 'b123'
  const imgSrc = [B001, B002, B003, B004]
  const imgAlt = [B001, B002, B003, B004]
  const title = '假設文章標題上限為二十個字應該可以吧嗎吧'
  // Card2 props:
  const tags = ['旅遊', '旅遊']
  const tagId = '2'
  const likes = '10k'

  return (
    <>
    <div className='home-banner section'>
      {/* alt 下關鍵字 */}
      <img className='home-banner-img' src={Banner} alt="Banner"></img>
      <div className='title-section'>
        <h1 className='home-blog-h1'>高雄最棒的旅遊體驗</h1>
        <form className='home-search'>
          <input className='home-input' placeholder="Search">
          </input>
          <button className='home-button' type="submit">
            <BiSearch className='home-search-icon'/>
          </button>
        </form>
      </div>
    </div>

    <div className='blog-section'>
      <div className='post-section'>
        <h2>熱門文章</h2>
        <div className='card-container'>
          <BsFillArrowLeftCircleFill className='arrow-left' />
            <Card
              postId={postId}
              imgSrc={imgSrc[0]}
              imgAlt={imgAlt[0]}
              title={title}/>
            <Card
              postId={postId}
              imgSrc={imgSrc[1]}
              imgAlt={imgAlt[1]}
              title={title}/>
            <Card
              postId={postId}
              imgSrc={imgSrc[2]}
              imgAlt={imgAlt[2]}
              title={title}/>
            <Card
              postId={postId}
              imgSrc={imgSrc[3]}
              imgAlt={imgAlt[3]}
              title={title}/>
          <BsFillArrowRightCircleFill className='arrow-right'/>
        </div>
      </div>

      <div className='post-section'>
        <h2>最新文章</h2>
        <div className='card-container'>
          <BsFillArrowLeftCircleFill className='arrow-left' />
          <Card2
            tags={tags}
            postId={postId}
            imgSrc={imgSrc[0]}
            imgAlt={imgAlt[0]}
            tagId={tagId}
            title={title}
            likes={likes}/>
          <Card2
            tags={tags}
            postId={postId}
            imgSrc={imgSrc[2]}
            imgAlt={imgAlt[2]}
            tagId={tagId}
            title={title}
            likes={likes}/>
          <Card2
            tags={tags}
            postId={postId}
            imgSrc={imgSrc[3]}
            imgAlt={imgAlt[3]}
            tagId={tagId}
            title={title}
            likes={likes}/>
          <BsFillArrowRightCircleFill className='arrow-right'/>
        </div>
      </div>
    </div>
    </>
  )
}

export default HomeBlog
