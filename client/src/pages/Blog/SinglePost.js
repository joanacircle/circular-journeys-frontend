import { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { AiOutlineHeart, AiFillHeart, AiOutlineCalendar } from 'react-icons/ai'
import { FiEdit, FiTrash } from 'react-icons/fi'
import axios from 'axios'
import './SinglePost.scss'
import { NotFound } from 'pages/NotFound'
import Alert from 'components/Alert'
import { userInfo } from 'components/userInfo/UserInfo'

const SinglePost = () => {
  const [post, setPost] = useState({})
  const [notFound, setNotFound] = useState(false)
  const { postId } = useParams()
  const [alert, setAlert] = useState(false)
  const [like, setLike] = useState(false)
  const [postLike, setPostLike] = useState()
  const { userData } = userInfo()

  useEffect(() => {
    fetcher()
    getData()
  }, [postId])
  useEffect(() => { getPostLike() }, [userData])
  useEffect(() => { fillHeart() }, [postLike])

  function fetcher() {
    axios.get(`${process.env.REACT_APP_DEV_URL}/blog/api/${postId}`)
    .then(r => {
      if (r.data.post.length === 0) {
        setNotFound(!notFound)
      }
    })
    .catch(err => console.log(err))
  }

  function getData() {
    axios.get(`${process.env.REACT_APP_DEV_URL}/blog/post/${postId}`)
    .then(r => { setPost(r.data[0]) })
    .catch(err => console.log(err))
  }

  function getPostLike() {
    axios.get(`${process.env.REACT_APP_DEV_URL}/blog/postLike/${userData.member_id}`)
    .then(
      r => {
        r.data &&
        setPostLike(r.data)
      })
    .catch(err => console.log(err))
  }
  function fillHeart () {
    postLike &&
    postLike.includes(postId) &&
    setLike(true)
  }
  function handleClickLike () {
    if (userData.member_id) {
      axios.post(`${process.env.REACT_APP_DEV_URL}/blog/like`, { userMemberId: userData.member_id, postId })
        .then(r => r.data.success && setLike(!like))
        .catch(err => console.log(err))
    }
  }

  // Alert
  function handleClick () {
    setAlert(!alert)
  }

  function deletePost() {
    axios.delete(`${process.env.REACT_APP_DEV_URL}/blog/post/${post.post_id}`)
    .then(r => {
      console.log(r.data)
      window.location = `http://localhost:3000/blog/${post.member_id}`
    })
    .catch(err => console.log(err))
  }

  if (notFound) { return <NotFound /> }
  return (
    <>
      <div>
        <div className="post-container">
          {alert
          ? <Alert message='是否要刪除此篇文章' cancel={handleClick} confirm={deletePost}/>
          : <></>}
          <div className="page-body">
            <div className="post-header">
              <h2>{post.post_title}</h2>
              <ul className='tags-section'>
                {!post.tag
                  ? <></>
                  : Object.entries(post.tag).map(([key, value]) => (
                    <Link to={`/blog/tag/${key}`} key={key}>
                      <li># {value}</li>
                    </Link>
                  ))
                }
              </ul>
              <h5>BY:
                <Link to={`/blog/${post.member_id}`}>
                  {post.user_nickname}
                </Link>
              </h5>
              <div className='member-avatar'>
                <img src={post.picture} alt="fr" />
              </div>
              <div className='post-editor'>
              {post.member_id === userData.member_id && (
                <>
                <Link to={`/blog/edit/${postId}`} title='編輯文章'><FiEdit size={25}/></Link>
                <div onClick={handleClick}>
                  <Link>
                    <FiTrash size={25}/>
                  </Link>
                </div>
                </>
              )}
              </div>
            </div>
            <div className="head-img">
              <div dangerouslySetInnerHTML={{
                __html: post.cover
              }} />
            </div>
            <div className="post-body">
              <div className='post-meta'>
                <div className="createAt">
                  <AiOutlineCalendar size={25} className='icon' />
                  <p>{post.create_at}</p>
                </div>
                <div className="post-likes-group">
                  {post.total_likes === 0
                    ? (<p>{''}</p>)
                    : (<>
                      <AiOutlineHeart size={25} className='heart-icon' />
                      <p>{post.total_likes}</p>
                    </>)
                  }
                </div>
              </div>
              <div className='post-content'>
                <div dangerouslySetInnerHTML={{
                  __html: post.post_content
                }} />
              </div>
            </div>
            <div className="post-footer">
              <ul className='tags-section'>
                  {!post.tag
                    ? <></>
                    : Object.entries(post.tag).map(([key, value]) => (
                      <Link to={`/blog/tag/${key}`} key={key}>
                        <li># {value}</li>
                      </Link>
                    ))
                  }
                </ul>
              <p>
                即將要出發去旅行了嗎？ 按「喜歡」集中儲存您絕佳的想法。
              </p>
              {!like
              ? <AiOutlineHeart size={40} className='heart-icon' onClick={handleClickLike}/>
              : <AiFillHeart size={40} className='heart-icon' onClick={handleClickLike}/>
              }
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default SinglePost
