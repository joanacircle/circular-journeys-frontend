import { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { AiOutlineHeart, AiFillHeart, AiOutlineCalendar } from 'react-icons/ai'
import { HiOutlineArrowLongRight } from 'react-icons/hi2'
import shortid from 'shortid'
import './Card4.scss'

const Card4 = (props) => {
  // props.tag 傳入 object
  const { userMemberId, tags, title, postId, img, createAt, likes, postContent, main } = props
  const [like, setLike] = useState(false)
  const [postLike, setPostLike] = useState()
  useEffect(() => { getPostLike() }, [like])
  useEffect(() => { fillHeart() }, [postLike])
  function getPostLike() {
    axios.get(`${process.env.REACT_APP_DEV_URL}/blog/postLike/${userMemberId}`)
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
    if (userMemberId) {
      axios.post(`${process.env.REACT_APP_DEV_URL}/blog/like`, { userMemberId, postId })
        .then(r => r.data.success && setLike(!like))
        .catch(err => console.log(err))
    }
  }

  return (
    <>
    <div className="card4">
      <div className="card-header">
        <div className='post-meta'>
          <div className="post-tags">
            <ul>
              {!tags
              ? <></>
              : Object.entries(tags).map(([key, value]) => {
                return (
                  <Link to={`/blog/tag/${key}`} key={shortid.generate()}>
                    <li># {value}</li>
                  </Link>
                )
              }
                )
              }
            </ul>
          </div>
          <div className='post-likes'>
            {!like
            ? <AiOutlineHeart size={35} className='heart-icon' onClick={handleClickLike}/>
            : <AiFillHeart size={35} className='heart-icon' onClick={handleClickLike}/>
            }
          </div>
        </div>
        <h2>{title}</h2>
      </div>

      <Link to={`/blog/post/${postId}`}>
        <div className="img-container">
          <div className="card-img" dangerouslySetInnerHTML={{
            __html: img
          }} />
        </div>
      </Link>

      <div className="card-footer">
        <div className="post-meta2">
          <div className="create-at-group">
            <AiOutlineCalendar
            className='calendar-icon'
            size={25} />
            <p>{createAt}</p>
          </div>
          <div className="post-likes-group">
            {likes === 0
            ? <p>{''}</p>
            : <>
              <AiOutlineHeart size={25} className='heart-icon'/>
              <p>{props.likes}</p>
              </>
            }
          </div>
        </div>
        <div className="post-content" dangerouslySetInnerHTML={{
            __html: postContent
          }} />
        <Link to={`/blog/post/${postId}`}>
          <div className="read-more">
            <p>閱讀更多</p>
            <HiOutlineArrowLongRight size={25} className='right-icon'/>
          </div>
        </Link>
      </div>
    </div>
    </>
  )
}

export default Card4
