import { React, useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { BiSearch } from 'react-icons/bi'
import Pagination from 'rc-pagination'

import './UserBlog.scss'
import Card4 from 'components/Cards/Card4'
import BlogCategory from 'components/BlogCategory'
import TagsCategory from 'components/TagsCategory'
// import p101 from 'images/Blog/p1i1.jpeg'

const UserBlog = () => {
  const [post, setPost] = useState([{}])
  const { memberId } = useParams()
  const [url, setUrl] = useState(`http://localhost:3001/blog/${memberId}`)
  useEffect(() => {
    getData()
  }, [url])
  function getData() {
    fetch(url)
    .then(r => r.json())
    .then((data) => {
      setPost(data)
    })
    .catch(error => console.error(error))
  }

  // console.log(post)

  // Card4 props:
  const tagId = 't123'
  const tags = '旅遊'
  const postId = 'p123'
  const imgSrc = 'p1i1.jpeg'
  const imgAlt = 'img'
  // TagsCategory props:
  const tagsCategory = ['左營', '高雄港', '壽山', '旗津', '一日遊', '夜市', '新開幕', '熱門打卡', '親子餐廳']

  return (
    <>
    {!post
    ? (<div>Loading...</div>)
    : (<div>
      <div className='userblog-container'>
        <div className='page-body'>
          <div className='post-container'>
            <h2 className='userblog-h2'>{post[0].member_id}</h2>
            <div className='userblog-nav'>
              <ul>
                <Link to='#'>
                  <li className='Active'>主頁</li>
                </Link>
                <Link to='#'>
                  <li>喜歡的文章</li>
                </Link>
              </ul>
            </div>
            {post.map((v, i) => {
              return (
                <Card4
                  key={v.post_id}
                  tagId={tagId}
                  tags={tags}
                  title={v.post_title}
                  postId={postId}
                  imgSrc={imgSrc}
                  imgAlt={imgAlt}
                  createAt={v.create_at}
                  likes={v.post_likes}
                  postContent={v.post_content}/>
              )
            })}

            <div className='userblog-pagination'>
              <Pagination />
            </div>
          </div>

          <div className='userblog-aside'>
            <div className="userblog-aside-item">
              <div className='member-avatar'>
                <img src="" alt="avatar" />
                <h4>{post[0].member_id}</h4>
              </div>
            </div>
            <div className='userblog-aside-item'>
              <form className='blog-search'>
                <input className='blog-input' placeholder="Search">
                </input>
                <button className='blog-button' type="submit">
                  <BiSearch className='search-icon'/>
                </button>
              </form>
            </div>
            <div className='userblog-aside-item'>
              <BlogCategory />
            </div>
            <div className='userblog-aside-item'>
              <TagsCategory tags={tagsCategory}/>
            </div>
          </div>
        </div>
      </div>
    </div>)
    }
    </>
  )
}

export default UserBlog
