import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai'
import axios from 'axios'
import shortid from 'shortid'
import './Card3.scss'

const Card3 = (props) => {
  // props.tags 傳入 object
  const { userMemberId, postId, img, tags, memberId, memberName, title, createAt, likes } = props
  const [like, setLike] = useState(false)
  const [postLike, setPostLike] = useState()
  useEffect(() => { getPostLike() }, [])
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
    setLike(!like)
    if (userMemberId) {
      if (!like) {
        axios.post(`${process.env.REACT_APP_DEV_URL}/blog/like`, { userMemberId, postId })
        .then(r => console.log(r.data))
        .catch(err => console.log(err))
      } else {
        axios.delete(`${process.env.REACT_APP_DEV_URL}/blog/unlike/${postId}`)
        .then(r => console.log(r.data))
        .catch(err => console.log(err))
      }
    }
  }

  return (
    <>
      <div className="card3">
        <Link to={`/blog/post/${postId}`}>
          <div className="card-img" dangerouslySetInnerHTML={{
            __html: img
          }} />
        </Link>
        <div className="card-caption">
          <div className='card-header d-flex'>
            <ul className='blog-tags d-flex'>
              {!tags
              ? <></>
              : Object.entries(tags).slice(0, 2).map(([key, value]) => (
                <Link to={`/blog/tag/${key}`} key={shortid.generate()}>
                  <li># {value}</li>
                </Link>
              ))
              }
            </ul>
            <ul className='blog-avatar d-flex'>
              <Link to={`/blog/${memberId}`}>
                <li>{memberName}</li>
              </Link>
            </ul>
          </div>
          <div className='card-body'>
            <h4>{title}</h4>
          </div>
          <div className='card-footer d-flex'>
            <div>
              {createAt}
            </div>
            <div className='d-flex'>
            {!like
            ? <AiOutlineHeart size={25} className='heart-icon' onClick={handleClickLike}/>
            : <AiFillHeart size={25} className='heart-icon' onClick={handleClickLike}/>
            }
              {props.likes === 0
              ? <p></p>
              : <p>{likes}</p>
              }
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Card3
