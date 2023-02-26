import { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { AiOutlineHeart, AiFillHeart, AiOutlineCalendar } from 'react-icons/ai'
import { FiEdit, FiTrash } from 'react-icons/fi'
import axios from 'axios'
import './SinglePost.scss'
import { NotFound } from 'pages/NotFound'
import Alert from 'components/Alert'
import { userInfo } from 'components/userInfo/UserInfo'
import Card2 from 'components/Cards/Card2'

const SinglePost = () => {
  const [post, setPost] = useState({})
  const [id, setId] = useState([])
  const { postId } = useParams()
  const [alert, setAlert] = useState(false)
  const [like, setLike] = useState(false)
  const [postLike, setPostLike] = useState()
  const { userData } = userInfo()

  useEffect(() => {
    fetcher() // 驗證 parameter的 postId是否存在於資料庫
    getData()
  }, [])
  useEffect(() => { getPostLike() }, [userData])
  useEffect(() => { fillHeart() }, [postLike])

  function fetcher() {
    fetch(`${process.env.REACT_APP_DEV_URL}/blog/api`)
      .then(r => r.json())
      .then((data) => {
        const pId = data.post[0].post_id
        setId(pId)
      })
  }
  function getData() {
    fetch(`${process.env.REACT_APP_DEV_URL}/blog/post/${postId}`)
      .then(r => r.json())
      .then((data) => {
        setPost(data[0])
      })
      .catch(error => console.log(error))
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
    setLike(!like)
    if (userData) {
      if (!like) {
        axios.post(`${process.env.REACT_APP_DEV_URL}/blog/like`, { userMemberId: userData.member_id, postId })
        .then(r => console.log(r.data))
        .catch(err => console.log(err))
      } else {
        axios.delete(`${process.env.REACT_APP_DEV_URL}/blog/unlike/${postId}`)
        .then(r => console.log(r.data))
        .catch(err => console.log(err))
      }
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

  console.log(postLike)
  if (id.includes(postId)) {
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
                {/* TODO */}
                <p>
                  <Link to='#'>前一篇 </Link>
                  |
                  <Link to='#'> 後一篇</Link>
                </p>
              </div>
              {/* TODO */}
              {/* <div className="related-post">
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
                imgSrc={imgSrc[1]}
                imgAlt={imgAlt[1]}
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
            </div> */}
            </div>
          </div>
        </div>
      </>
    )
  } else {
    return <NotFound />
  }
}

export default SinglePost
