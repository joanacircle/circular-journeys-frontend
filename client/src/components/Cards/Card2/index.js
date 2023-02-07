import React from 'react'
import { Link } from 'react-router-dom'
import { AiOutlineHeart } from 'react-icons/ai'
import './Card2.scss'

const Card2 = (props) => {
  const value = props.tags
  return (
    <>
    <div className="card2">
      <Link to={`/blog/${props.postId}`}>
        <img src={props.imgSrc} className="card-img" alt={props.imgAlt} />
      </Link>
      <div className="card-body">
        <ul className='blog-tags'>
        {value.map((v, i) => {
          return (
            <li key={i}>
              <Link to={`/blog/${props.tagId}`}># {v}</Link>
            </li>
          )
        })}
        </ul>
          <h4 className='card-title'>
            {props.title}
          </h4>
        <div className='card-likes d-flex'>
          <AiOutlineHeart size={25} className='heart-icon'/>
          <p>{props.likes}</p>
        </div>
      </div>
    </div>
    </>

  )
}

export default Card2
