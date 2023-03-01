import { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import { BiSearch } from 'react-icons/bi'
import Pagination from 'rc-pagination'
import './UserBlog.scss'
import { userInfo } from 'components/userInfo/UserInfo'
import Card4 from 'components/Cards/Card4'
import BlogCategory from 'components/BlogCategory'
import TagsCategory from 'components/TagsCategory'
import { NotFound } from 'pages/NotFound'

const UserBlog = () => {
  const [post, setPost] = useState([{}])
  const [notFound, setNotFound] = useState(false)
  const [main, setMain] = useState(true)
  const [likePost, setLikePost] = useState([])
  const [currentPage, setCurrentPage] = useState(1)
  const [pageSize, setPageSize] = useState(4)
  const currentPost = post.slice((currentPage - 1) * pageSize, currentPage * pageSize)
  const currentLikePost = likePost.slice((currentPage - 1) * pageSize, currentPage * pageSize)
  const { memberId } = useParams()
  const { userData } = userInfo()

  // test
  console.log(post)

  useEffect(() => {
    fetcher() // 驗證 parameter的 memberId是否存在於資料庫
    getData()
    getArticle()
  }, [memberId])

  function fetcher() {
    axios.get(`${process.env.REACT_APP_DEV_URL}/blog/api/${memberId}`)
      .then(r => {
        if (r.data.member.length === 0) {
          setNotFound(!notFound)
        }
    })
    .catch(err => console.log(err))
  }
  // TODO: get not thing
  function getData() {
    axios.get(`${process.env.REACT_APP_DEV_URL}/blog/${memberId}`)
      .then(r => { setPost(r.data) })
      .catch(err => console.error(err))
  }

  function handleClick () { setMain(!main) }

  function getArticle () {
    axios.get(`${process.env.REACT_APP_DEV_URL}/blog/articleLike/${memberId}`)
      .then(r => { setLikePost(r.data) })
      .catch(err => console.log(err))
  }

  if (notFound) {
    return <NotFound />
  }
  return (
    <>
      <div>
        <div className='userblog-container'>
          <div className='page-body'>
            <div className='post-container'>
              <h2 className='userblog-h2'>{post[0].user_nickname}</h2>
              <div className='userblog-nav'>
                <ul>
                    {main
                    ? <>
                      <li className='Active'>主頁</li>
                      <li className='Inactive' onClick={handleClick}>喜歡的文章</li>
                      </>
                    : <>
                      <li className='Inactive' onClick={handleClick}>主頁</li>
                      <li className='Active'>喜歡的文章</li>
                      </>
                    }
                </ul>
              </div>
              {main
              ? post &&
                currentPost.map((v, i) => (
                  <Card4
                    key={'c4' + v.post_id}
                    userMemberId={userData.member_id}
                    tags={v.tag}
                    title={v.post_title}
                    postId={v.post_id}
                    img={v.cover}
                    createAt={v.create_at}
                    likes={v.total_likes}
                    postContent={v.post_content} />
                ))
              : likePost &&
                currentLikePost.map((v, i) => (
                  <Card4
                  key={'c4' + v.post_id}
                  userMemberId={userData.member_id}
                  tags={v.tag}
                  title={v.post_title}
                  postId={v.post_id}
                  img={v.cover}
                  createAt={v.create_at}
                  likes={v.total_likes}
                  postContent={v.post_content} />
                ))
              }
              <div className='userblog-pagination blog-pagination'>
                <Pagination
                  current={currentPage}
                  total={main ? post.length : likePost.length}
                  pageSize={4}
                  onChange={page => setCurrentPage(page)}
                />
              </div>
            </div>
            <div className='userblog-aside'>
              <div className="userblog-aside-item">
                <div className='member-avatar'>
                  <img src={post && post[0].picture} alt="avatar" />
                  {/* TODO: 如果會員沒有撰寫文章時 */}
                  <h4>{post && post[0].user_nickname}</h4>
                </div>
              </div>
              <div className='userblog-aside-item'>
                <form className='blog-search'>
                  <input className='blog-input' placeholder="Search">
                  </input>
                  <button className='blog-button' type="submit">
                    <BiSearch className='search-icon' />
                  </button>
                </form>
              </div>
              <div className='userblog-aside-item'>
                <BlogCategory />
              </div>
              <div className='userblog-aside-item'>
                <TagsCategory />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default UserBlog
