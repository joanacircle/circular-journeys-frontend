import { useState, useEffect } from 'react'
import { BsFillArrowRightCircleFill, BsFillArrowLeftCircleFill } from 'react-icons/bs'
import { BiSearch } from 'react-icons/bi'

import './HomeBlog.scss'
import Card from 'components/Cards/Card'
import Card2 from 'components/Cards/Card2'
import Banner from 'images/Blog/home-banner.jpg'
import B001 from 'images/Blog/B001.jpg'
import B002 from 'images/Blog/B002.jpeg'
import B003 from 'images/Blog/B003.jpeg'
import B004 from 'images/Blog/B004.jpeg'


const HomeBlog = () => {
  const [post, setPost] = useState({
    popular: [],
    latest: []
  })
  const [url, setUrl] = useState(`${process.env.REACT_APP_DEV_URL}/home`)
  useEffect(() => { getData() }, [])
  function getData() {
    fetch(url)
    .then(r => r.json())
    .then((data) => { setPost(data) })
    .catch(error => console.log(error))
  }

  // Card props:
  const postId = 'p123'
  const imgSrc = [B001, B002, B003, B004]
  const imgAlt = [B001, B002, B003, B004]
  const title = '假設文章標題上限為二十個字應該可以吧嗎吧'
  // Card2 props:
  const tags = ['旅遊', '旅遊']
  const tagId = 't123'
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
          {console.log(post.popular)}
          {post.popular.slice(0, 4).map((v, i) => {
            return (
              <>
                <Card
                  key={v.post_id}
                  postId={v.post_id}
                  imgSrc={imgSrc[i]}
                  imgAlt={imgAlt[i]}
                  title={v.post_title}
                />
              </>
            )
          })}
          <BsFillArrowRightCircleFill className='arrow-right'/>
        </div>
      </div>

      <div className='post-section'>
        <h2>最新文章</h2>
        <div className='card-container'>
          <BsFillArrowLeftCircleFill className='arrow-left' />
          {post.latest.slice(0, 4).map((v, i) => {
            return (
              <>
                <Card2
                  key={v.post_id}
                  tags={v.tag}
                  postId={v.post_id}
                  imgSrc={imgSrc[i]}
                  imgAlt={imgAlt[i]}
                  title={v.post_title}
                  likes={v.total_likes}/>
              </>
            )
          })}
          <BsFillArrowRightCircleFill className='arrow-right'/>
        </div>
      </div>
    </div>
    </>
  )
}

export default HomeBlog
