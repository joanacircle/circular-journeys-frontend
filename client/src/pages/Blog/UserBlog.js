import { useState, useEffect } from 'react'
import axios from 'axios'
import { Link, useParams } from 'react-router-dom'
import { BiSearch } from 'react-icons/bi'
import Pagination from 'rc-pagination'
import './UserBlog.scss'
import { userInfo } from 'components/userInfo/UserInfo'
import Card4 from 'components/Cards/Card4'
import BlogCategory from 'components/BlogCategory'
import TagsCategory from 'components/TagsCategory'
import { NotFound } from 'pages/NotFound'

const UserBlog = () => {
  const [post, setPost] = useState({})
  const [id, setId] = useState([])
  const [main, setMain] = useState(true)
  const [likePost, setLikePost] = useState({})
  const { memberId } = useParams()
  const { userData } = userInfo()

  useEffect(() => {
    fetcher() // 驗證 parameter的 memberId是否存在於資料庫
    getData()
    getArticle()
  }, [memberId])

  function fetcher() {
    fetch(`${process.env.REACT_APP_DEV_URL}/blog/api`)
      .then(r => r.json())
      .then((data) => {
        const mId = data.member[0].member_id
        setId(mId)
      })
  }
  function getData() {
    fetch(`${process.env.REACT_APP_DEV_URL}/blog/${memberId}`)
      .then(r => r.json())
      .then((data) => { setPost(data) })
      .catch(error => console.error(error))
  }

  function handleClick () {
    setMain(!main)
  }
  function getArticle () {
    axios.get(`${process.env.REACT_APP_DEV_URL}/blog/articleLike/${memberId}`)
    .then(r => { setLikePost(r.data) })
    .catch(err => console.log(err))
  }

  // TagsCategory props:
  const tagsCategory = ['左營', '高雄港', '壽山', '旗津', '一日遊', '夜市', '新開幕', '熱門打卡', '親子餐廳']

  if (id.includes(memberId)) {
    return (
      <>
        <div>
          <div className='userblog-container'>
            <div className='page-body'>
              <div className='post-container'>
                <h2 className='userblog-h2'>{post && post[0].user_nickname}</h2>
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
                  post.map((v, i) => (
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
                  likePost.map((v, i) => (
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
                <div className='userblog-pagination'>
                  <Pagination />
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
                  <TagsCategory tags={tagsCategory} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    )
  } else {
    return <NotFound />
  }
}

export default UserBlog
