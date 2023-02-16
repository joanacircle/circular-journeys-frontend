import React from 'react'
import { Link } from 'react-router-dom'
import { AiOutlineHeart } from 'react-icons/ai'
import './Card2.scss'

const Card2 = (props) => {
  const tag = props.tags // 傳入 object
  return (
    <>
    <div className="card2">
      <Link to={`/blog/post/${props.postId}`}>
        <img src={props.imgSrc} className="card-img" alt={props.imgAlt} />
      </Link>
      <div className="card-body">
        <ul className='blog-tags'>
        {!tag
        ? <li>Loading...</li>
        : Object.entries(tag).slice(0, 2).map(([key, value]) => (
          <Link to={`/blog/tag/${key}`} key={key}>
            <li># {value}</li>
          </Link>
        ))
        }
        </ul>
          <h5 className='card-title'>
            {props.title}
          </h5>
        <div className='card-likes d-flex'>
          <AiOutlineHeart size={25} className='heart-icon'/>
          {props.likes === 0
          ? <p></p>
          : <p>{props.likes}</p>
          }
        </div>
      </div>
    </div>
    </>

  )
}

export default Card2
