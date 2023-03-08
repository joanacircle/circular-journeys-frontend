import { useState, useEffect } from 'react'
import axios from 'axios'
import { BsFillArrowRightCircleFill, BsFillArrowLeftCircleFill } from 'react-icons/bs'
// import { BiSearch } from 'react-icons/bi'
import { userInfo } from 'components/userInfo/UserInfo'
import './HomeBlog.scss'
import Card from 'components/Cards/Card'
import Card2 from 'components/Cards/Card2'
import Banner from 'images/Blog/home-banner.jpg'

const HomeBlog = () => {
  const [post, setPost] = useState({
    popular: [],
    latest: []
  })
  const { userData } = userInfo()

  useEffect(() => { getData() }, [])

  function getData() {
    axios.get(`${process.env.REACT_APP_DEV_URL}/home`)
    .then(r => { setPost(r.data) })
    .catch(err => console.log(err))
  }

  return (
    <>
      <div className='home-banner section'>
        <img className='home-banner-img' src={Banner} alt="Banner"></img>
        <div className='title-section'>
          <h1 className='home-blog-h1'>高雄最棒的旅遊體驗</h1>
          {/* <form className='home-search'>
            <input className='home-input' placeholder="Search">
            </input>
            <button className='home-button' type="submit">
              <BiSearch className='home-search-icon' />
            </button>
          </form> */}
        </div>
      </div>
      <div>
      </div>

      <div className='blog-section'>
        <div className='post-section'>
          <h2>熱門文章</h2>
          <div className='card-container'>
            {/* <BsFillArrowLeftCircleFill className='arrow-left' /> */}
            {post.popular.length > 0 && post.popular.slice(0, 4).map((v, i) => {
              return (
                <>
                  <Card
                    key={'c' + v.post_id}
                    postId={v.post_id}
                    img={v.cover}
                    title={v.post_title} />
                </>
              )
            })}
            {/* <BsFillArrowRightCircleFill className='arrow-right' /> */}
          </div>
        </div>
        <div className='post-section'>
          <h2>最新文章</h2>
          <div className='card-container'>
            {/* <BsFillArrowLeftCircleFill className='arrow-left' /> */}
            {post.latest.length > 0 && post.latest.slice(0, 4).map((v, i) => {
              return (
                <>
                  <Card2
                    key={'c2' + v.post_id}
                    userMemberId={userData.member_id}
                    postId={v.post_id}
                    img={v.cover}
                    tags={v.tag}
                    title={v.post_title}
                    likes={v.total_likes}/>
                </>
              )
            })}
            {/* <BsFillArrowRightCircleFill className='arrow-right' /> */}
          </div>
        </div>
      </div>

    </>
  )
}

export default HomeBlog
