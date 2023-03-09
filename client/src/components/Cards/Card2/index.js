import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai'
import shortid from 'shortid'
import './Card2.scss'

const Card2 = (props) => {
  // props.tags 傳入 object
  const { userMemberId, postId, img, tags, title, likes } = props
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
    if (userMemberId) {
      axios.post(`${process.env.REACT_APP_DEV_URL}/blog/like`, { userMemberId, postId })
        .then(r => r.data.success && setLike(!like))
        .catch(err => console.log(err))
    }
  }

  return (
    <>
    <div className="card2">
      <Link to={`/blog/post/${postId}`}>
        <div className="card-img" dangerouslySetInnerHTML={{
          __html: img
        }} />
      </Link>
      <div className="card-body">
        <ul className='blog-tags'>
        {!tags
        ? <></>
        : Object.entries(tags).slice(0, 2).map(([key, value]) => (
            <Link to={`/blog/tag/${key}`} key={shortid.generate()}>
              <li># {value}</li>
            </Link>
          ))
        }
        </ul>
          <h5 className='card-title'>
            {title}
          </h5>
        <div className='card-meta d-flex'>
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
    </>

  )
}

export default Card2
